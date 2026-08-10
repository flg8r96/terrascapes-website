// Same-origin proxy for the lead form. The browser posts to /api/lead on
// whatever domain is currently serving the site (terrascapeslv.com, a
// Railway preview domain, etc.) — this route forwards it server-to-server
// to the command center, which is the actual lead engine (Twilio bridge,
// Postgres, notifications). Avoids the browser ever needing to make a
// cross-origin request (and the CORS/preflight handling that implies).
const COMMAND_CENTER_LEAD_URL =
  process.env.COMMAND_CENTER_LEAD_URL || "https://command.thirdshiftautomation.com/api/lead";

export async function POST(request: Request) {
  const body = await request.text();
  try {
    const upstream = await fetch(COMMAND_CENTER_LEAD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return Response.json(
      { ok: false, error: "Couldn't reach the lead system. Please call us directly." },
      { status: 502 }
    );
  }
}
