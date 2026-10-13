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
    <div className="py-14 sm:py-20 bg-[#F5EDE2]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE3D5] border border-[#E8D8C4] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C4F2D]">
            <Coffee className="w-3.5 h-3.5 text-[#A85F37]" />
            <span>Indiranagar Roastery &amp; Brew Bar</span>
          </div>
          <h1 className="mt-3.5 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2B1D17] font-display">
            Coffee &amp; Fresh Roasts Menu
          </h1>
          <p className="mt-3 text-base text-[#63534B] leading-relaxed max-w-xl">
            All beans are roasted in small batches weekly on 12th Main Road. Whole bean pouches and fresh brews are available for dine-in, takeaway, and direct WhatsApp ordering.
          </p>
        </div>

        {/* Featured Roast Protocol Banner with Authentic Visual */}
        <div className="mt-10 rounded-2xl border border-[#E8D8C4] bg-[#FFFCF7] overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto md:h-full min-h-[280px] bg-[#E8D8C4]">
            <Image
              src="/images/kaapi-brass.jpg"
              alt="Traditional South Indian filter coffee in brass tumbler and davarah on wood table at Malabar Roast & Co."
              fill
              sizes="(max-width: 768px) 100vw, 440px"
              className="object-cover object-center"
            />
          </div>
          <div className="p-6 sm:p-8 lg:p-10 md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A85F37] uppercase tracking-[0.14em]">
              <Sparkles className="w-4 h-4 text-[#A85F37]" />
              <span>Complimentary Grind Protocol</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2B1D17] font-display">
              Custom Grinds for Your Home Setup
            </h2>
            <p className="text-sm text-[#63534B] leading-relaxed">
              Purchasing whole beans? Tell our baristas your brewer (South Indian decoction filter, French Press, AeroPress, Mokapot, or Espresso) and we will precision-grind your bag on our commercial grinder at no extra cost.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={getOrderWhatsAppUrl("Whole Bean Roasts")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary tap-target w-full sm:w-auto gap-2"
                aria-label="Order whole beans on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-[#FFFCF7] text-[#FFFCF7]" aria-hidden="true" />
                <span>Order Beans on WhatsApp</span>
              </a>
              <a
                href={`tel:${business.phone.tel}`}
                className="btn-secondary tap-target w-full sm:w-auto gap-2"
                aria-label={`Call Roastery: ${business.phone.display}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#A85F37]" aria-hidden="true" />
                <span className="font-mono text-xs">{business.phone.display}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Categorized Menu List */}
        <div className="mt-14 sm:mt-18 space-y-12 sm:space-y-14">
          {menuCategories.map((category) => {
            const items = menuItems.filter((i) => i.category === category);
            if (items.length === 0) return null;

            return (
              <section key={category} className="space-y-5">
                <div className="border-b border-[#E8D8C4] pb-3 flex items-center justify-between">
                  <h2 className="text-2xl sm:text-3xl font-normal text-[#2B1D17] font-display">
                    {category}
                  </h2>
                  <span className="text-xs text-[#8C4F2D] font-semibold uppercase tracking-wider">
                    {items.length} {items.length === 1 ? "Selection" : "Selections"}
                  </span>
                </div>

                {/* If single item: Full-width editorial layout */}
                {items.length === 1 ? (
                  <div className="coffee-card group overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
                    <div className="md:col-span-5 relative aspect-[16/10] md:aspect-auto md:h-full min-h-[260px] bg-[#E8D8C4] border-b md:border-b-0 md:border-r border-[#E8D8C4] overflow-hidden">
                      <Image
                        src={items[0].image}
                        alt={items[0].name}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 480px"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-3.5 left-3.5 bg-[#2B1D17]/85 backdrop-blur-xs text-[#FFFCF7] border border-[rgba(245,237,226,0.2)] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {items[0].category}
                      </div>
                      {items[0].badge && (
                        <div className="absolute top-3.5 right-3.5 bg-[#FFFCF7]/95 backdrop-blur-xs text-[#8C4F2D] border border-[#E8D8C4] px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide shadow-2xs">
                          {items[0].badge}
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-7 p-6 sm:p-8 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#2B1D17] font-display leading-snug">
                          {items[0].name}
                        </h3>
                        {items[0].priceInInr && (
                          <span className="text-xl sm:text-2xl font-bold text-[#A85F37] font-mono tabular-nums shrink-0 pt-0.5">
                            {formatInrPrice(items[0].priceInInr)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#63534B] leading-relaxed max-w-xl">
                        {items[0].description}
                      </p>
                      {items[0].tastingNotes && items[0].tastingNotes.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                          {items[0].tastingNotes.map((note, idx) => (
                            <span key={idx} className="badge-flavor">{note}</span>
                          ))}
                        </div>
                      )}
                      {items[0].note && (
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#63534B] bg-[#EFE3D5]/70 px-2.5 py-1 rounded-md border border-[#E8D8C4]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A85F37]" aria-hidden="true" />
                          <span>{items[0].note}</span>
                        </div>
                      )}
                      <div className="pt-3 border-t border-[#E8D8C4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <a
                          href={getOrderWhatsAppUrl(items[0].name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary tap-target text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
                          aria-label={`Order ${items[0].name} on WhatsApp`}
                        >
                          <MessageCircle className="w-4 h-4 fill-[#FFFCF7] text-[#FFFCF7]" aria-hidden="true" />
                          <span>Order on WhatsApp</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#FFFCF7] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                        </a>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#63534B] bg-[#EFE3D5]/70 border border-[#E8D8C4] px-2.5 py-1 rounded shrink-0">
                          In-Store &amp; Pickup
                        </span>
                      </div>
                    </div>
                  </div>
                ) : items.length === 3 ? (
                  /* If 3 items (Manual Brews): Balanced 3-column layout on desktop */
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="coffee-card group overflow-hidden flex flex-col justify-between h-full"
                      >
                        <div>
                          {/* Product Image Frame */}
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

                          <div className="p-5 sm:p-6 space-y-3">
                            <div className="flex items-start justify-between gap-3 min-h-[52px]">
                              <h3 className="text-lg sm:text-xl font-bold text-[#2B1D17] font-display leading-snug">
                                {item.name}
                              </h3>
                              {item.priceInInr && (
                                <span className="text-lg sm:text-xl font-bold text-[#A85F37] font-mono tabular-nums shrink-0 pt-0.5">
                                  {formatInrPrice(item.priceInInr)}
                                </span>
                              )}
                            </div>

                            <p className="text-xs sm:text-sm text-[#63534B] leading-relaxed min-h-[58px] line-clamp-3">
                              {item.description}
                            </p>

                            {/* Flavor Notes with locked min-height */}
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
                ) : (
                  /* 2-column layout */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item) => (
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

                          <div className="p-5 sm:p-6 space-y-3">
                            <div className="flex items-start justify-between gap-3 min-h-[52px]">
                              <h3 className="text-lg sm:text-xl font-bold text-[#2B1D17] font-display leading-snug">
                                {item.name}
                              </h3>
                              {item.priceInInr && (
                                <span className="text-lg sm:text-xl font-bold text-[#A85F37] font-mono tabular-nums shrink-0 pt-0.5">
                                  {formatInrPrice(item.priceInInr)}
                                </span>
                              )}
                            </div>

                            <p className="text-xs sm:text-sm text-[#63534B] leading-relaxed min-h-[58px] line-clamp-3">
                              {item.description}
                            </p>

                            {/* Flavor Notes with locked min-height */}
                            <div className="min-h-[58px] flex flex-wrap items-start content-start gap-1.5 pt-1">
                              {item.tastingNotes && item.tastingNotes.map((note, idx) => (
                                <span key={idx} className="badge-flavor">{note}</span>
                              ))}
                            </div>

                            {/* Preparation / Serving Craft Tag */}
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
                )}
              </section>
            );
          })}
        </div>

        {/* Pricing & GST Note */}
        <div className="mt-14 p-6 rounded-2xl bg-[#FFFCF7] border border-[#E8D8C4] text-xs text-[#63534B] space-y-1.5 shadow-xs">
          <p className="font-semibold text-[#2B1D17] uppercase tracking-wider text-[11px]">
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
