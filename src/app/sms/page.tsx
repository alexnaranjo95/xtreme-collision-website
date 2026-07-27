import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "SMS Program | Xtreme Collision",
  description:
    "SMS messaging program details for XTREME COLLISION REPAIR, INC., including STOP and HELP instructions.",
  alternates: { canonical: "/sms" },
};

export default function SmsPage() {
  return (
    <LegalShell title="SMS Program" effectiveDate="10/12/2025">
      <p className="text-muted-foreground">
        XTREME COLLISION REPAIR, INC. may send SMS messages to customers who
        provide their mobile number and consent. Message frequency may vary.
        Message &amp; data rates may apply.
      </p>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-heading text-base font-bold uppercase tracking-tight text-primary">
            Opt out
          </h2>
          <p className="mt-2 text-muted-foreground">
            Reply <strong className="text-primary">STOP</strong> at any time.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-heading text-base font-bold uppercase tracking-tight text-primary">
            Help
          </h2>
          <p className="mt-2 text-muted-foreground">
            Reply <strong className="text-primary">HELP</strong> for assistance.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-heading text-base font-bold uppercase tracking-tight text-primary">
            Support
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            <a
              href="mailto:service@xtremecollisionrepairinc.nebulabrandgroup.com"
              className="text-accent underline-offset-4 hover:underline"
            >
              service@xtremecollisionrepairinc.nebulabrandgroup.com
            </a>
            <br />
            <a
              href="tel:+19727072348"
              className="text-accent underline-offset-4 hover:underline"
            >
              (972) 707-2348
            </a>
          </p>
        </div>
      </section>

      <p className="text-muted-foreground">
        For additional details, please review our{" "}
        <a href="/privacy" className="font-semibold text-accent underline-offset-4 hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="font-semibold text-accent underline-offset-4 hover:underline">
          Terms of Service
        </a>
        .
      </p>

      <section>
        <p className="font-semibold text-primary">XTREME COLLISION REPAIR, INC.</p>
        <p className="mt-1 text-muted-foreground">
          1501 S MOPAC EXPY STE 220
          <br />
          AUSTIN, TX 78746
        </p>
        <p className="mt-2 text-muted-foreground">
          Email: service@xtremecollisionrepairinc.nebulabrandgroup.com
          <br />
          Phone: (972) 707-2348
        </p>
      </section>
    </LegalShell>
  );
}
