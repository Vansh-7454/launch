import Link from "next/link";
import { getWhatsAppUrl } from "@/content/business";
import { Coffee, ArrowRight, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 bg-[#F5EDE2] text-center">
      <div className="mx-auto max-w-md px-4 space-y-6">
        <div className="inline-flex p-3.5 rounded-full bg-[#EFE3D5] text-[#A85F37] border border-[#E8D8C4]">
          <Coffee className="w-8 h-8 text-[#A85F37]" aria-hidden="true" />
        </div>

        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#8C4F2D]">
          404 · Page Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#2B1D17] font-display">
          Fresh Pot Needed
        </h1>

        <p className="text-sm sm:text-base text-[#63534B] leading-relaxed">
          The page you requested does not exist or may have been relocated. Our roastery on 12th Main Road is wide open, however.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/"
            className="btn-primary tap-target w-full sm:w-auto gap-2"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4 text-[#FFFCF7]" />
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary tap-target w-full sm:w-auto gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
