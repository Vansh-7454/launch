import type { Metadata } from "next";
import Image from "next/image";
import { business, getOrderWhatsAppUrl } from "@/content/business";
import { menuItems, menuCategories, formatInrPrice } from "@/content/menu";
import { MessageCircle, Coffee, Phone, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Coffee Menu & Fresh Roasts | Indiranagar",
  description:
    "Explore confirmed prices for Malabar Classic Filter Kaapi, Chikmagalur Pour-Over, 18-Hour Cold Brew, and freshly roasted 250g bean pouches at Malabar Roast & Co., Indiranagar.",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  return (
    <div className="py-14 sm:py-18 bg-[#F4EDE2]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded bg-[#E8D8C5] border border-[#D8C7B5] px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A9653F]">
            <Coffee className="w-3.5 h-3.5 text-[#A9653F]" />
            <span>Indiranagar Roastery &amp; Brew Bar</span>
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2B211C] font-display">
            Coffee &amp; Fresh Roasts Menu
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#6F6258] leading-relaxed max-w-xl">
            All beans are roasted in small batches weekly on 12th Main Road. Whole bean pouches and fresh brews are available for dine-in, takeaway, and direct WhatsApp ordering.
          </p>
        </div>

        {/* Featured Roast Protocol Banner with Authentic Visual */}
        <div className="mt-10 rounded-2xl border border-[#D8C7B5] bg-[#FFF9F1] overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto md:h-full min-h-[260px] bg-[#E8D8C5]">
            <Image
              src="/images/kaapi-brass.jpg"
              alt="Traditional South Indian filter coffee in brass tumbler and davarah on wood table at Malabar Roast & Co."
              fill
              sizes="(max-width: 768px) 100vw, 440px"
              className="object-cover object-center"
            />
          </div>
          <div className="p-6 sm:p-8 md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A9653F] uppercase tracking-[0.14em]">
              <Sparkles className="w-4 h-4" />
              <span>Complimentary Grind Protocol</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2B211C] font-display">
              Custom Grinds for Your Home Setup
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6258] leading-relaxed">
              Purchasing whole beans? Tell our baristas your brewer (South Indian decoction filter, French Press, AeroPress, Mokapot, or Espresso) and we will precision-grind your bag on our commercial grinder at no extra cost.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={getOrderWhatsAppUrl("Whole Bean Roasts")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary tap-target"
                aria-label="Order whole beans on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-[#FFF9F1] text-[#FFF9F1]" aria-hidden="true" />
                <span>Order Beans on WhatsApp</span>
              </a>
              <a
                href={`tel:${business.phone.tel}`}
                className="btn-secondary tap-target"
                aria-label={`Call Roastery: ${business.phone.display}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#A9653F]" aria-hidden="true" />
                <span className="font-mono">{business.phone.display}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Categorized Menu List with No Asymmetric Empty Voids */}
        <div className="mt-14 sm:mt-16 space-y-12 sm:space-y-14">
          {menuCategories.map((category) => {
            const items = menuItems.filter((i) => i.category === category);
            if (items.length === 0) return null;

            return (
              <section key={category} className="space-y-5">
                <div className="border-b border-[#D8C7B5] pb-3 flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2B211C] font-display">
                    {category}
                  </h2>
                  <span className="text-xs text-[#6F6258] font-medium uppercase tracking-wider">
                    {items.length} {items.length === 1 ? "Selection" : "Selections"}
                  </span>
                </div>

                {/* If single item: Full-width editorial layout (avoids half-empty 2-column voids) */}
                {items.length === 1 ? (
                  <div className="coffee-card p-6 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-8 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A9653F] block">
                        {items[0].category}
                      </span>
                      <div className="mt-1 flex items-baseline justify-between gap-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#2B211C] font-display">
                          {items[0].name}
                        </h3>
                        {items[0].priceInInr && (
                          <span className="text-xl font-bold text-[#A9653F] font-mono tabular-nums shrink-0">
                            {formatInrPrice(items[0].priceInInr)}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#6F6258] leading-relaxed max-w-2xl">
                        {items[0].description}
                      </p>
                      {items[0].note && (
                        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#6F6258] bg-[#E8D8C5]/70 px-2.5 py-0.5 rounded border border-[#D8C7B5]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A9653F]" aria-hidden="true" />
                          <span>{items[0].note}</span>
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-[#D8C7B5] pt-4 md:pt-0 md:pl-6 flex flex-col justify-between h-full space-y-3">
                      <div className="text-[11px] text-[#6F6258] leading-relaxed">
                        Freshly prepared in our Indiranagar café on 12th Main Road. Available for dine-in &amp; takeaway.
                      </div>
                      <a
                        href={getOrderWhatsAppUrl(items[0].name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary tap-target text-xs font-semibold flex items-center justify-between gap-2"
                        aria-label={`Order ${items[0].name} on WhatsApp`}
                      >
                        <span className="flex items-center gap-2">
                          <MessageCircle className="w-3.5 h-3.5 fill-[#FFF9F1] text-[#FFF9F1]" aria-hidden="true" />
                          <span>Order on WhatsApp</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FFF9F1] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                ) : items.length === 3 ? (
                  /* If 3 items (Manual Brews): Balanced 3-column layout on desktop */
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="coffee-card p-6 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A9653F] block">
                            {item.category}
                          </span>
                          <div className="mt-1 flex items-baseline justify-between gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-[#2B211C] font-display leading-snug">
                              {item.name}
                            </h3>
                            {item.priceInInr && (
                              <span className="text-base font-bold text-[#A9653F] font-mono tabular-nums shrink-0">
                                {formatInrPrice(item.priceInInr)}
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-xs sm:text-sm text-[#6F6258] leading-relaxed">
                            {item.description}
                          </p>
                          {item.note && (
                            <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#6F6258] bg-[#E8D8C5]/60 px-2.5 py-0.5 rounded border border-[#D8C7B5]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#A9653F]" aria-hidden="true" />
                              <span>{item.note}</span>
                            </div>
                          )}
                        </div>
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
                ) : (
                  /* If 2 items (Espresso & Milk): Balanced 2-column layout */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="coffee-card p-6 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A9653F] block">
                            {item.category}
                          </span>
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
                          <p className="mt-2 text-xs sm:text-sm text-[#6F6258] leading-relaxed">
                            {item.description}
                          </p>
                          {item.note && (
                            <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#6F6258] bg-[#E8D8C5]/60 px-2.5 py-0.5 rounded border border-[#D8C7B5]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#A9653F]" aria-hidden="true" />
                              <span>{item.note}</span>
                            </div>
                          )}
                        </div>
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
                )}
              </section>
            );
          })}
        </div>

        {/* Pricing & GST Note */}
        <div className="mt-12 p-5 rounded-xl bg-[#FFF9F1] border border-[#D8C7B5] text-xs text-[#6F6258] space-y-1.5 shadow-xs">
          <p className="font-semibold text-[#2B211C] uppercase tracking-wider text-[11px]">
            Menu &amp; Ordering Information
          </p>
          <p className="leading-relaxed">
            All confirmed prices are inclusive of applicable taxes. Available daily from 07:30 AM (07:00 AM on weekends) at 548 12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru.
          </p>
        </div>
      </div>
    </div>
  );
}
