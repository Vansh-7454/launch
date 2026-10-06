import { business } from "@/content/business";

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${business.siteUrl}/#cafe`,
    name: business.name,
    legalName: business.legalName,
    description: business.oneLinePromise,
    url: business.siteUrl,
    telephone: business.phone.tel,
    email: business.email,
    priceRange: "₹₹",
    servesCuisine: ["Specialty Coffee", "South Indian Filter Coffee", "Artisanal Bakes"],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLines[0],
      addressLocality: business.locality,
      addressRegion: business.state,
      postalCode: business.postalCode,
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.latitude,
      longitude: business.coordinates.longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "22:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "07:00",
        closes: "23:00"
      }
    ],
    hasMap: business.googleMaps.viewUrl,
    sameAs: [
      business.social.instagram,
      business.social.facebook
    ].filter(Boolean)
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${business.siteUrl}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: business.siteUrl,
    logo: `${business.siteUrl}/brand/logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone.tel,
      contactType: "customer service",
      availableLanguage: ["en", "kn", "hi"],
      areaServed: "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
