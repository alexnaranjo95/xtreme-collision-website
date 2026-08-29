export const site = {
  name: "Xtreme Collision",
  phone: "(972) 233-0207",
  phoneHref: "tel:+19722330207",
  address: "2025 Midway Road, Suite E, Carrollton, TX 75006",
  areas: "Carrollton, Addison, Dallas, Plano, Frisco, Richardson",
  url: "https://www.xtremecollision.com",
  social: {
    facebook: "https://www.facebook.com/XtremeCollisionRepair",
    instagram: "https://www.instagram.com/xtreme_collision/",
    yelp: "https://www.yelp.com/biz/xtreme-collision-repair-carrollton",
    google:
      "https://www.google.com/maps/place/Xtreme+Collision+Repair/@32.9633531,-96.8396963,17z/data=!3m1!4b1!4m6!3m5!1s0x864c26b5a094dbe9:0x42382e7dabddf069!8m2!3d32.9633531!4d-96.8396963!16s%2Fg%2F1tf081k2",
    googleShare: "https://share.google/m0UgtxT4sFpzhDMIs",
  },
  hours: [
    { day: "Mon", hours: "8:00am - 5:30pm" },
    { day: "Tue", hours: "8:00am - 5:30pm" },
    { day: "Wed", hours: "8:00am - 5:30pm" },
    { day: "Thu", hours: "8:00am - 5:30pm" },
    { day: "Fri", hours: "8:00am - 12:00pm" },
    { day: "Sat", hours: "Closed" },
    { day: "Sun", hours: "Closed" },
  ],
} as const;

/**
 * Tractable's hosted photo-estimate flow. It opens in a new tab on purpose:
 * the flow collects a phone number and texts an upload link, so its SMS consent
 * stays on tractable.io rather than adding a second opt-in path to this domain
 * (see /chat, which is the only SMS opt-in we register for A2P).
 */
export const instantQuoteUrl =
  "https://xtremecollision.auto.us.tractable.io/landing-page/065d729a-e7b6-4e74-9fab-f5248497b9d4";

/** Write-only endpoint for quote-click attribution (Cloudflare Worker + D1). */
export const quoteClickEndpoint = "https://track.xtremecollision.com/";

export const instantQuoteSteps = [
  {
    step: "01",
    title: "Tell Us How to Reach You",
    description:
      "Enter your name, email, and mobile number. We text you a secure link — there is no app to download.",
    icon: "message",
  },
  {
    step: "02",
    title: "Photograph the Damage",
    description:
      "The link walks you through the exact photos our estimators need, straight from your phone camera.",
    icon: "camera",
  },
  {
    step: "03",
    title: "Get Your Quote and a Call Back",
    description:
      "You get an initial repair quote in minutes, then our team reviews it and follows up during business hours.",
    icon: "clipboard",
  },
] as const;

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/hail-damage-repair", label: "Hail Repair" },
  { href: "/mechanical-repair", label: "Mechanical" },
  { href: "/#insurance", label: "Insurance" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#estimate", label: "Free Estimate" },
] as const;

export const certLogos = [
  { src: "/images/cert-ford.png", alt: "Ford Certified Collision Center" },
  {
    src: "/images/cert-honda-acura.jpg",
    alt: "Honda Acura ProFirst Certified Collision Center",
  },
  { src: "/images/cert-infiniti.jpg", alt: "Infiniti Certified Collision Center" },
  { src: "/images/cert-kia.png", alt: "Kia Certified Collision Center" },
  { src: "/images/cert-hyundai.png", alt: "Hyundai Certified Collision Center" },
  { src: "/images/cert-nissan.png", alt: "Nissan Certified Collision Repair" },
  { src: "/images/cert-subaru.jpg", alt: "Subaru Certified Collision Center" },
  { src: "/images/cert-jeep.png", alt: "Jeep Certified Collision Center" },
] as const;

