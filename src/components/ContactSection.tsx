import { business, getWhatsAppUrl } from "@/content/business";
import { Phone, MessageCircle, MapPin, Clock, Navigation, ExternalLink } from "lucide-react";

interface ContactSectionProps {
  showTitle?: boolean;
}

export default function ContactSection({ showTitle = true }: ContactSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#35261F] border-t border-[#4A372E]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#C8895E]">
              Visit Us in Indiranagar
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FFF9F1] font-display">
              Roastery, Brew Bar &amp; Neighborhood Cafe
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#D8CCBC] max-w-lg mx-auto leading-relaxed">
              Drop in for freshly pulled espresso, traditional brass filter kaapi, or pick up whole beans roasted this week.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#2A1E18] rounded-2xl border border-[rgba(244,237,226,0.12)] p-6 sm:p-8 shadow-md space-y-6">
            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#35261F] border border-[rgba(244,237,226,0.12)] text-[#C8895E] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#C8895E]">
                  Address
                </h3>
                <address className="not-italic text-sm sm:text-base font-medium text-[#FFF9F1] mt-1 leading-relaxed">
                  {business.addressLines.map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                </address>
                <p className="text-xs text-[#D8CCBC] mt-1">
                  Near 12th Main junction, HAL 2nd Stage
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3.5 pt-5 border-t border-[rgba(244,237,226,0.1)]">
              <div className="p-2.5 rounded-lg bg-[#35261F] border border-[rgba(244,237,226,0.12)] text-[#C8895E] shrink-0 mt-0.5">
                <Clock className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="w-full">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#C8895E]">
                  Opening Hours
                </h3>
                <div className="mt-2 space-y-1.5 text-sm">
                  {business.hours.map((h, i) => (
                    <div key={i} className="flex justify-between gap-3 text-xs sm:text-sm">
                      <span className="font-medium text-[#FFF9F1]">{h.days}</span>
                      <span className="text-[#D8CCBC] font-mono">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Contacts & Actions */}
            <div className="pt-5 border-t border-[rgba(244,237,226,0.1)] space-y-3.5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#C8895E]">
                Direct Contacts &amp; Booking
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Tap to Call */}
                <a
                  href={`tel:${business.phone.tel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-transparent border border-[rgba(244,237,226,0.35)] hover:bg-[#35261F] px-4 py-2.5 text-xs font-semibold text-[#FFF9F1] transition-all tap-target w-full"
                  aria-label={`Call ${business.phone.display}`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#C8895E] shrink-0" aria-hidden="true" />
                  <span>Call Now</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FFF9F1] hover:bg-[#FFFFFF] px-4 py-2.5 text-xs font-semibold text-[#2B211C] transition-all tap-target shadow-xs w-full"
                  aria-label="WhatsApp us"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#2B211C] text-[#2B211C] shrink-0" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Get Directions Button */}
              <a
                href={business.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#A9653F] hover:bg-[#945633] text-[#FFF9F1] text-xs sm:text-sm font-semibold transition-all duration-200 tap-target shadow-xs"
                aria-label="Get directions to Malabar Roast on Google Maps"
              >
                <Navigation className="w-3.5 h-3.5 text-[#FFF9F1]" aria-hidden="true" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#D8CCBC]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Lazy-Loaded Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 bg-[#2A1E18] rounded-2xl border border-[rgba(244,237,226,0.12)] p-2.5 shadow-md overflow-hidden flex flex-col">
            <div className="relative w-full h-[340px] sm:h-[400px] rounded-xl overflow-hidden bg-[#231813]">
              <iframe
                title="Malabar Roast &amp; Co. Indiranagar Location Map"
                src={business.googleMaps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                aria-label="Interactive Google Map showing 548 12th Main Road, Indiranagar"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-3.5 py-2.5 text-xs text-[#D8CCBC] gap-1.5 sm:gap-2">
              <span className="truncate sm:overflow-visible">548, 12th Main Rd, HAL 2nd Stage, Indiranagar</span>
              <a
                href={business.googleMaps.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8895E] hover:text-[#FFF9F1] font-semibold hover:underline inline-flex items-center gap-1 shrink-0 self-start sm:self-auto"
              >
                Open in Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
