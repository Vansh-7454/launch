import Image from "next/image";
import Link from "next/link";
import { business, getWhatsAppUrl, getOrderWhatsAppUrl } from "@/content/business";
import { menuItems, formatInrPrice } from "@/content/menu";
import { brandStory } from "@/content/story";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import { Phone, MessageCircle, ArrowRight, Sparkles, MapPin, Flame, Star, Coffee, Award, Compass } from "lucide-react";

export default function HomePage() {
  // Item 0 is highlighted as the Featured Coffee Item; remaining 7 items fill the cards grid
  const featuredItem = menuItems[0];
  const gridItems = menuItems.slice(1);

  return (
    <div className="flex flex-col">
      {/* ============================================================== */}
      {/* 1. HERO SECTION — LUXURY ARTISANAL ROASTERY SHOWCASE          */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden border-b border-[#D8C7B5] bg-[#F4EDE2] py-12 sm:py-18 lg:py-24 hero-glow-bg animate-hero-fade">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Content (7 cols desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
              
              {/* Live Roaster Status Badge */}
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#EAE0D2]/90 border border-[#D8C7B5] px-3.5 py-1.5 shadow-2xs backdrop-blur-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A9653F] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A9653F]" />
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C4F2D]">
                  Fresh Weekly Drum Roasts · 12th Main Indiranagar
                </span>
              </div>

              {/* Main Heading — Commanding Editorial Composition */}
              <div className="space-y-1">
                <span className="font-display italic font-normal text-lg sm:text-2xl text-[#8C4F2D] block tracking-wide">
                  Artisanal Western Ghats Single-Origin
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-[74px] font-black tracking-tight text-[#231813] font-display leading-[0.98] break-words">
                  MALABAR<br />
                  <span className="text-[#8C4F2D] font-normal italic font-serif">&amp;</span> CO. ROASTERS
                </h1>
              </div>

              {/* Evocative Sensory Promise */}
              <p className="text-sm sm:text-base lg:text-[17px] text-[#5C4F44] max-w-[540px] leading-[1.65] font-normal">
                Shade-grown under rainforest canopies at 1,200m elevation in Chikmagalur and Wayanad. Hand-sorted and drum-roasted weekly in 5kg micro-lots on 12th Main Road for sweet floral aroma, clean brightness, and a deep cocoa finish.
              </p>

              {/* Interactive Tasting Notes Ribbon */}
              <div className="pt-0.5 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8C4F2D] block">
                  Current Micro-Lot Flavor Profile
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge-flavor">🍫 Dark Cocoa &amp; Molasses</span>
                  <span className="badge-flavor">🌸 Cardamom Blossom</span>
                  <span className="badge-flavor">🌰 Toasted Giri Walnut</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8C4F2D] bg-[#EAE0D2] border border-[#D8C7B5] px-2.5 py-1 rounded-full">
                    <Award className="w-3 h-3 text-[#8C4F2D]" />
                    <span>SCA 88+ Cupping Score</span>
                  </span>
                </div>
              </div>

              {/* Hero Action Row — Tactile Hierarchy */}
              <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                {/* Primary CTA: WhatsApp Us */}
                <a
                  href={getWhatsAppUrl("Hi Malabar Roast & Co., I would like to order fresh coffee beans / reserve a table.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary tap-target w-full sm:w-auto shadow-md group"
                  aria-label="Order or reserve via WhatsApp"
                >
                  <MessageCircle className="h-4 w-4 fill-[#FFF9F1] text-[#FFF9F1] shrink-0 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                  <span>WhatsApp Order &amp; Reserve</span>
                </a>

                {/* Secondary CTA: Call Roastery */}
                <a
                  href={`tel:${business.phone.tel}`}
                  className="btn-secondary tap-target w-full sm:w-auto"
                  aria-label={`Call Roastery: ${business.phone.display}`}
                >
                  <Phone className="h-4 w-4 text-[#A9653F] shrink-0" aria-hidden="true" />
                  <span>Call {business.phone.display}</span>
                </a>

                {/* Tertiary Link: View Full Menu */}
                <Link
                  href="/menu"
                  className="group inline-flex items-center justify-center sm:justify-start gap-1.5 px-3 py-2.5 font-semibold text-xs sm:text-sm text-[#8C4F2D] hover:text-[#68371C] tap-target transition-colors"
                >
                  <span>Explore All 8 Roasts</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8C4F2D] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>

              {/* Supporting Credentials Ribbon — Gilded 3-Point Showcase */}
              <div className="pt-6 sm:pt-7 border-t border-[#D8C7B5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="sm:border-r border-[#D8C7B5] sm:pr-4">
                  <span className="block font-bold uppercase tracking-[0.14em] text-[#8C4F2D] text-[10px]">
                    1,200m Elevation
                  </span>
                  <span className="text-sm font-bold text-[#231813] font-display mt-0.5 block">
                    Western Ghats Canopy
                  </span>
                  <span className="text-[#6F6258] text-[11px] leading-snug block mt-0.5">
                    Shade-grown under jackfruit &amp; fig
                  </span>
                </div>
                <div className="sm:border-r border-[#D8C7B5] sm:pr-4 sm:pl-2">
                  <span className="block font-bold uppercase tracking-[0.14em] text-[#8C4F2D] text-[10px]">
                    5kg Micro-Lots
                  </span>
                  <span className="text-sm font-bold text-[#231813] font-display mt-0.5 block">
                    Drum Roasted Weekly
                  </span>
                  <span className="text-[#6F6258] text-[11px] leading-snug block mt-0.5">
                    Evaluated on 12th Main Road
                  </span>
                </div>
                <div className="sm:pl-2">
                  <span className="block font-bold uppercase tracking-[0.14em] text-[#8C4F2D] text-[10px]">
                    07:00 AM Weekends
                  </span>
                  <span className="text-sm font-bold text-[#231813] font-display mt-0.5 block">
                    Brew Bar &amp; Neighborhood Cafe
                  </span>
                  <span className="text-[#6F6258] text-[11px] leading-snug block mt-0.5">
                    From 07:30 AM weekdays
                  </span>
                </div>
              </div>

            </div>

            {/* Right Hero Visual Showcase (5 cols desktop) — Multi-Layered Editorial Still Life */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Decorative Subtle Ambient Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#A9653F]/15 via-transparent to-[#E8D8C5]/40 rounded-3xl blur-2xl -z-10" />

              {/* Main Luxury Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] xl:aspect-[5/6] w-full rounded-2xl overflow-hidden border border-[#D8C7B5] shadow-xl bg-[#E8D8C5]">
                <Image
                  src="/images/beans-pouch.jpg"
                  alt="Malabar Roast & Co. Western Ghats Micro-Lot Whole Bean Pouch with steamed brass coffee cup on teak wood counter"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />

                {/* Subtle Image Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#231813]/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 rounded-xl bg-[#231813]/85 backdrop-blur-md border border-[rgba(244,237,226,0.15)] text-[#FFF9F1] flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8895E] block">
                      Single-Origin Whole Beans
                    </span>
                    <span className="text-xs sm:text-sm font-semibold font-display text-[#FFF9F1] block mt-0.5">
                      Monsooned Malabar &amp; Giri Arabica
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#E8D8C5] bg-[#3E2B22] px-2.5 py-1 rounded border border-[rgba(244,237,226,0.2)]">
                    250g Pouch · ₹480
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Fresh Roast Batch Indicator (Top Left) */}
              <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-2.5 bg-[#FFFDF9] border border-[#D8C7B5] px-3.5 py-2 rounded-xl shadow-lg z-20">
                <div className="w-8 h-8 rounded-lg bg-[#EAE0D2] flex items-center justify-center text-[#8C4F2D]">
                  <Flame className="w-4 h-4 text-[#8C4F2D]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C4F2D] block">
                    Micro-Batch #42
                  </span>
                  <span className="text-xs font-bold text-[#231813] block">
                    Roasted 48h Ago
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: In-Store Rating & Craft Kaapi (Bottom Right offset) */}
              <div className="hidden sm:flex absolute -bottom-4 -right-3 items-center gap-2.5 bg-[#FFFDF9] border border-[#D8C7B5] px-3.5 py-2 rounded-xl shadow-lg z-20">
                <div className="w-8 h-8 rounded-lg bg-[#EAE0D2] flex items-center justify-center text-[#8C4F2D]">
                  <Coffee className="w-4 h-4 text-[#8C4F2D]" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#231813]">
                    <Star className="w-3 h-3 fill-[#A9653F] text-[#A9653F]" />
                    <span>4.9 / 5.0</span>
                    <span className="text-[#6F6258] font-normal text-[10px]">(620+ reviews)</span>
                  </div>
                  <span className="text-[11px] text-[#6F6258] block mt-0.5">
                    Brass Davarah Kaapi · ₹140
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SOURCING MANIFESTO — ROASTER'S ORIGIN VAULT                  */}
      {/* ============================================================== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-[#201510] text-[#FFF9F1] border-y border-[#3E2B22] relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#A9653F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Sourcing Manifesto & Proof */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#35241C] border border-[#4E372B] px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#C8895E] font-semibold">
                <Compass className="w-3.5 h-3.5 text-[#C8895E]" />
                <span>Western Ghats Terroir · Chikmagalur &amp; Wayanad</span>
              </div>

              <div className="relative">
                <span className="text-4xl sm:text-5xl font-serif text-[#C8895E]/30 font-bold absolute -top-4 -left-3 select-none pointer-events-none">
                  “
                </span>
                <p className="text-xl sm:text-2xl lg:text-[26px] font-normal font-display text-[#FFF9F1] leading-[1.35] pl-4 border-l-2 border-[#A9653F]">
                  &ldquo;{brandStory.differentiationStatement}&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#D8CCBC] leading-relaxed max-w-xl">
                Harvested under multi-tiered native rainforest canopies of silver oak, jackfruit, and fig trees. The high altitude and dense shade allow coffee cherries to mature slowly, concentrating natural fruit sugars, gentle malic acidity, and complex floral aromas.
              </p>

              {/* Terroir & Origin Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#2A1D16] border border-[#3E2B22]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8895E] block">Elevation</span>
                  <span className="text-sm font-bold text-[#FFF9F1] block mt-0.5">1,200m Above Sea</span>
                </div>
                <div className="p-3 rounded-xl bg-[#2A1D16] border border-[#3E2B22]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8895E] block">Farming</span>
                  <span className="text-sm font-bold text-[#FFF9F1] block mt-0.5">Rainforest Shade-Grown</span>
                </div>
                <div className="p-3 rounded-xl bg-[#2A1D16] border border-[#3E2B22] col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8895E] block">Roast Style</span>
                  <span className="text-sm font-bold text-[#FFF9F1] block mt-0.5">5kg Micro Drum</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#A9653F] hover:bg-[#945633] px-5 py-3 text-xs sm:text-sm font-semibold text-[#FFF9F1] transition-all duration-200 shadow-sm w-full sm:w-auto justify-center"
                >
                  <span>Explore Estate Partners &amp; Sourcing Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFF9F1] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>

            </div>

            {/* Right Column: Visual Window into Western Ghats Origin */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-[#3E2B22] shadow-xl bg-[#1C120C]">
                <Image
                  src="/images/estate-canopy.jpg"
                  alt="Lush misty shade-grown coffee plantation in Western Ghats Chikmagalur with ripe red coffee cherries"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201510]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#201510]/80 backdrop-blur-md border border-[rgba(244,237,226,0.15)] text-[#FFF9F1]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8895E] block">
                    Direct Trade Family Estates
                  </span>
                  <span className="text-xs font-medium text-[#D8CCBC] block mt-0.5">
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
      <section className="py-16 sm:py-22 lg:py-26 bg-[#F4EDE2]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Refined Editorial Flair */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12 border-b border-[#D8C7B5] pb-6">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C4F2D]">
                Specialty Brew Bar &amp; Roastery
              </span>
              <h2 className="mt-1.5 text-2xl sm:text-4xl font-bold tracking-tight text-[#231813] font-display">
                Coffee Menu &amp; Fresh Roastery
              </h2>
              <p className="text-xs sm:text-sm text-[#6F6258] mt-1.5 max-w-xl leading-relaxed">
                All 8 selections freshly prepared in-store or small-batch drum roasted weekly on 12th Main Road, Indiranagar.
              </p>
            </div>

            <Link
              href="/menu"
              className="group inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#231813] bg-[#FFFDF9] px-4 py-2.5 text-xs font-semibold text-[#231813] hover:bg-[#EAE0D2] transition-all duration-200 tap-target shrink-0 self-start sm:self-auto shadow-2xs w-full sm:w-auto"
            >
              <span>View Full Menu &amp; Roasting Protocol</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8C4F2D] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* FEATURED SELECTION (Item 1: Malabar Classic Filter Kaapi) — Grand Tasting Showcase */}
          <div className="mb-8 rounded-2xl border border-[#D8C7B5] bg-[#FFFDF9] overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-12 items-center hover:border-[#A9653F] transition-all duration-300">
            
            {/* Image Col */}
            <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto md:h-full min-h-[260px] sm:min-h-[300px] bg-[#E8D8C5]">
              <Image
                src="/images/kaapi-brass.jpg"
                alt="Traditional South Indian filter kaapi in brass davarah on teak wood table at Malabar Roast & Co."
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                className="object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-[#231813]/85 backdrop-blur-xs text-[#FFF9F1] border border-[rgba(244,237,226,0.2)] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                🏆 House Signature
              </div>
            </div>

            {/* Content Col */}
            <div className="p-6 sm:p-8 md:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8C4F2D]">
                    {featuredItem.category} · {featuredItem.roastLevel}
                  </span>
                  <span className="text-[11px] font-semibold text-[#6F6258] bg-[#EAE0D2] px-2.5 py-0.5 rounded-full border border-[#D8C7B5]">
                    70:30 Decoction Ratio
                  </span>
                </div>

                <div className="mt-1.5 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#231813] font-display">
                    {featuredItem.name}
                  </h3>
                  {featuredItem.priceInInr && (
                    <span className="text-2xl sm:text-3xl font-bold text-[#8C4F2D] font-mono tabular-nums shrink-0">
                      {formatInrPrice(featuredItem.priceInInr)}
                    </span>
                  )}
                </div>

                <p className="mt-2.5 text-xs sm:text-sm text-[#6F6258] leading-relaxed max-w-xl">
                  {featuredItem.description}
                </p>

                {/* Tasting Notes */}
                {featuredItem.tastingNotes && (
                  <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C4F2D] mr-1">Tasting Notes:</span>
                    {featuredItem.tastingNotes.map((note, idx) => (
                      <span key={idx} className="badge-flavor">{note}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#D8C7B5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <a
                  href={getOrderWhatsAppUrl(featuredItem.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary tap-target text-xs font-semibold w-full sm:w-auto shadow-sm"
                  aria-label={`Order ${featuredItem.name} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 fill-[#FFF9F1] text-[#FFF9F1]" aria-hidden="true" />
                  <span>Order on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFF9F1] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </a>

                <div className="flex items-center gap-2 text-xs text-[#6F6258]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A9653F]" />
                  <span>Served hot in heirloom brass tumbler &amp; davarah</span>
                </div>
              </div>
            </div>

          </div>

          {/* COMPACT 2-COLUMN GRID FOR REMAINING 7 ITEMS — Luxury Tasting Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {gridItems.map((item) => (
              <div
                key={item.id}
                className="coffee-card p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8C4F2D]">
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold text-[#8C4F2D] bg-[#EAE0D2] px-2 py-0.5 rounded-full border border-[#D8C7B5]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Price Row */}
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#231813] font-display leading-snug">
                      {item.name}
                    </h3>
                    {item.priceInInr && (
                      <span className="text-lg sm:text-xl font-bold text-[#8C4F2D] font-mono tabular-nums shrink-0">
                        {formatInrPrice(item.priceInInr)}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6F6258] mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Flavor Notes Tags */}
                  {item.tastingNotes && item.tastingNotes.length > 0 && (
                    <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                      {item.tastingNotes.map((note, idx) => (
                        <span key={idx} className="badge-flavor">{note}</span>
                      ))}
                    </div>
                  )}

                  {/* Preparation / Serving Craft Tag */}
                  {item.note && (
                    <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#6F6258] bg-[#EAE0D2]/60 px-2.5 py-0.5 rounded-md border border-[#D8C7B5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A9653F]" aria-hidden="true" />
                      <span>{item.note}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Action Area */}
                <div className="mt-5 pt-3.5 border-t border-[#D8C7B5] flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={getOrderWhatsAppUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#231813] hover:text-[#8C4F2D] transition-colors py-1"
                    aria-label={`Order ${item.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" aria-hidden="true" />
                    <span>Order on WhatsApp</span>
                    <ArrowRight className="w-3 h-3 text-[#8C4F2D] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </a>

                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#6F6258] bg-[#EAE0D2]/70 border border-[#D8C7B5] px-2 py-0.5 rounded shrink-0">
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
      <section className="py-16 sm:py-22 lg:py-26 bg-[#E8D8C5] border-t border-[#D8C7B5]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Roaster Documentary Image (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#D8C7B5] shadow-lg bg-[#FFFDF9]">
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
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C4F2D]">
                Our Brand Heritage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-[#231813] font-display leading-[1.12]">
                {brandStory.headline}
              </h2>
              <div className="space-y-3 text-sm text-[#5C4F44] leading-relaxed max-w-xl">
                {brandStory.storySentences.map((sentence, idx) => (
                  <p key={idx}>{sentence}</p>
                ))}
              </div>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {brandStory.corePillars.map((pillar, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FFFDF9] border border-[#D8C7B5] shadow-2xs">
                    <span className="text-xs font-mono font-bold text-[#8C4F2D] block">0{idx + 1}</span>
                    <span className="text-xs font-bold text-[#231813] font-display mt-0.5 block">{pillar.title}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  href="/about"
                  className="btn-primary tap-target group inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Learn About Our Estates &amp; Roasting Craft</span>
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
