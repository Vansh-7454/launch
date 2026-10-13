"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { usePathname } from "next/navigation";
import { business, getWhatsAppUrl } from "@/content/business";
// Zero-dependency inline SVGs to avoid Turbopack HMR chunk factory cache mismatches
function IconMenu({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function IconMessageCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu & Roasts" },
  { href: "/about", label: "Brand Story" },
  { href: "/contact", label: "Visit & Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on ESC key press & lock scroll
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to Content for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#2B1D17] focus:text-[#FFFCF7] focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A85F37] text-xs font-semibold uppercase tracking-wider"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-[#E8D8C4] bg-[#F5EDE2]/95 backdrop-blur-md transition-colors">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8 h-18 sm:h-[72px]">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center rounded focus-visible:outline-2 focus-visible:outline-[#A85F37] shrink-0 group"
            aria-label={`${business.name} — Return to Home`}
          >
            <BrandLogo variant="light" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] tracking-wide transition-all duration-200 py-1.5 border-b-2 font-medium relative ${
                    isActive
                      ? "text-[#A85F37] font-semibold border-[#A85F37]"
                      : "text-[#2B1D17] border-transparent hover:text-[#A85F37] hover:border-[#A85F37]/40"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Primary CTA: WhatsApp Us (Deep Espresso Brown + Warm White) */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2B1D17] hover:bg-[#3D2920] px-4 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold text-[#FFFCF7] border border-[#3E2B22] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs h-[42px]"
              aria-label="WhatsApp us (Opens in new window)"
            >
              <IconMessageCircle className="h-4 w-4 fill-[#FFFCF7] text-[#FFFCF7] shrink-0" />
              <span>WhatsApp Us</span>
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden tap-target p-2 rounded-lg text-[#2B1D17] hover:bg-[#E8D8C4]/60 focus:outline-none focus:ring-2 focus:ring-[#A85F37] flex items-center justify-center transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <IconX className="h-5 w-5" />
              ) : (
                <IconMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-[72px] bottom-0 z-50 bg-[#F5EDE2] px-5 py-6 md:hidden flex flex-col justify-between border-t border-[#E8D8C4] overflow-y-auto h-[calc(100dvh-72px)] shadow-2xl"
        >
          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A85F37]">
              Navigation
            </span>
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-[#E8D8C4] text-[#A85F37] border-l-4 border-[#A85F37] shadow-xs"
                        : "text-[#2B1D17] hover:bg-[#E8D8C4]/60 hover:text-[#A85F37] bg-[#FFFCF7] border border-[#E8D8C4]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{link.label}</span>
                    <IconArrowUpRight className="h-4 w-4 text-[#A85F37]" />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Direct Contact in Mobile Drawer */}
          <div className="mt-8 border-t border-[#E8D8C4] pt-5 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A85F37]">
              Roastery &amp; Cafe
            </span>
            <a
              href={`tel:${business.phone.tel}`}
              className="flex items-center justify-between p-3.5 rounded-xl border border-[#E8D8C4] bg-[#FFFCF7] text-[#2B1D17] text-sm font-semibold hover:border-[#A85F37]/60 transition-colors shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <IconPhone className="h-4 w-4 text-[#A85F37]" />
                <span>Call: {business.phone.display}</span>
              </div>
              <IconArrowUpRight className="h-4 w-4 text-[#63534B]" />
            </a>

            <a
              href={business.googleMaps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl border border-[#E8D8C4] bg-[#FFFCF7] text-[#2B1D17] text-sm font-semibold hover:border-[#A85F37]/60 transition-colors shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-[#A85F37] text-base">📍</span>
                <span>12th Main Road, Indiranagar</span>
              </div>
              <IconArrowUpRight className="h-4 w-4 text-[#63534B]" />
            </a>

            <p className="text-xs text-[#63534B] pt-1 leading-relaxed">
              Mon–Fri: 07:30 AM – 10:30 PM · Sat–Sun: 07:00 AM – 11:00 PM
            </p>
          </div>
        </div>
      )}
    </>
  );
}