export const insurers = [
  { src: "/images/insurers/state-farm.png", alt: "State Farm logo" },
  { src: "/images/insurers/geico.png", alt: "GEICO logo" },
  { src: "/images/insurers/progressive.png", alt: "Progressive logo" },
  { src: "/images/insurers/allstate.png", alt: "Allstate logo" },
  { src: "/images/insurers/usaa.png", alt: "USAA logo" },
  { src: "/images/insurers/farmers.png", alt: "Farmers Insurance logo" },
  { src: "/images/insurers/liberty-mutual.png", alt: "Liberty Mutual logo" },
  { src: "/images/insurers/nationwide.png", alt: "Nationwide logo" },
] as const;

export const services = [
  {
    title: "Hail Damage & Paintless Dent Repair",
    description:
      "From minor dings to extensive hail damage, we restore your vehicle to its original condition using paintless dent repair.",
    icon: "cloud-hail",
  },
  {
    title: "Dents & Scratches Repair",
    description:
      "Comprehensive dent and scratch repair that erases all traces of dings and scratches.",
    icon: "spray-can",
  },
  {
    title: "Insurance Claims Assistance",
    description:
      "We work with ALL major insurance companies and fight to return your vehicle to its pre-accident condition.",
    icon: "file-check",
  },
  {
    title: "Auto Frame Repair",
    description:
      "Frame straightening machines paired with industry-leading certified technicians for precise results.",
    icon: "frame",
  },
  {
    title: "Auto Unibody Repair",
    description:
      "Expert unibody repair that restores structural integrity and the original glory of your vehicle.",
    icon: "boxes",
  },
  {
    title: "Airbag Services & Repair",
    description:
      "Your airbag is a safety system — our certified technicians make sure it works when you need it most.",
    icon: "shield-alert",
  },
  {
    title: "Computerized Frame & Unibody Measuring",
    description:
      "Our computerized frame straightening system ensures your vehicle's frame is properly aligned.",
    icon: "ruler",
  },
  {
    title: "Electrical Wiring Repair",
    description:
      "Dead battery? Misfiring starter or alternator? We handle all of your auto electrical repair needs.",
    icon: "cable",
  },
  {
    title: "Steering & Suspension Repair",
    description:
      "Accurate steering response and a well-maintained suspension keep your wheels planted firmly on the road.",
    icon: "cog",
  },
  {
    title: "Rental Car Scheduling",
    description:
      "We arrange a rental car through our partnerships while we repair your vehicle.",
    icon: "car",
  },
  {
    title: "Sherwin Williams Certified Color Matching",
    description:
      "Certified color matching for a flawless, factory-perfect finish on every repair.",
    icon: "palette",
  },
] as const;

export const mechanicalServices = [
  {
    id: "engine-repair",
    title: "Engine Repair & Diagnostics",
    description:
      "From check-engine lights to major engine work, we diagnose the issue accurately and get you back on the road with confidence.",
    icon: "gauge",
  },
  {
    id: "transmission-repair",
    title: "Transmission Repair",
    description:
      "Slipping gears, hard shifts, or fluid leaks — our technicians service and repair automatic and manual transmissions.",
    icon: "settings",
  },
  {
    id: "brake-repair",
    title: "Brake Repair & Service",
    description:
      "Pads, rotors, calipers, and brake fluid flushes to keep your stopping power strong and your vehicle safe.",
    icon: "disc",
  },
  {
    id: "oil-change",
    title: "Oil Changes & Maintenance",
    description:
      "Routine oil changes, filter replacements, and scheduled maintenance that protect your engine and extend vehicle life.",
    icon: "droplets",
  },
  {
    id: "cooling-system",
    title: "Cooling System Repair",
    description:
      "Radiators, water pumps, hoses, and thermostat work to stop overheating before it becomes a costly engine failure.",
    icon: "thermometer",
  },
  {
    id: "ac-heating",
    title: "AC & Heating Service",
    description:
      "Weak airflow, warm A/C, or heater issues — we recharge, diagnose, and repair climate-control systems year-round.",
    icon: "snowflake",
  },
] as const;

/** Landing URL for mechanical-repair ad groups */
export const mechanicalRepairPath = "/mechanical-repair";

