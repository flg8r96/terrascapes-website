"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

// Same endpoint as components/contact.tsx: this site's own /api/lead route,
// which proxies server-to-server to the command center lead engine (Twilio
// bridge call to the office, Postgres, SMS/email alerts).
const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "/api/lead";

type Offer = "redesign" | "maintenance";
type Status = "idle" | "sending" | "done" | "error";

// The command center requires message, budget and financing for site=terrascapes
// (the office whisper reads them back). The message leads with the offer so the
// whisper says what the caller wants first. Financing isn't asked here
// (TerraScapes prefers not to promote it), so it's sent as an honest "Not asked".
const OFFERS: Record<Offer, { service: string; label: string }> = {
  redesign: { service: "Yard redesign (watering stake page)", label: "Yard redesign" },
  maintenance: { service: "Landscape maintenance (watering stake page)", label: "Maintenance" },
};

export function StakeLeadForm({ offer, nameId }: { offer: Offer; nameId?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const cfg = OFFERS[offer];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("company_url")) {
      setStatus("done");
      setMessage("Thanks. We’ll be in touch shortly.");
      form.reset();
      return;
    }

    const notes = String(data.get("notes") || "").trim();
    const choice = String(data.get("choice") || "").trim();
    const budget = offer === "redesign" ? choice : `Maintenance: ${choice}`;
    const lead =
      offer === "redesign"
        ? `Yard redesign (watering stake gift).${notes ? ` ${notes}` : ""}`
        : `Maintenance, ${choice.toLowerCase()} (watering stake gift).${notes ? ` ${notes}` : ""}`;

    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "terrascapes",
          source: "watering-stake-page",
          service: cfg.service,
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          budget,
          financing: "Not asked",
          message: lead,
          company_url: data.get("company_url"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("done");
        setMessage("Thanks. We’ll call you right back. If it’s urgent, call (702) 600-1167.");
        window.gtag?.("event", "generate_lead", { method: `watering-stake-${offer}` });
        form.reset();
      } else {
        setStatus("error");
        setMessage(json.error || "Something went wrong. Please call (702) 600-1167.");
      }
    } catch {
      setStatus("error");
      setMessage("Couldn’t reach us just now. Please call (702) 600-1167.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
      <input className="field" id={nameId} name="name" placeholder="Full name" autoComplete="name" required />
      <input className="field" name="phone" placeholder="Phone number" type="tel" autoComplete="tel" required />
      <input className="field" name="email" placeholder="Email address" type="email" autoComplete="email" required />
      {offer === "redesign" ? (
        <select className="field" name="choice" defaultValue="" required>
          <option value="">Estimated budget</option>
          <option>Under $5,000</option>
          <option>$5,000–$15,000</option>
          <option>$15,000–$40,000</option>
          <option>$40,000+</option>
          <option>Not sure yet</option>
        </select>
      ) : (
        <select className="field" name="choice" defaultValue="" required>
          <option value="">How often?</option>
          <option>Weekly</option>
          <option>Every other week</option>
          <option>Monthly</option>
          <option>Not sure yet</option>
        </select>
      )}
      <textarea
        className="field min-h-24 resize-y"
        name="notes"
        placeholder={
          offer === "redesign"
            ? "What would you change? (optional)"
            : "Front, back, or both? Anything we should know? (optional)"
        }
      />
      <div aria-hidden="true" className="hidden">
        <label>
          Company URL
          <input name="company_url" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div>
        <Button type="submit" disabled={status === "sending"} className="w-full">
          {status === "sending" ? "Sending…" : "Call me back"}
        </Button>
        {message && (
          <p
            className={`mt-3 text-sm font-medium ${status === "error" ? "text-red-300" : "text-white"}`}
            role="status"
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
