import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/content/business";
import { brandStory } from "@/content/story";
import GallerySection from "@/components/GallerySection";
import { MessageCircle, MapPin, Coffee, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand Story & Sourcing | Indiranagar Roastery",
  description:
    "Learn about Malabar Roast & Co.'s direct sourcing from Chikmagalur and Wayanad family estates and small-batch roasting on 12th Main Road, Indiranagar.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#F5EDE2]">
      <div className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE3D5] border border-[#E8D8C4] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C4F2D]">
              <Coffee className="w-3.5 h-3.5 text-[#A85F37]" />
              <span>Our Origin &amp; Craft</span>
            </div>
            <h1 className="mt-3.5 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2B1D17] font-display">
              {brandStory.headline}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#63534B] leading-relaxed max-w-xl">
              {brandStory.subheadline}
            </p>
          </div>

          {/* Visual Story Banner */}
          <div className="mt-10 rounded-2xl border border-[#E8D8C4] bg-[#FFFCF7] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] bg-[#E8D8C4]">
              <Image
                src="/images/story-roasting.jpg"
                alt="Small-batch drum roasted coffee beans in cooling tray at Malabar Roast & Co."
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A85F37] uppercase tracking-[0.14em]">
                <Sparkles className="w-4 h-4 text-[#A85F37]" />
                <span>Sourcing Standard</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2B1D17] font-display">
                The Western Ghats Canopy
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#63534B] leading-relaxed max-w-xl">
                {brandStory.storySentences.map((sentence, idx) => (
                  <p key={idx}>{sentence}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Core Differentiation Manifesto - Warm Espresso Accent Section */}
          <div className="mt-10 rounded-2xl bg-[#241712] text-[#FFFCF7] p-7 sm:p-10 border border-[#3E2B22] shadow-md">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C97D52]">
              Direct Sourcing Commitment
            </span>
            <p className="mt-2.5 text-lg sm:text-xl font-normal font-display text-[#FFFCF7] leading-relaxed max-w-3xl">
              &ldquo;{brandStory.differentiationStatement}&rdquo;
            </p>
          </div>

          {/* Core Pillars */}
          <div className="mt-14 sm:mt-18">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#2B1D17] font-display mb-6">
              How We Prepare Every Batch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {brandStory.corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="coffee-card p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EFE3D5] border border-[#E8D8C4] flex items-center justify-center text-[#A85F37] font-mono text-xs font-bold mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-[#2B1D17] font-display">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#63534B] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Visual Glimpse of the Roastery */}
      <GallerySection />

      {/* Visit & Connect CTA */}
      <div className="py-14 sm:py-20 bg-[#F5EDE2]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#E8D8C4] bg-[#FFFCF7] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2B1D17] font-display">
              Taste This Week&apos;s Roast in Indiranagar
            </h2>
            <p className="text-sm text-[#63534B] leading-relaxed max-w-lg mx-auto">
              Our brew bar is open daily from 07:30 AM on 12th Main Road. Baristas are always on hand to discuss origin notes and brewing methods.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/contact"
                className="btn-primary tap-target group w-full sm:w-auto justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#FFFCF7] shrink-0" />
                <span>Get Directions to Roastery</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFFCF7] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href={getWhatsAppUrl("Hi Malabar Roast & Co., I would like to ask about this week's single origin roasts.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary tap-target w-full sm:w-auto justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366] shrink-0" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
