"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { business, getWhatsAppUrl } from "@/content/business";
import { Menu, X, MessageCircle, Phone, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu & Roasts" },
  { href: "/about", label: "Brand Story" },
  { href: "/contact", label: "Visit & Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on ESC key press
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#2B211C] focus:text-[#FFF9F1] focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A9653F] text-xs font-semibold uppercase tracking-wider"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-[#D8C7B5] bg-[#F4EDE2]/95 backdrop-blur-md transition-colors">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px]">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center rounded focus-visible:outline-2 focus-visible:outline-[#A9653F] shrink-0"
            aria-label={`${business.name} — Return to Home`}
          >
            <div className="relative h-9 w-36 sm:h-10 sm:w-48">
              <Image
                src="/brand/logo.svg"
                alt={`${business.name} Logo`}
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide transition-all duration-200 py-1 border-b-2 ${
                    isActive
                      ? "text-[#A9653F] font-semibold border-[#A9653F]"
                      : "text-[#2B211C] border-transparent hover:text-[#A9653F] hover:border-[#A9653F]/40"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Call Button (Desktop Only) */}
            <a
              href={`tel:${business.phone.tel}`}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#6F6258] hover:text-[#2B211C] hover:bg-[#E8D8C5]/50 transition-colors rounded-md"
              aria-label={`Call Roastery at ${business.phone.display}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#A9653F]" aria-hidden="true" />
              <span className="font-mono">{business.phone.display}</span>
            </a>

            {/* Primary CTA: WhatsApp Us (Deep Coffee Brown Background + Cream Text) */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-md bg-[#2B211C] px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold text-[#FFF9F1] transition-all duration-200 hover:bg-[#3D2F28] hover:-translate-y-0.5 active:translate-y-0 shadow-xs"
              aria-label="WhatsApp us (Opens in new window)"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-[#FFF9F1] text-[#FFF9F1] shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">WhatsApp Us</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden tap-target p-2 rounded-md text-[#2B211C] hover:bg-[#E8D8C5]/50 focus:outline-none focus:ring-2 focus:ring-[#A9653F] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (Placed outside <header> so backdrop-blur does not trap fixed positioning) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-[64px] sm:top-[68px] bottom-0 z-50 bg-[#F4EDE2] px-5 py-6 md:hidden flex flex-col justify-between border-t border-[#D8C7B5] overflow-y-auto h-[calc(100dvh-64px)] sm:h-[calc(100dvh-68px)] shadow-2xl"
        >
          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A9653F]">
              Navigation
            </span>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-[#E8D8C5] text-[#A9653F] border-l-4 border-[#A9653F]"
                        : "text-[#2B211C] hover:bg-[#E8D8C5]/60 hover:text-[#A9653F] bg-[#FFF9F1] border border-[#D8C7B5]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-[#A9653F]" />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Direct Contact in Mobile Drawer */}
          <div className="mt-6 border-t border-[#D8C7B5] pt-5 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A9653F]">
              Roastery &amp; Cafe
            </span>
            <a
              href={`tel:${business.phone.tel}`}
              className="flex items-center justify-between p-3.5 rounded-lg border border-[#D8C7B5] bg-[#FFF9F1] text-[#2B211C] text-sm font-semibold hover:border-[#A9653F]/60 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#A9653F]" aria-hidden="true" />
                <span>Call: {business.phone.display}</span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#6F6258]" />
            </a>

            <a
              href={business.googleMaps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg border border-[#D8C7B5] bg-[#FFF9F1] text-[#2B211C] text-sm font-semibold hover:border-[#A9653F]/60 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-[#A9653F] text-base">📍</span>
                <span>12th Main Road, Indiranagar</span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#6F6258]" />
            </a>

            <p className="text-xs text-[#6F6258] pt-1 leading-relaxed">
              Mon–Fri: 07:30 AM – 10:30 PM · Sat–Sun: 07:00 AM – 11:00 PM
            </p>
          </div>
        </div>
      )}
    </>
  );
}
