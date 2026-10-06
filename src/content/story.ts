export interface BrandStoryContent {
  headline: string;
  subheadline: string;
  storySentences: string[];
  differentiationStatement: string;
  corePillars: Array<{
    title: string;
    description: string;
  }>;
}

export const brandStory: BrandStoryContent = {
  headline: "Craft Roasting on 12th Main Road",
  subheadline: "Founded in Indiranagar with a commitment to honest coffee and Western Ghats estates.",
  storySentences: [
    "Malabar Roast & Co. was founded on 12th Main Road, Indiranagar, to bring high-elevation estate coffees from the Western Ghats straight into the neighborhood cup.",
    "We partner directly with family-run planters in Chikmagalur and Wayanad who cultivate shade-grown Arabica and robusta under canopy trees.",
    "Every harvest is sample-evaluated, roasted in small drum batches in our Indiranagar shop, and ground fresh to match your brewer.",
    "From classic morning filter decoction to precise light-roast pour-overs, we serve simple, dependable coffee without compromise."
  ],
  differentiationStatement: "We directly source shade-grown, single-origin Arabica and Robusta lots from Chikmagalur and Wayanad, roasting in small batches weekly right here on 12th Main Road.",
  corePillars: [
    {
      title: "Direct Western Ghats Sourcing",
      description: "Harvested from heritage estates in Chikmagalur and Wayanad grown under native shade trees."
    },
    {
      title: "Small-Batch Roasting In-House",
      description: "Roasted in measured 5 kg drum batches weekly to ensure maximum aromatics and clarity."
    },
    {
      title: "Ground to Your Brewing Method",
      description: "Decoction drip, South Indian filter, AeroPress, French press, espresso, or cold brew."
    }
  ]
};
