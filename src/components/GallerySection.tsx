import Image from "next/image";

const galleryImages = [
  {
    src: "/images/cafe-ambiance.jpg",
    alt: "Sunlit neighborhood cafe atmosphere at Malabar Roast & Co. on 12th Main Road",
    caption: "Indiranagar Brew Bar & Cafe",
    isFeature: true,
  },
  {
    src: "/images/manual-brew.jpg",
    alt: "Manual pour-over coffee extraction with kettle and ceramic dripper",
    caption: "Manual Pour-Over Extraction",
    isFeature: false,
  },
  {
    src: "/images/story-roasting.jpg",
    alt: "Freshly roasted Western Ghats Arabica coffee beans in roaster cooling tray",
    caption: "In-House Drum Roasting",
    isFeature: false,
  },
  {
    src: "/images/kaapi-brass.jpg",
    alt: "Traditional South Indian filter kaapi in brass davarah on teak wood table",
    caption: "Estate Brass Davarah Kaapi",
    isFeature: false,
  },
];

export default function GallerySection() {
  const featureImage = galleryImages[0];
  const supportingImages = galleryImages.slice(1);

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-[#F4EDE2] border-t border-[#D8C7B5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A9653F]">
              Visual Glimpse
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#2B211C] font-display">
              Craft &amp; Atmosphere
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6F6258] max-w-md leading-relaxed">
            From Western Ghats green harvests to brass filter decoctions and manual pour-overs on 12th Main Road.
          </p>
        </div>

        {/* Editorial Photo Strip: Large Feature + Supporting Grid on Desktop, 2-Col on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          {/* Feature Image (Desktop: 7 cols) */}
          <div className="md:col-span-7">
            <div className="group relative h-full min-h-[280px] sm:min-h-[340px] md:min-h-full aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden bg-[#E8D8C5] border border-[#D8C7B5] shadow-xs">
              <Image
                src={featureImage.src}
                alt={featureImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.015]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2B211C]/80 to-transparent p-4 sm:p-5 pt-10">
                <span className="text-xs font-medium text-[#FFF9F1] tracking-wide">
                  {featureImage.caption}
                </span>
              </div>
            </div>
          </div>

          {/* Supporting Images (Desktop: 5 cols, 3 items stacked or grid) */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-4 lg:gap-5">
            {supportingImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] md:aspect-[16/7] rounded-xl overflow-hidden bg-[#E8D8C5] border border-[#D8C7B5] shadow-xs"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 40vw"
                  className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2B211C]/75 to-transparent p-3 pt-6">
                  <span className="text-[11px] font-medium text-[#FFF9F1] tracking-wide">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
