import Image from "next/image";
import Link from "next/link";
import { business, getWhatsAppUrl, getOrderWhatsAppUrl } from "@/content/business";
import { menuItems, formatInrPrice } from "@/content/menu";
import { brandStory } from "@/content/story";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import { Phone, MessageCircle, ArrowRight, Sparkles, MapPin } from "lucide-react";

export default function HomePage() {
  // Item 0 is highlighted as the Featured Coffee Item; remaining 7 items fill the 2-column grid
  const featuredItem = menuItems[0];
  const gridItems = menuItems.slice(1);

  return (
    <div className="flex flex-col">
      {/* ============================================================== */}
      {/* 1. HERO SECTION — WARM LATTE EDITORIAL COMPOSITION            */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden border-b border-[#D8C7B5] bg-[#F4EDE2] py-14 sm:py-18 lg:py-22 animate-hero-fade">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
            {/* Left Content (7 cols desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
              {/* Location Eyebrow Badge — Caramel / roasted terracotta */}
              <div className="inline-flex items-center gap-1.5 self-start rounded bg-[#E8D8C5] border border-[#D8C7B5] px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A9653F]">
                <MapPin className="w-3.5 h-3.5 text-[#A9653F]" aria-hidden="true" />
                <span>Indiranagar, Bengaluru · 12th Main Road</span>
              </div>

              {/* Main Heading — Strong editorial serif in deep coffee brown */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-bold tracking-tight text-[#2B211C] font-display leading-[1.04]">
                MALABAR<br />ROAST &amp; CO.
              </h1>

              {/* One-Line Promise — Soft coffee grey with comfortable leading */}
              <p className="text-base sm:text-lg lg:text-[18px] text-[#6F6258] max-w-[540px] leading-[1.6] font-normal">
                {business.oneLinePromise}
              </p>

              {/* Hero CTA Row — Strict 3-level hierarchy */}
              <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Primary CTA: WhatsApp (Deep Coffee Brown + Cream Text) */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary tap-target"
                  aria-label="WhatsApp us"
                >
                  <MessageCircle className="h-4 w-4 fill-[#FFF9F1] text-[#FFF9F1] shrink-0" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>

                {/* Secondary CTA: Call (Transparent with Coffee Brown Border & Text) */}
                <a
                  href={`tel:${business.phone.tel}`}
                  className="btn-secondary tap-target"
                  aria-label={`Call Roastery: ${business.phone.display}`}
                >
                  <Phone className="h-4 w-4 text-[#A9653F] shrink-0" aria-hidden="true" />
                  <span>Call Now</span>
                </a>

                {/* Tertiary Link: View Full Menu */}
                <Link
                  href="/menu"
                  className="group inline-flex items-center gap-1.5 px-3 py-3 font-semibold text-xs sm:text-sm text-[#A9653F] hover:text-[#8B4E2B] tap-target"
                >
                  <span>View Full Menu</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A9653F] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>

              {/* Supporting Information — Horizontal strip with thin warm separators */}
              <div className="pt-6 sm:pt-7 border-t border-[#D8C7B5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="sm:border-r border-[#D8C7B5] sm:pr-4">
                  <span className="block font-bold uppercase tracking-[0.14em] text-[#A9653F] text-[10px]">
                    Single Origin
                  </span>
                  <span className="text-sm font-bold text-[#2B211C] font-display mt-0.5 block">
                    Western Ghats
                  </span>
                  <span className="text-[#6F6258] text-[11px] leading-snug block mt-0.5">
                    Chikmagalur &amp; Wayanad
                  </span>
                </div>
                <div className="sm:border-r border-[#D8C7B5] sm:pr-4 sm:pl-2">
                  <span className="block font-bold uppercase tracking-[0.14em] text-[#A9653F] text-[10px]">
                    Drum Roasted
                  </span>
                  <span className="text-sm font-bold text-[#2B211C] font-display mt-0.5 block">
                    Small Batches
                  </span>
                  <span className="text-[#6F6258] text-[11px] leading-snug block mt-0.5">
                    Weekly on 12th Main Road
                  </span>
                </div>
                <div className="sm:pl-2">
                  <span className="block font-bold uppercase tracking-[0.14em] text-[#A9653F] text-[10px]">
                    Open Daily
                  </span>
                  <span className="text-sm font-bold text-[#2B211C] font-display mt-0.5 block">
                    Brew Bar &amp; Café
                  </span>
                  <span className="text-[#6F6258] text-[11px] leading-snug block mt-0.5">
                    From 07:00 AM weekends
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Image (5 cols desktop) — Editorial 35mm coffee brew bar scene */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] xl:aspect-[5/6] w-full rounded-2xl overflow-hidden border border-[#D8C7B5] shadow-md bg-[#E8D8C5]">
                <Image
                  src="/images/hero-pourover.jpg"
                  alt="Craft pour-over coffee brewing scene on teak wood counter with natural morning daylight"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SOURCING MANIFESTO — WARM ESPRESSO CONTRAST SECTION         */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-14 bg-[#35261F] text-[#FFF9F1] border-y border-[#4A372E]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            {/* Left Manifesto */}
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="p-2.5 rounded-lg bg-[#A9653F]/25 text-[#C8895E] shrink-0 mt-1">
                <Sparkles className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#C8895E] font-semibold block">
                  What Sets Our Coffee Apart
                </span>
                <p className="text-lg sm:text-xl lg:text-[22px] font-normal font-display text-[#FFF9F1] leading-[1.38]">
                  &ldquo;{brandStory.differentiationStatement}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-[#D8CCBC] pt-1">
                  Harvested under native canopy shade trees at 1,200m elevation. Evaluated and drum-roasted weekly in Indiranagar.
                </p>
              </div>
            </div>

            {/* Right Action */}
            <div className="shrink-0 self-start lg:self-center">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-md bg-[#A9653F] hover:bg-[#945633] px-5 py-3 text-xs sm:text-sm font-semibold text-[#FFF9F1] transition-all duration-200 shadow-sm whitespace-nowrap"
              >
                <span>Our Sourcing Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFF9F1] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. MENU SECTION — WARM CREAM PRINTED COFFEE MENU               */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F4EDE2]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#A9653F]">
                Fresh Brews &amp; Roastery
              </span>
              <h2 className="mt-1.5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#2B211C] font-display">
                Specialty Coffee &amp; Roastery Menu
              </h2>
              <p className="text-xs sm:text-sm text-[#6F6258] mt-1.5 max-w-lg leading-relaxed">
                All 8 selections freshly prepared or drum-roasted weekly in Indiranagar. Confirmed in-store ₹ rates.
              </p>
            </div>
            <Link
              href="/menu"
              className="group inline-flex items-center gap-1.5 rounded-md border border-[#2B211C] bg-transparent px-4 py-2.5 text-xs font-semibold text-[#2B211C] hover:bg-[#E8D8C5] transition-all duration-200 tap-target shrink-0 self-start sm:self-auto shadow-2xs"
            >
              <span>Explore Roast Guide &amp; Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A9653F] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* FEATURED COFFEE ITEM — Large Editorial Layout (Item 1) */}
          <div className="mb-6 rounded-2xl border border-[#D8C7B5] bg-[#FFF9F1] overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 items-center hover:border-[#A9653F] hover:shadow-md transition-all duration-200">
            <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto md:h-full min-h-[260px] bg-[#E8D8C5]">
              <Image
                src="/images/kaapi-brass.jpg"
                alt="Traditional South Indian filter kaapi in brass davarah on teak wood table"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-center"
              />
            </div>
            <div className="p-6 sm:p-7 md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A9653F] block">
                  Featured Selection · {featuredItem.category}
                </span>
                <div className="mt-1 flex items-baseline justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2B211C] font-display">
                    {featuredItem.name}
                  </h3>
                  {featuredItem.priceInInr && (
                    <span className="text-xl sm:text-2xl font-bold text-[#A9653F] font-mono tabular-nums shrink-0">
                      {formatInrPrice(featuredItem.priceInInr)}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-[#6F6258] leading-relaxed max-w-xl">
                  {featuredItem.description}
                </p>
                {featuredItem.note && (
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#6F6258] bg-[#E8D8C5]/70 px-2.5 py-0.5 rounded border border-[#D8C7B5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A9653F]" aria-hidden="true" />
                    <span>{featuredItem.note}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#D8C7B5] flex items-center justify-between">
                <a
                  href={getOrderWhatsAppUrl(featuredItem.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary tap-target text-xs font-semibold"
                  aria-label={`Order ${featuredItem.name} on WhatsApp`}
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#FFF9F1] text-[#FFF9F1]" aria-hidden="true" />
                  <span>Order on WhatsApp</span>
                  <ArrowRight className="w-3 h-3 text-[#FFF9F1] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#6F6258] bg-[#E8D8C5]/60 border border-[#D8C7B5] px-2 py-0.5 rounded">
                  In-Store &amp; Pickup
                </span>
              </div>
            </div>
          </div>

          {/* COMPACT 2-COLUMN GRID FOR REMAINING 7 ITEMS (Items 2 through 8) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {gridItems.map((item) => (
              <div
                key={item.id}
                className="coffee-card p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category Eyebrow on its own line */}
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A9653F] block">
                    {item.category}
                  </span>

                  {/* Product Title & Price Row — Clearly Paired Together */}
                  <div className="mt-1 flex items-baseline justify-between gap-3">
                    <h3 className="text-base sm:text-lg font-bold text-[#2B211C] font-display leading-snug">
                      {item.name}
                    </h3>
                    {item.priceInInr && (
                      <span className="text-base sm:text-lg font-bold text-[#A9653F] font-mono tabular-nums shrink-0">
                        {formatInrPrice(item.priceInInr)}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6F6258] mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Preparation / Serving Craft Tag */}
                  {item.note && (
                    <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#6F6258] bg-[#E8D8C5]/60 px-2.5 py-0.5 rounded border border-[#D8C7B5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A9653F]" aria-hidden="true" />
                      <span>{item.note}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Action Area */}
                <div className="mt-5 pt-3.5 border-t border-[#D8C7B5] flex items-center justify-between">
                  <a
                    href={getOrderWhatsAppUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#2B211C] hover:text-[#A9653F] transition-colors py-1"
                    aria-label={`Order ${item.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" aria-hidden="true" />
                    <span>Order on WhatsApp</span>
                    <ArrowRight className="w-3 h-3 text-[#A9653F] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#6F6258] bg-[#E8D8C5]/60 border border-[#D8C7B5] px-2 py-0.5 rounded">
                    In-Store &amp; Pickup
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. BRAND STORY SECTION — LIGHT BEIGE / LATTE BACKGROUND       */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#E8D8C5] border-t border-[#D8C7B5]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Roaster Documentary Image (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#D8C7B5] shadow-sm bg-[#FFF9F1]">
                <Image
                  src="/images/story-roasting.jpg"
                  alt="Freshly roasted specialty coffee beans resting in drum cooling tray at Malabar Roast & Co."
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Story Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 order-1 lg:order-2">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#A9653F]">
                Our Brand Story
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-[#2B211C] font-display leading-[1.14]">
                {brandStory.headline}
              </h2>
              <div className="space-y-3 text-sm text-[#6F6258] leading-relaxed max-w-xl">
                {brandStory.storySentences.map((sentence, idx) => (
                  <p key={idx}>{sentence}</p>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="btn-primary tap-target group inline-flex items-center gap-2"
                >
                  <span>Learn About Our Estates &amp; Roasting</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFF9F1] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. REFINED EDITORIAL GALLERY STRIP                             */}
      {/* ============================================================== */}
      <GallerySection />

      {/* ============================================================== */}
      {/* 6. CONTACT & LOCATION SECTION                                  */}
      {/* ============================================================== */}
      <ContactSection />
    </div>
  );
}