/** Landing URL for hail-damage ad groups */
export const hailRepairPath = "/hail-damage-repair";

/**
 * Towns the hail campaigns target. `zip` mirrors the postal code targeted in
 * Google Ads, so geo targeting and landing copy cannot drift apart.
 */
export const hailCities = [
  { slug: "keller-tx", city: "Keller", zip: "76244", county: "Tarrant County" },
  { slug: "haslet-tx", city: "Haslet", zip: "76052", county: "Tarrant County" },
  { slug: "roanoke-tx", city: "Roanoke", zip: "76262", county: "Denton County" },
  { slug: "justin-tx", city: "Justin", zip: "76247", county: "Denton County" },
  { slug: "aurora-tx", city: "Aurora", zip: "76078", county: "Wise County" },
] as const;

export type HailCity = (typeof hailCities)[number];

export function findHailCity(slug: string): HailCity | undefined {
  return hailCities.find((entry) => entry.slug === slug);
}

const cityListFormatter = new Intl.ListFormat("en-US", {
  style: "long",
  type: "conjunction",
});

export function joinCityNames(
  cities: readonly HailCity[] = hailCities,
): string {
  return cityListFormatter.format(cities.map((entry) => entry.city));
}

export const hailClaimSteps = [
  {
    step: "01",
    title: "Free Hail Inspection",
    description:
      "We document every dent — roof, hood, panels, and glass — so nothing is left off the estimate when the claim gets written.",
    icon: "search",
  },
  {
    step: "02",
    title: "We Handle the Claim",
    description:
      "We work your estimate and any supplements directly with your adjuster. You don't chase paperwork or argue over line items.",
    icon: "file-check",
  },
  {
    step: "03",
    title: "Rental Arranged Before You Leave",
    description:
      "We set up your insurance-paid rental through our partners at drop-off, so you drive home the same day instead of waiting on a ride.",
    icon: "car",
  },
  {
    step: "04",
    title: "Paintless Repair, Factory Finish",
    description:
      "Most hail dents come out with paintless dent repair — no filler, no repaint, and your original factory paint stays intact.",
    icon: "sparkles",
  },
] as const;

export const hailAssurances = [
  {
    title: "Your Factory Paint Stays On",
    description:
      "Paintless dent repair works the metal back from behind the panel. No sanding, no repainting, no mismatched panels later.",
    icon: "sparkles",
  },
  {
    title: "Insurance-Paid Rental",
    description:
      "We coordinate the rental through our partners and bill it to the claim when your policy carries rental coverage.",
    icon: "car",
  },
  {
    title: "All Major Carriers",
    description:
      "State Farm, GEICO, Progressive, Allstate, USAA, Farmers, Liberty Mutual, Nationwide — we bill them directly.",
    icon: "handshake",
  },
  {
    title: "Lifetime Limited Warranty",
    description:
      "Every hail repair we perform is backed by our lifetime limited warranty for as long as you own the vehicle.",
    icon: "badge-check",
  },
] as const;

/**
 * Hail FAQs, built per town so each landing page answers the questions a
 * driver in that specific town actually asks.
 */
export function buildHailFaqs(city: HailCity | null) {
  const where = city ? `${city.city}, TX` : "North Texas";
  const zipNote = city ? ` (${city.zip})` : "";

  return [
    {
      question: `Do you repair hail damage for ${where} drivers?`,
      answer: `Yes. ${where}${zipNote} is inside the area we serve. Repairs are completed at our Carrollton facility at ${site.address}, and we arrange your insurance-paid rental at drop-off so the drive over costs you nothing but the trip.`,
    },
    {
      question: "Will filing a hail claim raise my rates?",
      answer:
        "Hail is a comprehensive, no-fault weather claim — it is not an at-fault accident. Most carriers treat it very differently than a collision. Your agent can confirm the specifics of your policy, and we are happy to walk through the estimate with you either way.",
    },
    {
      question: "What will I pay out of pocket?",
      answer:
        "Typically just your comprehensive deductible. We bill the balance directly to your insurer, and your written estimate is free with no obligation to book the repair.",
    },
    {
      question: "How long does hail repair take?",
      answer:
        "Light hail handled with paintless dent repair often turns around in a few days. Heavy hail with panel replacement or glass takes longer. You get a realistic timeline in writing before we start, not after.",
    },
    {
      question: "Is paintless dent repair better than a repaint?",
      answer:
        "For hail, almost always. Paintless dent repair keeps your original factory finish, which protects resale value and avoids the color-match and overspray problems that come with repainting panels. When damage is too deep for PDR, we tell you and use our Sherwin Williams certified color matching instead.",
    },
    {
      question: "Do you handle hail-damaged glass and windshields?",
      answer:
        "Yes. Cracked and pitted glass is part of the same claim, so we inspect the windshield and all glass alongside the body panels and include it in one estimate.",
    },
  ];
}

