"use client";

import { business, getWhatsAppUrl } from "@/content/business";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Direct WhatsApp contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 pointer-events-none pb-[env(safe-area-inset-bottom,0px)]"
    >
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white p-3 sm:px-4 sm:py-2.5 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#20BA59] active:scale-95 tap-target focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        aria-label={`Chat with ${business.name} on WhatsApp (Opens in new window)`}
      >
        <MessageCircle className="h-5 w-5 fill-current" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
