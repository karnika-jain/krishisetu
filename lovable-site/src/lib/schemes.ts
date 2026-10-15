import data from "@/data/schemes.json";

export type CategoryId =
  | "financial" | "insurance" | "irrigation" | "seeds" | "soil"
  | "equipment" | "pest" | "market" | "general" | "other";

export interface Scheme {
  id: string;
  name: string;
  description: string;
  category: CategoryId;
  states: string[];
  crops: string[] | null;
  eligibility: string | null;
  benefits: string | null;
  documents: string[] | null;
  applicationSteps: string[] | null;
  sourceUrl: string | null;
  verification: "sample" | "official-link" | "verified";
  isSample: boolean;
}

export const SCHEMES = data as Scheme[];

export const CATEGORIES: { id: CategoryId; label: string; icon: string }[] = [
  { id: "financial", label: "Financial assistance", icon: "₹" },
  { id: "insurance", label: "Crop insurance", icon: "☂" },
  { id: "irrigation", label: "Irrigation & water", icon: "💧" },
  { id: "seeds", label: "Seeds & fertilizers", icon: "🌱" },
  { id: "soil", label: "Soil health", icon: "🟫" },
  { id: "equipment", label: "Farming equipment", icon: "🚜" },
  { id: "pest", label: "Crop disease & pests", icon: "🐛" },
  { id: "market", label: "Market access & selling", icon: "🏪" },
  { id: "general", label: "General government schemes", icon: "🏛" },
  { id: "other", label: "Other farming needs", icon: "…" },
];

export const categoryLabel = (id: string) =>
  CATEGORIES.find((c) => c.id === id)?.label ?? id;

export const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana",
  "Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
  "Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
];

export const CROP_GROUPS: Record<string, string[]> = {
  vegetables: ["Tomato", "Onion", "Potato", "Brinjal", "Chilli", "Cabbage", "Okra"],
  cereals: ["Rice / Paddy", "Wheat", "Maize", "Millets (Ragi, Jowar, Bajra)"],
  pulses: ["Tur / Arhar", "Chana / Gram", "Moong", "Urad"],
  cash: ["Cotton", "Sugarcane", "Groundnut", "Soybean"],
  fruits: ["Mango", "Banana", "Coconut", "Grapes"],
};

export const CROPS = Object.values(CROP_GROUPS).flat();

export const cropGroupOf = (crop: string) =>
  Object.entries(CROP_GROUPS).find(([, list]) =>
    list.some((c) => c.toLowerCase() === crop.trim().toLowerCase()),
  )?.[0];

export const FARMING_METHODS = ["Conventional", "Organic", "Natural farming", "Mixed", "Not sure"];