export const processSteps = [
  {
    step: "01",
    title: "Contact Us",
    description:
      "Call or request your free estimate online. We answer fast and walk you through your options — no obligation.",
    icon: "phone-call",
  },
  {
    step: "02",
    title: "We Handle the Claim",
    description:
      "We inspect the damage, work directly with your insurance adjuster, and arrange a rental car so you're never stuck.",
    icon: "clipboard-list",
  },
  {
    step: "03",
    title: "Drive Away Restored",
    description:
      "Our factory-trained technicians return your vehicle to pre-accident condition, backed by our lifetime limited warranty.",
    icon: "car",
  },
] as const;

export const insuranceBenefits = [
  "We work directly with your insurance adjuster",
  "Free, no-obligation repair estimates",
  "Help filing and managing your claim",
  "OEM parts to restore factory standards",
  "Lifetime limited warranty on our repairs",
  "Rental car coordination during your repair",
] as const;

export const whyUs = [
  {
    title: "Lifetime Limited Warranty",
    description:
      "Every repair is backed by our lifetime limited warranty for total peace of mind.",
    icon: "badge-check",
  },
  {
    title: "State-of-the-Art Facility",
    description:
      "Modern equipment and computerized measuring deliver factory-standard results.",
    icon: "wrench",
  },
  {
    title: "Factory-Trained Technicians",
    description:
      "Expert, certified technicians diagnose and repair your car, truck, or SUV the right way.",
    icon: "award",
  },
] as const;

export const socialProof = {
  google: {
    rating: "4.8",
    reviewCount: "1,168",
    reviewCountRaw: 1168,
    label: "Google",
    href: "https://share.google/m0UgtxT4sFpzhDMIs",
  },
  yelp: {
    rating: "4.4",
    reviewCount: "153",
    reviewCountRaw: 153,
    label: "Yelp",
    href: "https://www.yelp.com/biz/xtreme-collision-repair-carrollton",
  },
  facebook: {
    rating: "98%",
    reviewCount: "45",
    reviewCountRaw: 45,
    label: "Facebook recommend",
    href: "https://www.facebook.com/XtremeCollisionRepair",
  },
} as const;

export const reviews = [
  {
    quote:
      "Great communication, work done quickly, excellent staff and great work done.",
    author: "db",
    source: "Google",
    rating: 5,
  },
  {
    quote: "Quality work, great service, would highly recommend!",
    author: "Ayesha Smith",
    source: "Google",
    rating: 5,
  },
  {
    quote: "Nice group of people that run the place too.",
    author: "Mark",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Brock was amazing, he explained the process, showed me different estimates of what to expect and just overall made the experience great.",
    author: "Yelp Customer",
    source: "Yelp",
    rating: 5,
  },
  {
    quote: "Work was excellent on a rear bumper paint job for a mint E39.",
    author: "BMW Owner",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "The repair followed GM standards, used OEM parts, and the process was smooth.",
    author: "GM Owner",
    source: "Google",
    rating: 5,
  },
] as const;

export const stats = [
  { value: "4.8★", label: "Google Rating" },
  { value: "1,168+", label: "Google Reviews" },
  { value: "153+", label: "Yelp Reviews" },
  { value: "98%", label: "Facebook Recommend" },
] as const;
