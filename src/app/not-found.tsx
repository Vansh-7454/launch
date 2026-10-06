import Link from "next/link";
import { getWhatsAppUrl } from "@/content/business";
import { Coffee, ArrowRight, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 bg-[#FBF9F5] text-center">
      <div className="mx-auto max-w-md px-4 space-y-6">
        <div className="inline-flex p-3 rounded-full bg-[#E8E2D9]/60 text-[#C26732] border border-[#DDD5C9]">
          <Coffee className="w-8 h-8" aria-hidden="true" />
        </div>

        <span className="block text-xs font-bold uppercase tracking-wider text-[#C26732]">
          404 · Page Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1512] font-display">
          Fresh Pot Needed
        </h1>

        <p className="text-sm text-[#5C4D44] leading-relaxed">
          The page you requested does not exist or may have been relocated. Our roastery on 12th Main Road is wide open, however.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#1C1512] px-5 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-[#C26732] transition-colors tap-target"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[#1C1512] bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-[#1C1512] hover:bg-[#FBF9F5] transition-colors tap-target"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
