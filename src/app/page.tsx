import Image from "next/image";
import Link from "next/link";
import { business, getWhatsAppUrl, getOrderWhatsAppUrl } from "@/content/business";
import { menuItems, formatInrPrice } from "@/content/menu";
import { brandStory } from "@/content/story";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import { Phone, MessageCircle, ArrowRight, Flame, Star, Coffee, Award, Compass } from "lucide-react";

export default function HomePage() {
  // Featured item: Malabar Classic Filter Kaapi
  const featuredItem = menuItems[0];
  
  // Categorized items for clean symmetric layout
  const manualBrews = menuItems.filter((i) => i.category === "Manual Brews");
  const espressoAndOther = menuItems.filter((i) => i.category !== "Manual Brews" && i.id !== "filter-kaapi");

  return (
    <div className="flex flex-col">
      {/* ============================================================== */}
      {/* 1. HERO SECTION — EDITORIAL ROASTERY TRIPTYCH SHOWCASE        */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden border-b border-[#E8D8C4] bg-[#F5EDE2] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 hero-glow-bg animate-hero-fade">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 w-full relative z-10">
          
          {/* Top Editorial Masthead (Centered, Authoritative & Prestigious) */}
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5">
            {/* Live Provenance Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#EFE3D5]/80 border border-[#E8D8C4] px-4 py-1.5 shadow-2xs backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A85F37] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A85F37]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4F2D]">
                Western Ghats Micro-Lot Roastery · Indiranagar, Bengaluru
              </span>
            </div>

            {/* Commanding Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] xl:text-[74px] font-normal tracking-tight text-[#2B1D17] font-display leading-[1.05]">
              From Rainforest Canopy <br className="hidden sm:inline" />
              to the <span className="italic font-normal shimmer-copper">Heirloom Davarah.</span>
            </h1>

            {/* Evocative Narrative */}
            <p className="text-base sm:text-lg text-[#5A483E] max-w-2xl mx-auto leading-relaxed font-normal">
              Single-estate Arabica cultivated at 1,200m elevation under native rainforest canopies in Chikmagalur and Wayanad. Small-batch drum roasted weekly on 12th Main Road for natural sweetness and deep cocoa finish.
            </p>

            {/* Centered CTA Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <Link
                href="/menu"
                className="btn-primary tap-target w-full sm:w-auto shadow-md group gap-2.5 justify-center px-6"
              >
                <span>Explore All 8 Roasts &amp; Brews</span>
                <ArrowRight className="w-4 h-4 text-[#FFFCF7] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              <a
                href={getWhatsAppUrl("Hi Malabar Roast & Co., I would like to order fresh coffee beans / reserve a table.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary tap-target w-full sm:w-auto gap-2.5 justify-center px-6"
                aria-label="Order or reserve via WhatsApp"
              >
                <MessageCircle className="h-4 w-4 fill-[#25D366] text-[#25D366] shrink-0" aria-hidden="true" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Live Cafe Hours Notice */}
            <div className="flex items-center justify-center gap-2 pt-1 text-xs text-[#7A6960]">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>Brew Bar open daily from 07:30 AM (07:00 AM weekends) · 12th Main Road</span>
            </div>
          </div>

          {/* ============================================================== */}
          {/* THE 3-PIECE VISUAL TRIPTYCH: ORIGIN -> ROAST -> EXTRACTION      */}
          {/* ============================================================== */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-end">
            
            {/* Panel 1 (Left, 3 cols): 01 / THE TERROIR */}
            <div className="md:col-span-3 group relative h-[320px] sm:h-[380px] lg:h-[430px] rounded-2xl overflow-hidden border border-[#E8D8C4] shadow-md bg-[#E8D8C4] transition-all duration-300 hover:shadow-xl hover:border-[#A85F37]">
              <Image
                src="/images/estate-canopy.jpg"
                alt="Western Ghats native rainforest canopy shade-grown coffee estate at 1,200m elevation"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E130E]/85 via-[#1E130E]/20 to-transparent pointer-events-none" />
              
              {/* Step Badge */}
              <div className="absolute top-3.5 left-3.5 bg-[#2B1D17]/85 backdrop-blur-xs text-[#FFFCF7] border border-[rgba(245,237,226,0.2)] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                01 · The Terroir
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 text-[#FFFCF7]">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C97D52] block">
                  1,200m Elevation
                </span>
                <h2 className="text-base sm:text-lg font-bold font-display text-[#FFFCF7] mt-0.5">
                  Rainforest Canopy
                </h2>
                <p className="text-[11px] text-[#D9C8B6] mt-1 leading-snug line-clamp-2">
                  Jackfruit and silver oak shade in Chikmagalur &amp; Wayanad.
                </p>
              </div>
            </div>

            {/* Panel 2 (Center Heroic Focal, 6 cols): 02 / THE DRUM ROAST */}
            <div className="md:col-span-6 group relative h-[360px] sm:h-[430px] lg:h-[490px] rounded-2xl overflow-hidden border-2 border-[#A85F37]/50 shadow-2xl bg-[#E8D8C4] transition-all duration-300 hover:border-[#A85F37]">
              <Image
                src="/images/beans-pouch.jpg"
                alt="Malabar Roast & Co. Western Ghats Micro-Lot Whole Bean Pouch with steamed brass davarah coffee cup"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 620px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E130E]/90 via-[#1E130E]/25 to-transparent pointer-events-none" />

              {/* Center Floating Seal */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="bg-[#FFFCF7]/95 backdrop-blur-xs text-[#2B1D17] border border-[#E8D8C4] px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#A85F37]" />
                  <span className="text-xs font-bold font-mono">Micro-Batch #42 · Roasted 48h Ago</span>
                </div>

                <div className="bg-[#2B1D17]/90 backdrop-blur-xs text-[#FFFCF7] border border-[rgba(245,237,226,0.2)] px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#A85F37] text-[#A85F37]" />
                  <span>4.9 / 5.0</span>
                </div>
              </div>

              {/* Bottom Luxury Overlay Box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-xl bg-[#2B1D17]/90 backdrop-blur-md border border-[rgba(245,237,226,0.2)] text-[#FFFCF7] shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C97D52] block">
                  02 · Hand-Selected &amp; Drum-Roasted
                </span>
                <h2 className="text-base sm:text-xl font-bold font-display text-[#FFFCF7] mt-0.5">
                  Monsooned Malabar &amp; Giri Arabica
                </h2>
                <span className="text-xs text-[#D9C8B6] block mt-0.5 font-normal">
                  5kg small-batch drum roasted weekly on 12th Main Road
                </span>
              </div>
            </div>

            {/* Panel 3 (Right, 3 cols): 03 / THE BREW BAR */}
            <div className="md:col-span-3 group relative h-[320px] sm:h-[380px] lg:h-[430px] rounded-2xl overflow-hidden border border-[#E8D8C4] shadow-md bg-[#E8D8C4] transition-all duration-300 hover:shadow-xl hover:border-[#A85F37]">
              <Image
                src="/images/hero-pourover.jpg"
                alt="Barista brewing single-origin manual pour-over extraction at Malabar Roast & Co."
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E130E]/85 via-[#1E130E]/20 to-transparent pointer-events-none" />

              {/* Step Badge */}
              <div className="absolute top-3.5 left-3.5 bg-[#2B1D17]/85 backdrop-blur-xs text-[#FFFCF7] border border-[rgba(245,237,226,0.2)] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                03 · The Brew Bar
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 text-[#FFFCF7]">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C97D52] block">
                  Precision Extraction
                </span>
                <h2 className="text-base sm:text-lg font-bold font-display text-[#FFFCF7] mt-0.5">
                  V60 &amp; Brass Davarah
                </h2>
                <p className="text-[11px] text-[#D9C8B6] mt-1 leading-snug line-clamp-2">
                  Extracted to order at our specialty coffee bar in Indiranagar.
                </p>
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* ROASTER'S CREDENTIALS LEDGER (Horizontal Luxury Baseline)       */}
          {/* ============================================================== */}
          <div className="mt-8 pt-8 border-t border-[#E8D8C4] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFFCF7] border border-[#E8D8C4] shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A85F37] block">
                Elevation
              </span>
              <span className="text-sm sm:text-base font-bold text-[#2B1D17] font-display mt-0.5 block">
                1,200m Terroir
              </span>
              <span className="text-[11px] text-[#7A6960] block mt-0.5">
                Shade-grown under rainforest
              </span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFFCF7] border border-[#E8D8C4] shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A85F37] block">
                Batch Size
              </span>
              <span className="text-sm sm:text-base font-bold text-[#2B1D17] font-display mt-0.5 block">
                5kg Micro-Lots
              </span>
              <span className="text-[11px] text-[#7A6960] block mt-0.5">
                Drum roasted weekly
              </span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFFCF7] border border-[#E8D8C4] shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A85F37] block">
                Evaluation
              </span>
              <span className="text-sm sm:text-base font-bold text-[#2B1D17] font-display mt-0.5 block">
                SCA 88+ Score
              </span>
              <span className="text-[11px] text-[#7A6960] block mt-0.5">
                Cupped &amp; graded weekly
              </span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFFCF7] border border-[#E8D8C4] shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A85F37] block">
                Heritage Davarah
              </span>
              <span className="text-sm sm:text-base font-bold text-[#2B1D17] font-display mt-0.5 block">
                70:30 Chicory Blend
              </span>
              <span className="text-[11px] text-[#7A6960] block mt-0.5">
                Slow decoction stainless drip
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SOURCING MANIFESTO — ROASTER'S ORIGIN VAULT                  */}
      {/* ============================================================== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-[#241712] text-[#FFFCF7] border-y border-[#3E2B22] relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#A85F37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Sourcing Manifesto & Proof */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#35241C] border border-[#4E372B] px-3.5 py-1 text-[11px] uppercase tracking-[0.16em] text-[#C97D52] font-semibold">
                <Compass className="w-3.5 h-3.5 text-[#C97D52]" />
                <span>Western Ghats Terroir · Chikmagalur &amp; Wayanad</span>
              </div>

              <div className="relative">
                <p className="text-xl sm:text-2xl lg:text-[26px] font-normal font-display text-[#FFFCF7] leading-[1.35] pl-4 border-l-2 border-[#A85F37]">
                  &ldquo;{brandStory.differentiationStatement}&rdquo;
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#D9C8B6] leading-relaxed max-w-xl">
                Harvested under multi-tiered native rainforest canopies of silver oak, jackfruit, and fig trees. The high altitude and dense shade allow coffee cherries to mature slowly, concentrating natural fruit sugars, gentle malic acidity, and complex floral aromas.
              </p>

              {/* Terroir & Origin Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#2E1E17] border border-[#3E2B22]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C97D52] block">Elevation</span>
                  <span className="text-sm font-bold text-[#FFFCF7] block mt-0.5">1,200m Above Sea</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#2E1E17] border border-[#3E2B22]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C97D52] block">Farming</span>
                  <span className="text-sm font-bold text-[#FFFCF7] block mt-0.5">Rainforest Shade-Grown</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#2E1E17] border border-[#3E2B22] col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C97D52] block">Roast Style</span>
                  <span className="text-sm font-bold text-[#FFFCF7] block mt-0.5">5kg Micro Drum</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#A85F37] hover:bg-[#93512D] px-5 py-3 text-xs sm:text-sm font-semibold text-[#FFFCF7] transition-all duration-200 shadow-sm w-full sm:w-auto justify-center"
                >
                  <span>Explore Estate Partners &amp; Sourcing Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFFCF7] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>

            </div>

            {/* Right Column: Visual Window into Western Ghats Origin */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-[#3E2B22] shadow-xl bg-[#1E130E]">
                <Image
                  src="/images/estate-canopy.jpg"
                  alt="Lush misty shade-grown coffee plantation in Western Ghats Chikmagalur with ripe red coffee cherries"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241712]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#241712]/85 backdrop-blur-md border border-[rgba(245,237,226,0.15)] text-[#FFFCF7]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C97D52] block">
                    Direct Trade Family Estates
                  </span>
                  <span className="text-xs font-medium text-[#D9C8B6] block mt-0.5">
                    Bababudangiri, Chikmagalur &amp; Wayanad, Kerala
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. MENU SECTION — LUXURY ARTISANAL COFFEE TASTING CARDS        */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-22 lg:py-26 bg-[#F5EDE2]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Refined Editorial Flair */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12 border-b border-[#E8D8C4] pb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C4F2D]">
                Specialty Brew Bar &amp; Roastery
              </span>
              <h2 className="mt-1.5 text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#2B1D17] font-display">
                Coffee Menu &amp; Fresh Roastery
              </h2>
              <p className="text-sm sm:text-base text-[#63534B] mt-2 max-w-xl leading-relaxed">
                All 8 selections freshly prepared in-store or small-batch drum roasted weekly on 12th Main Road, Indiranagar.
              </p>
            </div>

            <Link
              href="/menu"
              className="btn-secondary tap-target shrink-0 self-start sm:self-auto gap-2"
            >
              <span>View Full Menu &amp; Roasting Protocol</span>
              <ArrowRight className="w-4 h-4 text-[#A85F37] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* FEATURED SELECTION: Malabar Classic Filter Kaapi */}
          <div className="mb-10 rounded-2xl border border-[#E8D8C4] bg-[#FFFCF7] overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12 items-center hover:border-[#A85F37] transition-all duration-300">
            
            {/* Image Col */}
            <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto md:h-full min-h-[280px] sm:min-h-[320px] bg-[#E8D8C4]">
              <Image
                src="/images/kaapi-brass.jpg"
                alt="Traditional South Indian filter kaapi in brass davarah on teak wood table at Malabar Roast & Co."
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-center"
              />
              <div className="absolute top-3.5 left-3.5 bg-[#2B1D17]/90 backdrop-blur-xs text-[#FFFCF7] border border-[rgba(245,237,226,0.2)] px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                🏆 House Signature
              </div>
            </div>

            {/* Content Col */}
            <div className="p-6 sm:p-8 lg:p-10 md:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8C4F2D]">
                    {featuredItem.category} · {featuredItem.roastLevel}
                  </span>
                  <span className="text-xs font-semibold text-[#63534B] bg-[#EFE3D5] px-3 py-1 rounded-full border border-[#E8D8C4]">
                    70:30 Decoction Ratio
                  </span>
                </div>

                <div className="mt-2 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#2B1D17] font-display">
                    {featuredItem.name}
                  </h3>
                  {featuredItem.priceInInr && (
                    <span className="text-2xl sm:text-3xl font-bold text-[#A85F37] font-mono tabular-nums shrink-0">
                      {formatInrPrice(featuredItem.priceInInr)}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-[#63534B] leading-relaxed max-w-xl">
                  {featuredItem.description}
                </p>

                {/* Tasting Notes */}
                {featuredItem.tastingNotes && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C4F2D] mr-1">Tasting Notes:</span>
                    {featuredItem.tastingNotes.map((note, idx) => (
                      <span key={idx} className="badge-flavor">{note}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#E8D8C4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <a
                  href={getOrderWhatsAppUrl(featuredItem.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary tap-target text-xs sm:text-sm font-semibold w-full sm:w-auto shadow-sm gap-2"
                  aria-label={`Order ${featuredItem.name} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 fill-[#FFFCF7] text-[#FFFCF7]" aria-hidden="true" />
                  <span>Order on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFFCF7] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </a>

                <div className="flex items-center gap-2 text-xs text-[#63534B]">
                  <span className="w-2 h-2 rounded-full bg-[#A85F37]" />
                  <span>Served hot in heirloom brass tumbler &amp; davarah</span>
                </div>
              </div>
            </div>

          </div>

          {/* MANUAL BREWS CATEGORY ROW (3 CARDS EQUAL WIDTH & BALANCED) */}
          <div className="space-y-4 mb-10">
            <div className="flex items-baseline justify-between border-b border-[#E8D8C4] pb-2.5">
              <h3 className="text-xl sm:text-2xl font-normal font-display text-[#2B1D17]">
                Manual Brews
              </h3>
              <span className="text-xs font-semibold text-[#8C4F2D] uppercase tracking-wider">
                {manualBrews.length} Selections
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {manualBrews.map((item) => (
                <div
                  key={item.id}
                  className="coffee-card group overflow-hidden flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Product Image Frame with unoptimized for instant reliable loading */}
                    <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#E8D8C4] border-b border-[#E8D8C4]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 380px"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#2B1D17]/85 backdrop-blur-xs text-[#FFFCF7] border border-[rgba(245,237,226,0.2)] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {item.category}
                      </div>
                      {item.badge && (
                        <div className="absolute top-3 right-3 bg-[#FFFCF7]/95 backdrop-blur-xs text-[#8C4F2D] border border-[#E8D8C4] px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide shadow-2xs">
                          {item.badge}
                        </div>
                      )}
                    </div>

                    {/* Content with locked vertical rhythm */}
                    <div className="p-5 sm:p-6 space-y-3">
                      {/* Title & Price Row with Min Height for uniform alignment */}
                      <div className="flex items-start justify-between gap-3 min-h-[52px]">
                        <h4 className="text-lg sm:text-xl font-bold text-[#2B1D17] font-display leading-snug">
                          {item.name}
                        </h4>
                        {item.priceInInr && (
                          <span className="text-lg sm:text-xl font-bold text-[#A85F37] font-mono tabular-nums shrink-0 pt-0.5">
                            {formatInrPrice(item.priceInInr)}
                          </span>
                        )}
                      </div>

                      {/* Description with fixed min-height for uniform flow */}
                      <p className="text-xs sm:text-sm text-[#63534B] leading-relaxed min-h-[58px] line-clamp-3">
                        {item.description}
                      </p>

                      {/* Flavor Notes with min-height */}
                      <div className="min-h-[58px] flex flex-wrap items-start content-start gap-1.5 pt-1">
                        {item.tastingNotes && item.tastingNotes.map((note, idx) => (
                          <span key={idx} className="badge-flavor">{note}</span>
                        ))}
                      </div>

                      {/* Preparation / Serving Craft Tag */}
                      <div className="min-h-[28px] flex items-center">
                        {item.note && (
                          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#63534B] bg-[#EFE3D5]/70 px-2.5 py-1 rounded-md border border-[#E8D8C4]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A85F37]" aria-hidden="true" />
                            <span>{item.note}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3.5 border-t border-[#E8D8C4] flex items-center justify-between gap-2 mt-auto">
                    <a
                      href={getOrderWhatsAppUrl(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold text-[#2B1D17] hover:text-[#A85F37] transition-colors py-1 tap-target"
                      aria-label={`Order ${item.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" aria-hidden="true" />
                      <span>Order on WhatsApp</span>
                      <ArrowRight className="w-3 h-3 text-[#A85F37] transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true" />
                    </a>

                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#63534B] bg-[#EFE3D5]/70 border border-[#E8D8C4] px-2.5 py-0.5 rounded shrink-0">
                      In-Store &amp; Pickup
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ESPRESSO, FRESH BEANS & BAKES GRID (4 CARDS: 2x2 BALANCED) */}
          <div className="space-y-4">
            <div className="flex items-baseline justify-between border-b border-[#E8D8C4] pb-2.5">
              <h3 className="text-xl sm:text-2xl font-normal font-display text-[#2B1D17]">
                Espresso, Whole Beans &amp; Fresh Bakes
              </h3>
              <span className="text-xs font-semibold text-[#8C4F2D] uppercase tracking-wider">
                {espressoAndOther.length} Selections
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {espressoAndOther.map((item) => (
                <div
                  key={item.id}
                  className="coffee-card group overflow-hidden flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Product Image Frame */}
                    <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-[#E8D8C4] border-b border-[#E8D8C4]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#2B1D17]/85 backdrop-blur-xs text-[#FFFCF7] border border-[rgba(245,237,226,0.2)] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {item.category}
                      </div>
                      {item.badge && (
                        <div className="absolute top-3 right-3 bg-[#FFFCF7]/95 backdrop-blur-xs text-[#8C4F2D] border border-[#E8D8C4] px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide shadow-2xs">
                          {item.badge}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div className="flex items-start justify-between gap-3 min-h-[52px]">
                        <h4 className="text-lg sm:text-xl font-bold text-[#2B1D17] font-display leading-snug">
                          {item.name}
                        </h4>
                        {item.priceInInr && (
                          <span className="text-lg sm:text-xl font-bold text-[#A85F37] font-mono tabular-nums shrink-0 pt-0.5">
                            {formatInrPrice(item.priceInInr)}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-[#63534B] leading-relaxed min-h-[58px] line-clamp-3">
                        {item.description}
                      </p>

                      <div className="min-h-[58px] flex flex-wrap items-start content-start gap-1.5 pt-1">
                        {item.tastingNotes && item.tastingNotes.map((note, idx) => (
                          <span key={idx} className="badge-flavor">{note}</span>
                        ))}
                      </div>

                      <div className="min-h-[28px] flex items-center">
                        {item.note && (
                          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#63534B] bg-[#EFE3D5]/60 px-2.5 py-1 rounded-md border border-[#E8D8C4]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A85F37]" aria-hidden="true" />
                            <span>{item.note}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3.5 border-t border-[#E8D8C4] flex items-center justify-between gap-2 mt-auto">
                    <a
                      href={getOrderWhatsAppUrl(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold text-[#2B1D17] hover:text-[#A85F37] transition-colors py-1 tap-target"
                      aria-label={`Order ${item.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" aria-hidden="true" />
                      <span>Order on WhatsApp</span>
                      <ArrowRight className="w-3 h-3 text-[#A85F37] transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true" />
                    </a>

                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#63534B] bg-[#EFE3D5]/70 border border-[#E8D8C4] px-2.5 py-0.5 rounded shrink-0">
                      In-Store &amp; Pickup
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. BRAND STORY SECTION — LIGHT BEIGE / LATTE BACKGROUND       */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-22 lg:py-26 bg-[#EFE3D5] border-t border-[#E8D8C4]">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Roaster Documentary Image (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#E8D8C4] shadow-md bg-[#FFFCF7]">
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
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C4F2D]">
                Our Brand Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#2B1D17] font-display leading-[1.12]">
                {brandStory.headline}
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#5A483E] leading-relaxed max-w-xl">
                {brandStory.storySentences.map((sentence, idx) => (
                  <p key={idx}>{sentence}</p>
                ))}
              </div>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                {brandStory.corePillars.map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FFFCF7] border border-[#E8D8C4] shadow-2xs">
                    <span className="text-xs font-mono font-bold text-[#A85F37] block">0{idx + 1}</span>
                    <span className="text-xs sm:text-sm font-bold text-[#2B1D17] font-display mt-1 block">{pillar.title}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  href="/about"
                  className="btn-primary tap-target group inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Learn About Our Estates &amp; Roasting Craft</span>
                  <ArrowRight className="w-4 h-4 text-[#FFFCF7] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
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
