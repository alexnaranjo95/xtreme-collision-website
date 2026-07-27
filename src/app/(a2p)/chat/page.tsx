import type { Metadata } from "next";
import Image from "next/image";
import { ChatWidget } from "@/components/ChatWidget";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chat With Us | Xtreme Collision",
  description:
    "Message Xtreme Collision for appointment confirmations, reminders, and support via our SMS-enabled chat widget.",
  alternates: { canonical: "/chat" },
  robots: { index: false, follow: true },
};

/**
 * Bare A2P opt-in page: chat widget only.
 * No estimate forms, phone fields, number-pool scripts, or CTAs that link to forms.
 */
export default function ChatPage() {
  return (
    <>
      <main className="min-h-screen bg-[#16183a] text-white">
        <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-6 px-6 py-16">
          <Image
            src="/images/xtreme-logo.png"
            alt={site.name}
            width={220}
            height={74}
            className="h-14 w-auto"
            priority
          />
          <h1 className="font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            XTREME COLLISION REPAIR, INC.
          </h1>
          <p className="text-base leading-relaxed text-white/80">
            Use the chat bubble on this page to message us. By providing your
            mobile number in chat, you consent to receive SMS appointment
            confirmations, reminders, and support messages from XTREME COLLISION
            REPAIR, INC. Message frequency varies. Message and data rates may
            apply. Reply STOP to cancel. Reply HELP for help. Consent is not a
            condition of purchase.
          </p>
          <p className="text-sm text-white/65">
            Open the chat bubble in the corner to get started.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-4 text-sm">
            <a
              href="/privacy"
              className="text-[#e11d2e] underline-offset-4 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[#e11d2e] underline-offset-4 hover:underline"
            >
              Terms of Service
            </a>
            <a
              href="/sms"
              className="text-[#e11d2e] underline-offset-4 hover:underline"
            >
              SMS Program
            </a>
          </nav>
        </div>
      </main>
      <ChatWidget />
    </>
  );
}
