import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { ChatWidget } from "@/components/ChatWidget";
import { MobileBar } from "@/components/MobileBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chat With Us | Xtreme Collision",
  description:
    "Message Xtreme Collision for appointment help, reminders, and support. Opt in to SMS through our chat widget.",
  alternates: { canonical: "/chat" },
  robots: { index: false, follow: true },
};

export default function ChatPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-16 md:pb-0">
        <section className="relative min-h-[70vh] overflow-hidden bg-primary text-primary-foreground">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.35),transparent_55%),linear-gradient(160deg,#16183a_0%,#0f1128_55%,#1a1d45_100%)]"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-6 px-4 py-20 sm:py-28">
            <Image
              src="/images/xtreme-logo.png"
              alt={site.name}
              width={240}
              height={80}
              className="h-14 w-auto sm:h-16"
              priority
            />
            <h1 className="font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
              Chat with Xtreme Collision
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Use the chat bubble to message us about appointments, reminders,
              and support. By sharing your mobile number in chat, you agree to
              receive SMS from XTREME COLLISION REPAIR, INC. Message frequency
              varies. Message &amp; data rates may apply. Reply STOP to cancel,
              HELP for help.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
              <span className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-3 text-accent-foreground">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Open the chat bubble to continue
              </span>
              <a
                href={site.phoneHref}
                className="text-primary-foreground/80 underline-offset-4 hover:text-accent hover:underline"
              >
                Or call {site.phone}
              </a>
            </div>
            <nav
              aria-label="Messaging legal"
              className="flex flex-wrap gap-4 pt-2 text-sm text-primary-foreground/70"
            >
              <a href="/privacy" className="underline-offset-4 hover:text-accent hover:underline">
                Privacy Policy
              </a>
              <a href="/terms" className="underline-offset-4 hover:text-accent hover:underline">
                Terms of Service
              </a>
              <a href="/sms" className="underline-offset-4 hover:text-accent hover:underline">
                SMS Program
              </a>
            </nav>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileBar />
      <ChatWidget />
    </>
  );
}
