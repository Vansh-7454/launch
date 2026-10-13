import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { MapPin, Bus, Car, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Visit & Contact | 12th Main Road, Indiranagar",
  description:
    "Find Malabar Roast & Co. on 12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru. Phone numbers, WhatsApp contact, opening hours, and Google Maps directions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#F5EDE2]">
      {/* Header & Local Guides */}
      <div className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE3D5] border border-[#E8D8C4] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C4F2D]">
              <Navigation className="w-3.5 h-3.5 text-[#A85F37]" />
              <span>Indiranagar Location &amp; Timings</span>
            </div>
            <h1 className="mt-3.5 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2B1D17] font-display">
              Find Us on 12th Main Road
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#63534B] leading-relaxed max-w-xl">
              We are located in the heart of Indiranagar, Bengaluru. Drop by for coffee, pick up fresh beans, or connect with our team on WhatsApp.
            </p>
          </div>

          {/* Local Visitor Guide Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="coffee-card p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2 text-[#A85F37] font-semibold text-[11px] uppercase tracking-[0.14em]">
                <MapPin className="w-4 h-4 text-[#A85F37]" />
                <span>Neighborhood Landmark</span>
              </div>
              <p className="text-lg font-bold text-[#2B1D17] font-display">HAL 2nd Stage, Indiranagar</p>
              <p className="text-xs sm:text-sm text-[#63534B] leading-relaxed">
                Situated on 12th Main Road between 80 Feet Road and 100 Feet Road, easily accessible on foot from nearby residential lanes.
              </p>
            </div>

            <div className="coffee-card p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2 text-[#A85F37] font-semibold text-[11px] uppercase tracking-[0.14em]">
                <Bus className="w-4 h-4 text-[#A85F37]" />
                <span>Public Transit / Metro</span>
              </div>
              <p className="text-lg font-bold text-[#2B1D17] font-display">Indiranagar Metro (Purple Line)</p>
              <p className="text-xs sm:text-sm text-[#63534B] leading-relaxed">
                Approximately 1.1 km from Indiranagar Metro Station. 12-minute walk or a quick 4-minute auto ride.
              </p>
            </div>

            <div className="coffee-card p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2 text-[#A85F37] font-semibold text-[11px] uppercase tracking-[0.14em]">
                <Car className="w-4 h-4 text-[#A85F37]" />
                <span>Parking Guidance</span>
              </div>
              <p className="text-lg font-bold text-[#2B1D17] font-display">Two-Wheeler &amp; Street Bays</p>
              <p className="text-xs sm:text-sm text-[#63534B] leading-relaxed">
                Designated two-wheeler parking directly outside the cafe. Paid street parking bays available along adjacent 12th Main side roads.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Contact Block and Interactive Map */}
      <ContactSection showTitle={false} />
    </div>
  );
}
