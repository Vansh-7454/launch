export interface ContentTodoItem {
  id: string;
  field: string;
  category: "Photography" | "Reviews" | "Legal / Compliance" | "Social";
  description: string;
  actionRequired: string;
}

export const contentTodos: ContentTodoItem[] = [
  {
    id: "todo-photo-hero",
    field: "Hero Roastery Photo",
    category: "Photography",
    description: "High-resolution landscape photo of Malabar Roast & Co. Indiranagar cafe exterior / brew bar during morning light.",
    actionRequired: "Replace editorial image '/images/hero-pourover.jpg' with client's authentic photograph when ready (recommended 1920x1080 WebP, max 250KB)."
  },
  {
    id: "todo-photo-roaster",
    field: "In-House Drum Roaster Photo",
    category: "Photography",
    description: "Authentic photograph of the in-house coffee drum roaster in operation with cooling tray beans on 12th Main.",
    actionRequired: "Replace editorial image '/images/story-roasting.jpg' with client's authentic photography."
  },
  {
    id: "todo-photo-kaapi",
    field: "Traditional Filter Kaapi & Pour-Over Photo",
    category: "Photography",
    description: "Client photograph of brass davarah filter coffee and pour-over kettle on cafe wooden table.",
    actionRequired: "Replace editorial image '/images/kaapi-brass.jpg' with client's authentic beverage photography."
  },
  {
    id: "todo-reviews",
    field: "Customer Testimonials & Google Business Profile Rating",
    category: "Reviews",
    description: "3-5 verified customer reviews with original Google Maps reviewer names, star ratings, and review timestamps.",
    actionRequired: "Testimonials section is currently hidden strictly per Heptley Truth Rules. Add verified reviews here to enable testimonials component."
  },
  {
    id: "todo-fssai",
    field: "FSSAI License Number",
    category: "Legal / Compliance",
    description: "14-digit FSSAI Registration or State License number for food business operator display on footer & packaged coffee.",
    actionRequired: "Supply valid 14-digit FSSAI number to display in site footer and menu compliance badge."
  }
];
