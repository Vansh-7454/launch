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
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5EDE2] border-t border-[#E8D8C4]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C4F2D]">
              Visual Glimpse
            </span>
            <h2 className="mt-1.5 text-3xl sm:text-4xl font-normal tracking-tight text-[#2B1D17] font-display">
              Craft &amp; Atmosphere
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#63534B] max-w-md leading-relaxed">
            From Western Ghats green harvests to brass filter decoctions and manual pour-overs on 12th Main Road.
          </p>
        </div>

        {/* Editorial Photo Strip: Large Feature + Supporting Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Feature Image (Desktop: 7 cols) */}
          <div className="md:col-span-7">
            <div className="group relative h-full min-h-[300px] sm:min-h-[360px] md:min-h-full aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden bg-[#E8D8C4] border border-[#E8D8C4] shadow-sm">
              <Image
                src={featureImage.src}
                alt={featureImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2B1D17]/85 to-transparent p-5 sm:p-6 pt-12">
                <span className="text-sm font-medium text-[#FFFCF7] tracking-wide font-display">
                  {featureImage.caption}
                </span>
              </div>
            </div>
          </div>

          {/* Supporting Images (Desktop: 5 cols, 3 items) */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4 lg:gap-5">
            {supportingImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/7] rounded-xl overflow-hidden bg-[#E8D8C4] border border-[#E8D8C4] shadow-xs"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 40vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2B1D17]/80 to-transparent p-3.5 pt-8">
                  <span className="text-xs font-medium text-[#FFFCF7] tracking-wide">
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
