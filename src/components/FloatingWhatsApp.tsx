"use client";

import { business, getWhatsAppUrl } from "@/content/business";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Direct WhatsApp contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 pointer-events-none pb-[env(safe-area-inset-bottom,0px)]"
    >
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 tap-target focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] border border-white/20"
        aria-label={`Chat with ${business.name} on WhatsApp (Opens in new window)`}
      >
        <MessageCircle className="h-5 w-5 fill-current shrink-0" aria-hidden="true" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
