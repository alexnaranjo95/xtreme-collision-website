import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Xtreme Collision",
  description:
    "Privacy Policy for XTREME COLLISION REPAIR, INC., including SMS messaging data practices and customer information handling.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="XTREME COLLISION REPAIR, INC. Privacy Policy"
      effectiveDate="10/12/2025"
    >
      <div className="rounded-xl border border-border bg-secondary p-5">
        <p className="font-semibold text-primary">
          IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA
        </p>
        <p className="mt-2 text-muted-foreground">
          XTREME COLLISION REPAIR, INC. (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) DOES NOT share customer opt-in information, including
          phone numbers and consent records, with any affiliates or third
          parties for marketing, promotional, or any other purposes unrelated to
          providing our direct services. All text messaging originator opt-in
          data is kept strictly confidential.
        </p>
      </div>

      <section>
        <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-primary">
          1. Information We Collect
        </h2>
        <p className="mt-3 text-muted-foreground">
          We collect the following types of information:
        </p>
        <h3 className="mt-4 font-heading text-base font-semibold uppercase text-primary">
          Personal Information:
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Name, email address, phone number, physical address</li>
          <li>Payment information when you make a purchase or request a quote</li>
          <li>
            Opt-in records and timestamps for all communication channels (SMS,
            email, etc.)
          </li>
        </ul>
        <h3 className="mt-4 font-heading text-base font-semibold uppercase text-primary">
          Non-Personal Information:
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>IP address, browser type, device information</li>
          <li>Website usage patterns and analytics</li>
          <li>Cookies and similar technologies</li>
        </ul>
        <h3 className="mt-4 font-heading text-base font-semibold uppercase text-primary">
          Customer Communication:
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Records of inquiries and service requests</li>
          <li>Appointment details and preferences</li>
          <li>Service history and feedback</li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-primary">
          2. How We Use Your Information
        </h2>
        <p className="mt-3 text-muted-foreground">We use collected data for:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Providing and improving our services</li>
          <li>Processing transactions and payments</li>
          <li>
            Communicating with you about your inquiries, appointments, and
            promotions
          </li>
          <li>Enhancing website functionality and user experience</li>
          <li>Ensuring security and fraud prevention</li>
          <li>
            Maintaining records of your communication preferences and consent
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-primary">
          3. SMS Messaging &amp; Compliance
        </h2>
        <p className="mt-3 font-semibold text-primary">
          Text Message Program Terms &amp; Conditions
        </p>
        <p className="mt-2 text-muted-foreground">
          By opting into our SMS messaging services, you agree to receive text
          messages related to our services, including appointment reminders,
          customer support, and important updates.
        </p>
        <h3 className="mt-4 font-heading text-base font-semibold uppercase text-primary">
          Opt-In &amp; Consent:
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>You will only receive messages if you have explicitly opted in</li>
          <li>We maintain timestamped records of all opt-in actions</li>
          <li>
            We comply with the Telephone Consumer Protection Act (TCPA) and all
            applicable laws
          </li>
        </ul>
        <h3 className="mt-4 font-heading text-base font-semibold uppercase text-primary">
          Opt-Out Instructions:
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>You can cancel SMS notifications at any time by replying &quot;STOP&quot;</li>
          <li>
            You will receive a final confirmation message, and no further
            messages will be sent unless you re-opt in
          </li>
          <li>All opt-out requests are processed immediately</li>
        </ul>
        <h3 className="mt-4 font-heading text-base font-semibold uppercase text-primary">
          Message Frequency &amp; Content:
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Message frequency varies based on your interactions with our
            business
          </li>
          <li>
            Messages will be directly related to the services you have requested
          </li>
          <li>
            We do not send promotional content without specific consent
          </li>
        </ul>
        <h3 className="mt-4 font-heading text-base font-semibold uppercase text-primary">
          Help &amp; Support:
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Reply &quot;HELP&quot; for assistance or contact us at{" "}
            service@xtremecollisionrepairinc.nebulabrandgroup.com
          </li>
          <li>Customer support is available during regular business hours</li>
        </ul>
        <h3 className="mt-4 font-heading text-base font-semibold uppercase text-primary">
          Carrier Information:
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Standard message and data rates may apply</li>
          <li>Carriers are not liable for delayed or undelivered messages</li>
          <li>
            Supported carriers include AT&amp;T, Verizon, T-Mobile, Sprint, and
            most regional carriers
          </li>
        </ul>
        <p className="mt-4 font-semibold text-primary">
          SMS Data Protection Statement
        </p>
        <p className="mt-2 text-muted-foreground">
          No mobile information will be shared with third parties/affiliates for
          marketing/promotional purposes. Information sharing to subcontractors
          in support services, such as customer service is permitted. All other
          use case categories exclude text messaging originator opt-in data and
          consent; this information will not be shared with any third parties.
        </p>
        <p className="mt-2 text-muted-foreground">
          We implement strict data protection measures to safeguard your SMS
          opt-in information and consent records.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-primary">
          4. Information Sharing &amp; Disclosure
        </h2>
        <p className="mt-3 text-muted-foreground">
          We do not sell, rent, or trade personal information. We may share
          information with:
        </p>
        <h3 className="mt-4 font-heading text-base font-semibold uppercase text-primary">
          Service Providers:
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Third-party vendors who assist in our operations (e.g., payment
            processing, appointment scheduling)
          </li>
          <li>
            SMS aggregators and providers solely for the purpose of delivering
            messages you&apos;ve consented to receive
          </li>
          <li>
            All service providers are contractually obligated to maintain
            confidentiality and security
          </li>
        </ul>
        <h3 className="mt-4 font-heading text-base font-semibold uppercase text-primary">
          Legal Compliance:
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            If required by law, legal process, or to protect our rights
          </li>
          <li>
            In response to valid law enforcement requests or court orders
          </li>
        </ul>
        <h3 className="mt-4 font-heading text-base font-semibold uppercase text-primary">
          Business Transfers:
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>In case of mergers, acquisitions, or sale of assets</li>
          <li>
            In such cases, your data remains protected under the terms of this
            policy
          </li>
        </ul>
        <p className="mt-3 text-muted-foreground">
          All the above categories exclude text messaging originator opt-in data
          and consent; this information will not be shared with any third
          parties, excluding aggregators and providers of the Text Message
          services.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-primary">
          5. Data Security
        </h2>
        <p className="mt-3 text-muted-foreground">
          We implement and maintain reasonable security measures to protect your
          personal information:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Encryption of sensitive data in transit and at rest</li>
          <li>Secure access controls and authentication mechanisms</li>
          <li>Regular security assessments and updates</li>
          <li>Employee training on data protection</li>
          <li>
            Breach notification protocols in accordance with applicable laws
          </li>
          <li>Secure backup systems and disaster recovery procedures</li>
        </ul>
        <p className="mt-3 text-muted-foreground">
          Despite these measures, no method of transmission over the Internet or
          electronic storage is 100% secure. We strive to use commercially
          acceptable means to protect your personal information but cannot
          guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-primary">
          6. Cookies &amp; Tracking Technologies
        </h2>
        <p className="mt-3 text-muted-foreground">
          We use cookies and similar technologies to:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Analyze site traffic and user behavior</li>
          <li>Remember your preferences</li>
          <li>Improve website functionality and user experience</li>
          <li>Measure the effectiveness of our services</li>
        </ul>
        <p className="mt-3 text-muted-foreground">
          You may control cookies through your browser settings. Disabling
          cookies may limit your ability to use certain features of our website.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-primary">
          7. Your Rights &amp; Choices
        </h2>
        <p className="mt-3 text-muted-foreground">You have the right to:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Access, update, or delete your personal information</li>
          <li>
            Opt-out of marketing emails by clicking &quot;unsubscribe&quot; in
            our emails
          </li>
          <li>Opt-out of SMS messages by replying &quot;STOP&quot;</li>
          <li>Request information on how we process your data</li>
          <li>
            Withdraw consent at any time for future communications
          </li>
          <li>
            Lodge a complaint with a supervisory authority if you believe your
            rights have been violated
          </li>
        </ul>
        <p className="mt-3 text-muted-foreground">
          To exercise these rights, please contact us using the information in
          Section 10.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-primary">
          8. Third-Party Links
        </h2>
        <p className="mt-3 text-muted-foreground">
          Our website may contain links to third-party websites. We are not
          responsible for their privacy practices and encourage you to review
          their policies. This privacy policy applies only to information
          collected by XTREME COLLISION REPAIR, INC.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-primary">
          9. Changes to This Privacy Policy
        </h2>
        <p className="mt-3 text-muted-foreground">
          We may update this policy periodically. The latest version will always
          be available on our website with the effective date. For significant
          changes, we will notify you by email or through a notice on our
          website.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-primary">
          10. Contact Us
        </h2>
        <p className="mt-3 text-muted-foreground">
          If you have questions about this Privacy Policy or how your
          information is handled, contact us at:
        </p>
        <p className="mt-3 font-semibold text-primary">
          XTREME COLLISION REPAIR, INC.
        </p>
        <p className="text-muted-foreground">Phone: (972) 707-2348</p>
        <p className="text-muted-foreground">
          Email: service@xtremecollisionrepairinc.nebulabrandgroup.com
        </p>
        <p className="mt-3 text-muted-foreground">
          By using our website and services, you consent to this Privacy Policy.
        </p>
      </section>
    </LegalShell>
  );
}
