import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { business, getWhatsAppUrl } from "@/content/business";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#3E2B22] bg-[#1E130E] text-[#FFFCF7] transition-colors">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* 4 Responsive Columns: 4 cols + 3 cols + 3 cols + 2 cols = 12 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
          
          {/* Column 1: Brand & Locality (4 cols desktop) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-block focus-visible:outline-2 focus-visible:outline-[#A85F37] rounded group"
              aria-label={`${business.name} — Return to Home`}
            >
              <BrandLogo variant="dark" size="md" />
            </Link>
            
            <p className="text-sm text-[#D9C8B6] leading-relaxed max-w-sm font-normal">
              {business.oneLinePromise}
            </p>

            <div className="pt-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C97D52] block">
                Roastery &amp; Brew Bar Locality
              </span>
              <span className="text-sm text-[#FFFCF7] font-medium mt-1 block">
                {business.locality}, {business.city}
              </span>
              <span className="text-xs text-[#A8988C] mt-0.5 block">
                Near 12th Main junction, HAL 2nd Stage
              </span>
            </div>
          </div>

          {/* Column 2: Roastery & Cafe Hours (3 cols desktop) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C97D52] block">
                Schedule
              </span>
              <h3 className="text-lg font-bold font-display text-[#FFFCF7] mt-1 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C97D52]" aria-hidden="true" />
                <span>Roastery &amp; Cafe Hours</span>
              </h3>
            </div>
            
            <ul className="space-y-3.5 text-sm text-[#D9C8B6]">
              {business.hours.map((item, idx) => (
                <li key={idx} className="flex flex-col space-y-1 pb-2 border-b border-[rgba(245,237,226,0.08)]">
                  <span className="font-semibold text-[#FFFCF7] text-sm">{item.days}</span>
                  <span className="text-xs text-[#D9C8B6] tracking-wide">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Location, Contact & Directions (3 cols desktop) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C97D52] block">
                Direct Contact
              </span>
              <h3 className="text-lg font-bold font-display text-[#FFFCF7] mt-1 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C97D52]" aria-hidden="true" />
                <span>Location &amp; Visit</span>
              </h3>
            </div>
            
            <div className="space-y-3.5 text-sm text-[#D9C8B6]">
              <address className="not-italic text-xs leading-relaxed text-[#D9C8B6]">
                {business.addressLines.map((line, idx) => (
                  <span key={idx} className="block">{line}</span>
                ))}
              </address>

              <div className="pt-1 space-y-2.5">
                <a
                  href={`tel:${business.phone.tel}`}
                  className="flex items-center gap-2.5 text-xs text-[#FFFCF7] hover:text-[#C97D52] transition-colors py-0.5 group"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C97D52] shrink-0" aria-hidden="true" />
                  <span className="group-hover:underline font-medium tracking-wide">{business.phone.display}</span>
                </a>
                
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-[#FFFCF7] hover:text-[#C97D52] transition-colors py-0.5 group"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366] shrink-0" aria-hidden="true" />
                  <span className="group-hover:underline font-medium tracking-wide">WhatsApp: {business.whatsapp.display}</span>
                </a>

                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2.5 text-xs text-[#FFFCF7] hover:text-[#C97D52] transition-colors py-0.5 group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C97D52] shrink-0" aria-hidden="true" />
                  <span className="group-hover:underline font-medium">{business.email}</span>
                </a>
              </div>

              <div className="pt-1.5">
                <a
                  href={business.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C97D52] hover:text-[#FFFCF7] transition-colors"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Navigation & Social (2 cols desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C97D52] block">
                Directory
              </span>
              <h3 className="text-lg font-bold font-display text-[#FFFCF7] mt-1">
                Navigation
              </h3>
            </div>
            
            <ul className="space-y-2 text-xs text-[#D9C8B6]">
              <li>
                <Link href="/" className="hover:text-[#FFFCF7] hover:translate-x-1 transition-all py-0.5 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#FFFCF7] hover:translate-x-1 transition-all py-0.5 inline-block">
                  Menu &amp; Roastery List
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFFCF7] hover:translate-x-1 transition-all py-0.5 inline-block">
                  Brand Story &amp; Sourcing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFFCF7] hover:translate-x-1 transition-all py-0.5 inline-block">
                  Location &amp; Hours
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#FFFCF7] hover:translate-x-1 transition-all py-0.5 inline-block">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <div className="pt-2 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C97D52] block">
                Connect
              </span>
              <div className="flex items-center gap-3.5 text-xs text-[#D9C8B6]">
                {business.social.instagram && (
                  <a
                    href={business.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C97D52] transition-colors"
                  >
                    Instagram
                  </a>
                )}
                {business.social.facebook && (
                  <a
                    href={business.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C97D52] transition-colors"
                  >
                    Facebook
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider & Attribution */}
        <div className="mt-14 border-t border-[rgba(245,237,226,0.12)] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8988C]">
          <p>© {new Date().getFullYear()} {business.name}. Single-Origin Coffee Roasters · Bengaluru.</p>
          <p>
            Designed &amp; built by{" "}
            <a
              href="https://heptley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C97D52] hover:text-[#FFFCF7] font-semibold hover:underline"
            >
              Heptley
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
