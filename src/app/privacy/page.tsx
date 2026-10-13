import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "Privacy Policy | Malabar Roast & Co.",
  description: "Privacy policy and data handling transparency statement for Malabar Roast & Co., Indiranagar, Bengaluru.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-14 sm:py-20 bg-[#F5EDE2]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="bg-[#FFFCF7] rounded-2xl border border-[#E8D8C4] p-8 sm:p-12 shadow-sm space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#A85F37]">
            Legal Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#2B1D17] font-display">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#8A7B73]">
            Effective Date: October 2026 · Location: Bengaluru, Karnataka, India
          </p>

          <div className="space-y-4 text-sm text-[#63534B] leading-relaxed pt-4 border-t border-[#E8D8C4]">
            <h2 className="text-base font-bold text-[#2B211C]">1. Overview</h2>
            <p>
              {business.legalName} (&ldquo;{business.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the static information website at <code className="text-xs bg-[#EFE3D5] px-2 py-0.5 rounded border border-[#E8D8C4] text-[#2B1D17]">{business.siteUrl}</code>. We respect your personal privacy and are committed to clear, honest data practices.
            </p>

            <h2 className="text-base font-bold text-[#2B211C] pt-2">2. Data We Do Not Collect</h2>
            <p>
              This website is a static informational catalog. We do not use tracking cookies, tracking pixels, or third-party advertising trackers. We do not store payment card information, personal identity documents, or user profiles on this website.
            </p>

            <h2 className="text-base font-bold text-[#2B211C] pt-2">3. Direct Inquiries via WhatsApp and Phone</h2>
            <p>
              When you click our &ldquo;WhatsApp Us&rdquo;, &ldquo;Call Now&rdquo;, or &ldquo;Order on WhatsApp&rdquo; buttons, you are transferred directly to WhatsApp or your phone dialer. Any communication initiated through WhatsApp is subject to WhatsApp&apos;s Terms of Service and Privacy Policy. We use numbers provided solely to respond to your specific coffee inquiries, table reservations, or pickup orders.
            </p>

            <h2 className="text-base font-bold text-[#2B211C] pt-2">4. Third-Party Maps Service</h2>
            <p>
              Our website embeds an interactive Google Maps iframe to assist visitors with physical navigation to our Indiranagar roastery. Loading the map may transmit standard technical identifiers (such as your IP address) to Google LLC per Google&apos;s privacy policies.
            </p>

            <h2 className="text-base font-bold text-[#2B211C] pt-2">5. Contact Information</h2>
            <p>
              For any questions regarding our privacy practices or business operations, please write to:
            </p>
            <div className="bg-[#EFE3D5]/50 p-4 rounded-xl border border-[#E8D8C4] text-xs text-[#2B1D17] space-y-1">
              <p className="font-bold">{business.legalName}</p>
              <p>{business.fullAddress}</p>
              <p>Email: {business.email}</p>
              <p>Phone: {business.phone.display}</p>
            </div>

            <div className="pt-6 border-t border-[#E8D8C4]">
              <Link
                href="/"
                className="inline-flex items-center text-xs font-semibold text-[#A85F37] hover:text-[#93512D] hover:underline"
              >
                ← Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
