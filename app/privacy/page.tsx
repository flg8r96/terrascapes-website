import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | TerraScapes Landscaping",
  description: "How TerraScapes Landscaping collects, uses and protects your information, including text messaging.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 9, 2026">
      <p>
        TerraScapes LLC (&quot;TerraScapes,&quot; &quot;we,&quot; &quot;us&quot;) respects your privacy. This policy explains what
        information we collect through terrascapeslv.com, by phone and by text message, how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Information you give us: your name, phone number, email address, project address, project details, budget and financing preferences, when you fill out a form or contact us.</li>
        <li>Call and message records: when you call or text us, our phone system records the phone number, time and details of the call or message so we can respond.</li>
        <li>Website usage: like most websites, we use Google Analytics and Google Ads measurement, which use cookies to understand how visitors use the site and which ads lead to inquiries.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your inquiry, schedule site visits, prepare estimates and provide our services.</li>
        <li>To send work-related text messages to TerraScapes employees who have opted in (see SMS / Text Messaging below).</li>
        <li>To improve our website and measure our advertising.</li>
      </ul>

      <h2>How we share it</h2>
      <p>
        We do not sell your personal information. We share it only with service providers that help us run our business (for
        example website hosting, phone and text messaging, email, and accounting), and only as needed to provide those services,
        or when required by law.
      </p>

      <h2>SMS / Text messaging</h2>
      <p>
        TerraScapes sends work-related text messages (such as job assignments and new-customer alerts) to its own employees who
        have opted in by texting START to our number. Message frequency varies. Message and data rates may apply. Reply STOP to
        opt out at any time, or HELP for help. Full terms: <a href="/sms-terms">SMS Terms</a>.
      </p>
      <p>
        <strong>
          No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text
          messaging originator opt-in data and consent are not shared with any third parties.
        </strong>
      </p>

      <h2>How long we keep it</h2>
      <p>We keep customer and job records as long as needed to provide our services and to meet our legal, tax and warranty obligations.</p>

      <h2>Your choices</h2>
      <p>You can ask us to update or delete your contact information, or to stop contacting you, at any time using the contact details below.</p>

      <h2>Contact us</h2>
      <p>
        TerraScapes LLC, Las Vegas, Nevada<br />
        Phone: (702) 600-1167<br />
        Email: <a href="mailto:info@terrascapeslv.com">info@terrascapeslv.com</a>
      </p>

      <h2>Changes</h2>
      <p>We may update this policy from time to time. The date at the top shows when it was last updated.</p>
    </LegalPage>
  );
}
