import React from "react";

interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  variant = "light",
  className = "",
  size = "md",
}: BrandLogoProps) {
  const isDark = variant === "dark";

  const markSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
  };

  const titleSizes = {
    sm: "text-base tracking-[0.14em]",
    md: "text-lg sm:text-[20px] tracking-[0.14em]",
    lg: "text-2xl sm:text-3xl tracking-[0.16em]",
  };

  const subtitleSizes = {
    sm: "text-[8px] tracking-[0.22em]",
    md: "text-[9px] sm:text-[10px] tracking-[0.24em]",
    lg: "text-xs tracking-[0.26em]",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Artisanal Heritage Coffee Seal */}
      <div className={`relative shrink-0 ${markSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
          aria-hidden="true"
        >
          {/* Outer fine ring */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke={isDark ? "#C97D52" : "#A85F37"}
            strokeWidth="1.25"
            strokeDasharray="1 3"
          />
          {/* Main Seal Body */}
          <circle
            cx="24"
            cy="24"
            r="19"
            fill={isDark ? "#2A1B14" : "#2B1D17"}
            stroke={isDark ? "#C97D52" : "#A85F37"}
            strokeWidth="1.5"
          />
          {/* Botanical shade-canopy leaf accent */}
          <path
            d="M24 9.5C26 7.5 29 8 30 11C28 11.5 25.5 11 24 9.5Z"
            fill={isDark ? "#E8D8C4" : "#D4A373"}
          />
          {/* Artisanal Roasted Coffee Bean */}
          <path
            d="M24 13C17.5 13 13.5 18 13.5 24.5C13.5 31 17.5 35.5 24 35.5C30.5 35.5 34.5 31 34.5 24.5C34.5 18 30.5 13 24 13Z"
            fill={isDark ? "#FFFCF7" : "#F5EDE2"}
          />
          {/* S-curve bean extraction crevasse */}
          <path
            d="M24 14.5C20.5 19.5 27.5 23 24 28.5C21 33 27 34 24 34"
            stroke={isDark ? "#2A1B14" : "#2B1D17"}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Micro dots */}
          <circle cx="8" cy="24" r="1" fill={isDark ? "#C97D52" : "#A85F37"} />
          <circle cx="40" cy="24" r="1" fill={isDark ? "#C97D52" : "#A85F37"} />
        </svg>
      </div>

      {/* Typographic Wordmark (Rendered via page Google Fonts for 100% crispness) */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-display font-bold uppercase transition-colors duration-200 ${
            titleSizes[size]
          } ${isDark ? "text-[#FFFCF7]" : "text-[#2B1D17] group-hover:text-[#A85F37]"}`}
        >
          MALABAR
        </span>
        <span
          className={`font-semibold uppercase mt-1 transition-colors duration-200 ${
            subtitleSizes[size]
          } ${isDark ? "text-[#C97D52]" : "text-[#8C4F2D]"}`}
        >
          ROAST &amp; CO. · BENGALURU
        </span>
      </div>
    </div>
  );
}
