"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

// Relative path — this site's own /api/lead route (app/api/lead/route.ts) proxies
// server-to-server to the command center, so the browser's request is always
// same-origin no matter which domain is currently serving the site.
const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "/api/lead";

type Status = "idle" | "sending" | "done" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    // Honeypot: bots fill hidden fields; humans never see them.
    if (data.get("company_url")) {
      setStatus("done");
      setMessage("Thanks — we’ll be in touch shortly.");
      form.reset();
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "terrascapes",
          source: "website-contact-form",
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          budget: data.get("budget"),
          financing: data.get("financing"),
          message: data.get("message"),
          company_url: data.get("company_url"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("done");
        setMessage("Thanks — we’ll call you right back. If it’s urgent, call (702) 600-1167.");
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
    <section id="contact" className="scroll-mt-28 bg-[var(--cream)] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title mt-3 text-[var(--ink)]">Request your free estimate</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
            Enter your number and we’ll call you right back — usually within minutes. Tell us what you
            want to change and we’ll talk through scope, timing, and next steps.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <input className="field" id="lead-name" name="name" placeholder="Full name" required />
            <input className="field" name="phone" id="lead-phone" placeholder="Phone number" type="tel" required />
            <input className="field sm:col-span-2" name="email" placeholder="Email address" type="email" required />
            <select className="field" name="budget" defaultValue="" required>
              <option value="">Estimated budget</option>
              <option>Under $5,000</option>
              <option>$5,000–$15,000</option>
              <option>$15,000–$40,000</option>
              <option>$40,000+</option>
              <option>Not sure yet</option>
            </select>
            <select className="field" name="financing" defaultValue="" required>
              <option value="">Interested in financing?</option>
              <option value="Yes">Yes, tell me about financing</option>
              <option value="No">No financing needed</option>
              <option value="Not sure">Maybe / not sure</option>
            </select>
            <textarea
              className="field min-h-36 resize-y sm:col-span-2"
              name="message"
              placeholder="Job description — what do you need done?"
              required
            />
            {/* Honeypot — visually hidden, off-screen, not focusable. */}
            <div aria-hidden="true" className="hidden">
              <label>
                Company URL
                <input name="company_url" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Call me back"}
              </Button>
              {message && (
                <p
                  className={`mt-3 text-sm font-medium ${
                    status === "error" ? "text-red-600" : "text-[var(--ink)]"
                  }`}
                  role="status"
                >
                  {message}
                </p>
              )}
            </div>
          </form>
        </div>

        <aside className="rounded-md bg-[#07100d] p-8 text-white lg:p-10">
          <h3 className="font-serif text-3xl">Contact TerraScapes</h3>
          <div className="mt-8 grid gap-6 text-sm">
            <a href="#contact" className="flex items-start gap-4 text-white/75 transition hover:text-white">
              <Phone className="mt-0.5 h-5 w-5 text-[var(--brand)]" />
              <span><strong className="block text-white">(702) 600-1167</strong>Call or text</span>
            </a>
            <a href="#contact" className="flex items-start gap-4 text-white/75 transition hover:text-white">
              <Mail className="mt-0.5 h-5 w-5 text-[var(--brand)]" />
              <span><strong className="block text-white">info@terrascapeslv.com</strong>Email us</span>
            </a>
            <div className="flex items-start gap-4 text-white/75">
              <MapPin className="mt-0.5 h-5 w-5 text-[var(--brand)]" />
              <span><strong className="block text-white">Las Vegas Valley</strong>Las Vegas · Henderson · Summerlin</span>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/45">
            Licensed · Bonded · Insured<br />NV Lic. #0082269, #0094932
          </div>
        </aside>
      </div>
    </section>
  );
}
