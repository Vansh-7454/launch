export interface OpeningHours {
  days: string;
  hours: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  googleMaps?: string;
}

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  oneLinePromise: string;
  industry: string;
  locality: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  addressLines: string[];
  fullAddress: string;
  phone: {
    display: string;
    tel: string;
  };
  whatsapp: {
    display: string;
    number: string;
    defaultMessage: string;
    orderMessage: string;
  };
  email: string;
  hours: OpeningHours[];
  googleMaps: {
    viewUrl: string;
    directionsUrl: string;
    embedUrl: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  social: SocialLinks;
  siteUrl: string;
}

export const business: BusinessConfig = {
  name: "Malabar Roast & Co.",
  legalName: "Malabar Roast & Co. Private Limited",
  tagline: "Artisanal Specialty Coffee & Roastery",
  oneLinePromise: "Shade-grown, single-origin Western Ghats coffee roasted in small batches on 12th Main Road.",
  industry: "Specialty Coffee Roastery & Cafe",
  locality: "HAL 2nd Stage, Indiranagar",
  city: "Bengaluru",
  state: "Karnataka",
  postalCode: "560038",
  country: "India",
  addressLines: [
    "548, 12th Main Rd",
    "HAL 2nd Stage, Indiranagar",
    "Bengaluru, Karnataka 560038"
  ],
  fullAddress: "548, 12th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
  phone: {
    display: "+91 80 4122 8954",
    tel: "+918041228954"
  },
  whatsapp: {
    display: "+91 98450 23140",
    number: "919845023140",
    defaultMessage: "Hi Malabar Roast & Co., I would like to inquire about your fresh roasts and table timings.",
    orderMessage: "Hi Malabar Roast & Co., I would like to order freshly roasted coffee beans / reserve a table."
  },
  email: "hello@malabarroast.in",
  hours: [
    {
      days: "Monday – Friday",
      hours: "07:30 AM – 10:30 PM"
    },
    {
      days: "Saturday – Sunday",
      hours: "07:00 AM – 11:00 PM"
    }
  ],
  googleMaps: {
    viewUrl: "https://maps.google.com/?q=548+12th+Main+Rd+HAL+2nd+Stage+Indiranagar+Bengaluru+Karnataka+560038",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=548+12th+Main+Rd+HAL+2nd+Stage+Indiranagar+Bengaluru+Karnataka+560038",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985252874135!2d77.6384216!3d12.9727932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7061d43eb%3A0xe54e6ffecbaaa874!2s12th%20Main%20Rd%2C%20HAL%202nd%20Stage%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  coordinates: {
    latitude: 12.9727932,
    longitude: 77.6384216
  },
  social: {
    instagram: "https://instagram.com/malabarroastco",
    facebook: "https://facebook.com/malabarroastco",
    googleMaps: "https://maps.google.com/?q=548+12th+Main+Rd+HAL+2nd+Stage+Indiranagar+Bengaluru+Karnataka+560038"
  },
  siteUrl: "https://malabarroast.in"
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || business.whatsapp.defaultMessage);
  return `https://wa.me/${business.whatsapp.number}?text=${message}`;
}

export function getOrderWhatsAppUrl(itemTitle?: string): string {
  const text = itemTitle
    ? `Hi Malabar Roast & Co., I would like to order "${itemTitle}" on WhatsApp.`
    : business.whatsapp.orderMessage;
  return `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(text)}`;
}
