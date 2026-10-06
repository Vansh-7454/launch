import Link from "next/link";
import Image from "next/image";
import { business, getWhatsAppUrl } from "@/content/business";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(244,237,226,0.1)] bg-[#231813] text-[#FFF9F1] transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="relative h-10 w-44">
              <Image
                src="/brand/logo.svg"
                alt={`${business.name} Logo`}
                fill
                className="object-contain object-left brightness-0 invert opacity-95"
              />
            </div>
            <p className="text-sm text-[#D8CCBC] leading-relaxed">
              {business.oneLinePromise}
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-[#C8895E] font-semibold">Locality</p>
              <p className="text-xs text-[#D8CCBC] mt-0.5">{business.locality}, {business.city}</p>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C8895E] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C8895E]" aria-hidden="true" />
              <span>Roastery &amp; Cafe Hours</span>
            </h3>
            <ul className="space-y-2 text-sm text-[#D8CCBC]">
              {business.hours.map((item, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="font-medium text-[#FFF9F1]">{item.days}</span>
                  <span className="text-xs text-[#AFA294]">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Directions */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C8895E] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C8895E]" aria-hidden="true" />
              <span>Location &amp; Contact</span>
            </h3>
            <div className="space-y-2 text-sm text-[#D8CCBC]">
              <p className="text-xs leading-relaxed text-[#D8CCBC]">
                {business.addressLines.map((line, idx) => (
                  <span key={idx} className="block">{line}</span>
                ))}
              </p>
              <div className="pt-2 space-y-1.5">
                <a
                  href={`tel:${business.phone.tel}`}
                  className="flex items-center gap-2 text-xs text-[#FFF9F1] hover:text-[#C8895E] transition-colors tap-target"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C8895E]" aria-hidden="true" />
                  <span>{business.phone.display}</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#FFF9F1] hover:text-[#C8895E] transition-colors tap-target"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C8895E]" aria-hidden="true" />
                  <span>WhatsApp: {business.whatsapp.display}</span>
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2 text-xs text-[#FFF9F1] hover:text-[#C8895E] transition-colors tap-target"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C8895E]" aria-hidden="true" />
                  <span>{business.email}</span>
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={business.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8895E] hover:text-[#FFF9F1] hover:underline tap-target"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Navigation & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C8895E]">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs text-[#D8CCBC]">
              <li>
                <Link href="/" className="hover:text-[#FFF9F1] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#FFF9F1] transition-colors">
                  Menu &amp; Roastery List
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFF9F1] transition-colors">
                  Brand Story &amp; Sourcing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFF9F1] transition-colors">
                  Location, Hours &amp; Directions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#FFF9F1] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <div className="pt-2 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C8895E]">Connect</p>
              <div className="flex items-center gap-4 text-xs text-[#D8CCBC]">
                {business.social.instagram && (
                  <a
                    href={business.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C8895E] transition-colors tap-target"
                  >
                    Instagram
                  </a>
                )}
                {business.social.facebook && (
                  <a
                    href={business.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C8895E] transition-colors tap-target"
                  >
                    Facebook
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Heptley Webworks attribution */}
        <div className="mt-12 border-t border-[rgba(244,237,226,0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F8175]">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved. en_IN</p>
          <p>
            Designed &amp; built by{" "}
            <a
              href="https://heptley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8895E] hover:text-[#FFF9F1] font-semibold hover:underline"
            >
              Heptley
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
