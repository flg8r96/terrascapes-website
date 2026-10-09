import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "SMS Terms | TerraScapes Landscaping",
  description: "Terms for TerraScapes work-notification text messages.",
  alternates: { canonical: "/sms-terms" },
};

export default function SmsTermsPage() {
  return (
    <LegalPage title="SMS Terms and Conditions" updated="October 9, 2026">
      <h2>Program</h2>
      <p>
        TerraScapes Work Notifications. TerraScapes LLC sends work-related text messages to its own employees: daily job
        assignments with job PO numbers for crew leads, and new-customer lead alerts for office staff and owners. These messages
        are not marketing.
      </p>

      <h2>How to opt in</h2>
      <p>
        Employees opt in by texting START to the TerraScapes number from their own phone. You will receive a confirmation text.
        We only send messages to employees who have opted in.
      </p>

      <h2>Message frequency</h2>
      <p>Message frequency varies, typically one to a few messages per work day.</p>

      <h2>Cost</h2>
      <p>Message and data rates may apply, according to your mobile plan.</p>

      <h2>How to opt out</h2>
      <p>Reply STOP to any message to stop receiving texts. You will receive one confirmation and no further messages. Reply START to resubscribe.</p>

      <h2>Help</h2>
      <p>
        Reply HELP to any message, call (702) 600-1167, or email <a href="mailto:info@terrascapeslv.com">info@terrascapeslv.com</a>.
      </p>

      <h2>Carriers</h2>
      <p>Mobile carriers are not liable for delayed or undelivered messages.</p>

      <h2>Privacy</h2>
      <p>
        See our <a href="/privacy">Privacy Policy</a>. No mobile information will be shared with third parties or affiliates for
        marketing or promotional purposes. Text messaging originator opt-in data and consent are not shared with any third parties.
      </p>
    </LegalPage>
  );
}
