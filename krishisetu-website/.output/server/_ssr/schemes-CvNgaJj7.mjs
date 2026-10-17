//#region node_modules/.nitro/vite/services/ssr/assets/schemes-CvNgaJj7.js
var SCHEMES = [
	{
		"id": "sample-drip-irrigation",
		"name": "Drip Irrigation Support",
		"description": "Fictional demonstration record showing how irrigation support for vegetable growers could be matched.",
		"category": "irrigation",
		"states": ["Karnataka"],
		"crops": ["group:vegetables"],
		"eligibility": "Sample only: farmers growing vegetables in the listed state who need irrigation support.",
		"benefits": null,
		"documents": [
			"Land record",
			"Identity proof",
			"Bank passbook"
		],
		"applicationSteps": ["Check the relevant official scheme information.", "Confirm the required documents with the local agriculture office."],
		"sourceUrl": null,
		"verification": "sample",
		"isSample": true
	},
	{
		"id": "sample-crop-insurance",
		"name": "Crop Insurance Programme",
		"description": "Fictional demonstration record showing how crop-related insurance support could be matched.",
		"category": "insurance",
		"states": ["Karnataka"],
		"crops": ["group:vegetables", "group:cereals"],
		"eligibility": "Sample only: used to demonstrate matching by crop and state.",
		"benefits": null,
		"documents": [
			"Land record",
			"Identity proof",
			"Other documents required by the actual programme"
		],
		"applicationSteps": ["Check the relevant official insurance programme.", "Verify eligibility with the authority that runs it."],
		"sourceUrl": null,
		"verification": "sample",
		"isSample": true
	},
	{
		"id": "sample-soil-health",
		"name": "Soil Health Support",
		"description": "Fictional demonstration record showing how a farmer might discover soil-related support options.",
		"category": "soil",
		"states": ["ALL"],
		"crops": null,
		"eligibility": null,
		"benefits": null,
		"documents": null,
		"applicationSteps": ["Review available soil health services.", "Confirm the applicable requirements."],
		"sourceUrl": null,
		"verification": "sample",
		"isSample": true
	},
	{
		"id": "pm-kisan",
		"name": "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
		"description": "Central government income support scheme for landholding farmer families. Full rules, exclusions and registration are on the official portal.",
		"category": "financial",
		"states": ["ALL"],
		"crops": null,
		"eligibility": null,
		"benefits": null,
		"documents": null,
		"applicationSteps": null,
		"sourceUrl": "https://pmkisan.gov.in",
		"verification": "official-link",
		"isSample": false
	},
	{
		"id": "pmfby",
		"name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
		"description": "Government crop insurance scheme. Notified crops, areas, premiums and deadlines differ by state and season — check the official portal.",
		"category": "insurance",
		"states": ["ALL"],
		"crops": null,
		"eligibility": null,
		"benefits": null,
		"documents": null,
		"applicationSteps": null,
		"sourceUrl": "https://pmfby.gov.in",
		"verification": "official-link",
		"isSample": false
	},
	{
		"id": "soil-health-card",
		"name": "Soil Health Card Scheme",
		"description": "Government scheme providing soil testing information and nutrient recommendations to farmers.",
		"category": "soil",
		"states": ["ALL"],
		"crops": null,
		"eligibility": null,
		"benefits": null,
		"documents": null,
		"applicationSteps": null,
		"sourceUrl": "https://soilhealth.dac.gov.in",
		"verification": "official-link",
		"isSample": false
	},
	{
		"id": "pmksy",
		"name": "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
		"description": "Government programme for irrigation, including micro-irrigation under 'Per Drop More Crop'. Implementation is through state departments.",
		"category": "irrigation",
		"states": ["ALL"],
		"crops": null,
		"eligibility": null,
		"benefits": null,
		"documents": null,
		"applicationSteps": null,
		"sourceUrl": "https://pmksy.gov.in",
		"verification": "official-link",
		"isSample": false
	},
	{
		"id": "enam",
		"name": "e-NAM (National Agriculture Market)",
		"description": "Online trading platform linking agricultural markets (mandis). Registration details are on the official portal.",
		"category": "market",
		"states": ["ALL"],
		"crops": null,
		"eligibility": null,
		"benefits": null,
		"documents": null,
		"applicationSteps": null,
		"sourceUrl": "https://enam.gov.in",
		"verification": "official-link",
		"isSample": false
	},
	{
		"id": "kcc",
		"name": "Kisan Credit Card (KCC)",
		"description": "Bank credit scheme that gives farmers access to short-term credit for cultivation and related needs. Apply through banks; details are on the official scheme page.",
		"category": "financial",
		"states": ["ALL"],
		"crops": null,
		"eligibility": null,
		"benefits": null,
		"documents": null,
		"applicationSteps": null,
		"sourceUrl": "https://www.myscheme.gov.in/schemes/kcc",
		"verification": "official-link",
		"isSample": false
	}
];
var CATEGORIES = [
	{
		id: "financial",
		label: "Financial assistance",
		icon: "₹"
	},
	{
		id: "insurance",
		label: "Crop insurance",
		icon: "☂"
	},
	{
		id: "irrigation",
		label: "Irrigation & water",
		icon: "💧"
	},
	{
		id: "seeds",
		label: "Seeds & fertilizers",
		icon: "🌱"
	},
	{
		id: "soil",
		label: "Soil health",
		icon: "🟫"
	},
	{
		id: "equipment",
		label: "Farming equipment",
		icon: "🚜"
	},
	{
		id: "pest",
		label: "Crop disease & pests",
		icon: "🐛"
	},
	{
		id: "market",
		label: "Market access & selling",
		icon: "🏪"
	},
	{
		id: "general",
		label: "General government schemes",
		icon: "🏛"
	},
	{
		id: "other",
		label: "Other farming needs",
		icon: "…"
	}
];
var categoryLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label ?? id;
var STATES = [
	"Andhra Pradesh",
	"Arunachal Pradesh",
	"Assam",
	"Bihar",
	"Chhattisgarh",
	"Goa",
	"Gujarat",
	"Haryana",
	"Himachal Pradesh",
	"Jharkhand",
	"Karnataka",
	"Kerala",
	"Madhya Pradesh",
	"Maharashtra",
	"Manipur",
	"Meghalaya",
	"Mizoram",
	"Nagaland",
	"Odisha",
	"Punjab",
	"Rajasthan",
	"Sikkim",
	"Tamil Nadu",
	"Telangana",
	"Tripura",
	"Uttar Pradesh",
	"Uttarakhand",
	"West Bengal",
	"Andaman and Nicobar Islands",
	"Chandigarh",
	"Dadra and Nagar Haveli and Daman and Diu",
	"Delhi",
	"Jammu and Kashmir",
	"Ladakh",
	"Lakshadweep",
	"Puducherry"
];
var CROP_GROUPS = {
	vegetables: [
		"Tomato",
		"Onion",
		"Potato",
		"Brinjal",
		"Chilli",
		"Cabbage",
		"Okra"
	],
	cereals: [
		"Rice / Paddy",
		"Wheat",
		"Maize",
		"Millets (Ragi, Jowar, Bajra)"
	],
	pulses: [
		"Tur / Arhar",
		"Chana / Gram",
		"Moong",
		"Urad"
	],
	cash: [
		"Cotton",
		"Sugarcane",
		"Groundnut",
		"Soybean"
	],
	fruits: [
		"Mango",
		"Banana",
		"Coconut",
		"Grapes"
	]
};
var CROPS = Object.values(CROP_GROUPS).flat();
var cropGroupOf = (crop) => Object.entries(CROP_GROUPS).find(([, list]) => list.some((c) => c.toLowerCase() === crop.trim().toLowerCase()))?.[0];
var FARMING_METHODS = [
	"Conventional",
	"Organic",
	"Natural farming",
	"Mixed",
	"Not sure"
];
//#endregion
export { STATES as a, SCHEMES as i, CROPS as n, categoryLabel as o, FARMING_METHODS as r, cropGroupOf as s, CATEGORIES as t };
