// Ottawa County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-22

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Recreation & Tourism",
  "News & Media",
];

// The platform that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Schneider Geospatial";

export const LINKS = [
  // ---------- Government ----------
  { name: "Ottawa County (Official Site)", category: "Government", subcategory: "County", url: "https://www.co.ottawa.oh.us/", description: "Official government portal for Ottawa County, Ohio (county seat: Port Clinton)." },
  { name: "Ottawa County Auditor", category: "Government", subcategory: "Auditor", url: "https://auditor.co.ottawa.oh.us/", description: "Property records, valuations, and the real-estate/parcel search." },
  { name: "Ottawa County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/ottawa/", description: "Voter registration, polling locations, and election administration." },
  // ---------- Education ----------
  { name: "Ida Rupp Public Library", category: "Education", subcategory: "Library", url: "https://www.idarupp.org/", description: "Public library in Port Clinton serving Ottawa County." },
  { name: "Port Clinton City Schools", category: "Education", subcategory: "K-12", url: "https://www.pccsd.net/", description: "The county seat's public school district (Port Clinton Redskins)." },
  { name: "Terra State Community College", category: "Education", subcategory: "Higher Ed", url: "https://www.terra.edu/", description: "Regional two-year college (Fremont) serving Ottawa County and the area." },
  // ---------- Health ----------
  { name: "Magruder Hospital", category: "Health", subcategory: "Hospital", url: "https://www.magruderhospital.com/", description: "Community hospital in Port Clinton serving Ottawa County." },
  { name: "Ottawa County Health Department", category: "Health", subcategory: "Public Health", url: "https://ottawahealth.org/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  // ---------- Recreation & Tourism ----------
  { name: "Shores & Islands Ohio", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.shoresandislands.com/", description: "Regional tourism bureau — Lake Erie islands (Put-in-Bay), Marblehead, Catawba, and Port Clinton." },
  // ---------- News & Media ----------
  { name: "Port Clinton News Herald", category: "News & Media", subcategory: "Newspaper", url: "https://www.portclintonnewsherald.com/", description: "Ottawa County's newspaper covering local news, sports, and events." },
];
