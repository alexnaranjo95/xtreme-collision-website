import type { HailLocationData } from "@/lib/hail";
import type { LocationContact } from "@/lib/site";

export const phoenixPath = "/hail-damage-repair-phoenix-az";

/** Canonical URL for the Phoenix ad landing page. */
export const phoenixPageUrl = `https://www.xtremecollision.com${phoenixPath}`;

/**
 * PHONE PLACEHOLDER — a dedicated Phoenix/Arizona number is being registered in
 * GoHighLevel. Until it is provisioned, calls route to the main Texas line so
 * no lead is dropped.
 */
export const phoenix: LocationContact = {
  label: "Phoenix, AZ",
  phone: "(972) 233-0207",
  phoneHref: "tel:+19722330207",
  address: "Phoenix, AZ 85021",
  areas: "Phoenix, Glendale, Peoria, Scottsdale, Tempe & the Valley",
  hours: [
    { day: "Mon", hours: "8:00am - 5:30pm" },
    { day: "Tue", hours: "8:00am - 5:30pm" },
    { day: "Wed", hours: "8:00am - 5:30pm" },
    { day: "Thu", hours: "8:00am - 5:30pm" },
    { day: "Fri", hours: "8:00am - 5:30pm" },
    { day: "Sat", hours: "Closed" },
    { day: "Sun", hours: "Closed" },
  ],
  homeHref: phoenixPath,
  estimateHref: "#estimate",
  navLinks: [
    { href: "#storms", label: "The Oct 21 Storm" },
    { href: "#mobile", label: "Mobile Service" },
    { href: "#claims", label: "Insurance Claims" },
    { href: "#faq", label: "FAQ" },
    { href: "#estimate", label: "Free Inspection" },
  ],
  tagline:
    "Hail damage repair and paintless dent repair for Phoenix, Glendale, Peoria, and the Valley of the Sun.",
  showSocialLinks: false,
  otherLocations: [],
};

/**
 * FORM PLACEHOLDER — a dedicated Phoenix form is being created in GoHighLevel.
 * Until its ID is available, this falls back to the Utah form so the page still
 * captures leads.
 */
export const phoenixEstimateForm = {
  id: "gwbDGcC7XpRzinMUtaLG",
  name: "Xtreme Collision — Free Estimate - Utah",
  height: 878,
  cookieConsent: true,
} as const;

/** Service-area operation — the page is anchored to the storm zone (N Phoenix). */
export const phoenixGeo = { latitude: 33.6048, longitude: -112.1168 } as const;

export const phoenixServiceAreaCities = [
  "Phoenix",
  "Glendale",
  "Peoria",
  "Scottsdale",
  "Tempe",
  "Mesa",
  "Surprise",
  "Chandler",
  "Gilbert",
  "Sun City",
  "Avondale",
  "Goodyear",
] as const;

export const phoenixHailData: HailLocationData = {
  location: phoenix,
  address: {
    streetAddress: "",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85021",
    addressCountry: "US",
  },
  geo: phoenixGeo,
  pageUrl: phoenixPageUrl,
  estimateForm: phoenixEstimateForm,

  hero: {
    countyName: "the Valley",
    locatorLine: "Serving Phoenix, Glendale, Peoria & the Valley of the Sun",
    heading: "Hail Damage Repair in Phoenix, AZ",
    body: "The October 21 storm left golf ball-size dents and shattered glass across north Phoenix and the west Valley. Our mobile unit comes to you for a free inspection, and paintless dent repair keeps your factory paint — while we handle the insurance claim from start to finish.",
    trustLine:
      "Lifetime limited warranty · All major insurance · Free mobile inspections",
    areas: "Phoenix metro & the Valley",
    image: "/images/hail-paintless-dent-repair-clearfield-ut.webp",
  },

  storms: {
    eyebrow: "Phoenix Hail Report",
    heading: "The October 21 Storm Left Thousands of Cars Damaged",
    intro:
      "Two supercell thunderstorms swept the Valley on Wednesday, October 21, 2026 — smashing windshields and denting cars with golf ball-size hail. If your car was parked outside, it's worth a free look.",
    sources:
      "Sources: National Weather Service Phoenix, FOX 10 Phoenix, AZFamily (KTVK/KPHO), KTAR News, and KGUN 9 storm coverage.",
    stats: [
      { value: "2.5\"", label: "Largest hail stones reported over the Phoenix metro on Oct 21" },
      { value: "60–70", label: "MPH wind gusts measured during the storm" },
      { value: "3:30pm", label: "When heavy hail hit the North Mountain area on Oct 21" },
      { value: "50,000+", label: "Vehicles estimated damaged across the region" },
    ],
    events: [
      {
        date: "Oct 21, 2026",
        title: "Golf ball-size hail over north Phoenix",
        detail:
          "Golf ball-size hail pounded the North Mountain area around 3:30 p.m., breaking windows and denting cars. FOX 10 and AZFamily documented shattered windshields and dented hoods across north Phoenix and Glendale.",
      },
      {
        date: "Oct 21, 2026",
        title: "Destructive hail warning for the Valley",
        detail:
          "The National Weather Service issued a severe thunderstorm warning for destructive baseball-size hail as two supercells tracked across the metro, with winds up to 70 mph.",
      },
      {
        date: "Oct 21, 2026",
        title: "West Valley hit in Glendale & Peoria",
        detail:
          "A second storm rolled through Glendale, Peoria, and the west Valley with hail up to 2 inches near Surprise, per NWS storm reports.",
      },
      {
        date: "Oct 21, 2026",
        title: "Hail in Tempe & Mesa too",
        detail:
          "Storms brought rain and hail to Tempe, Mesa, and other East Valley communities the same evening, with heavy hail slamming cars and homes.",
      },
    ],
  },

  mobile: {
    intro:
      "After a storm like October 21, nobody wants to wait weeks for a body shop. Our mobile hail unit comes to your home or work anywhere in the Phoenix metro for a free, no-obligation inspection.",
    steps: [
      {
        title: "We come to you",
        description:
          "Our mobile unit meets you at home or work across Phoenix, Glendale, Peoria, Scottsdale, Tempe, and the surrounding Valley — no time off to sit at a shop.",
        icon: "truck",
      },
      {
        title: "Dent-by-dent inspection",
        description:
          "A hail technician maps every dent under PDR lighting and photographs the damage for your insurance claim.",
        icon: "search",
      },
      {
        title: "Repair your way",
        description:
          "Qualifying light damage can be repaired on-site. Heavier hail goes to our nearest repair facility, all under the same claim.",
        icon: "wrench",
      },
    ],
    serviceAreaCities: phoenixServiceAreaCities,
  },

  damageGuide: {
    intro:
      "Hail dents are easy to miss in bright Arizona sun. Here's what to look for — and what different hail sizes usually do to a vehicle.",
    hailSizes: [
      { name: "Pea", size: '¼"', px: 10, impact: "Usually cosmetic — check glass and trim." },
      { name: "Quarter", size: '1"', px: 22, impact: "NWS severe threshold. Dents on hood, roof, and trunk." },
      { name: "Ping pong", size: '1½"', px: 32, impact: "Deep, widespread dents. Cracked lights and mirrors possible." },
      { name: "Golf ball", size: '1¾"', px: 38, impact: "Heavy panel damage, glass breakage, and paint cracks — the size that hit north Phoenix." },
      { name: "Baseball", size: '2¾"', px: 58, impact: "Severe damage — some panels may need replacement." },
    ],
    checks: [
      {
        title: "Start with the roof, hood & trunk",
        description:
          "Hail falls straight down, so horizontal panels take the worst of it. Most of the dents on a hail car are up top.",
      },
      {
        title: "Look at the panels at an angle",
        description:
          "Small dents hide in direct sun. Check in the shade or at dusk and watch for warped reflections in the paint.",
      },
      {
        title: "Check rails, mirrors & trim",
        description:
          "Roof rails, mirror caps, and moldings dent easily and are often missed on quick drive-through inspections.",
      },
      {
        title: "Inspect glass, lights & sunroof",
        description:
          "Chips and cracks spread with Arizona's heat swings. Glass damage is usually part of the same hail claim.",
      },
    ],
  },

  pdr: {
    benefits: [
      "Keeps your factory paint — no sanding, filler, or repainting",
      "Most hail cars are done in days, not weeks",
      "Protects resale and trade-in value",
      "Insurance-approved method for hail damage",
    ],
    images: {
      hero: "/images/hail-paintless-dent-repair-clearfield-ut.webp",
      secondary: "/images/hail-damage-panel-repair-clearfield-ut.webp",
    },
  },

  claims: {
    steps: [
      {
        title: "Note the storm date",
        description:
          "The October 21 storm is your date of loss. Snap a few photos if it's safe — your insurer will ask.",
      },
      {
        title: "Get a free hail inspection",
        description:
          "We'll come to you anywhere in the Valley. You'll get a written estimate of every dent before you file.",
      },
      {
        title: "Open a comprehensive claim",
        description:
          "Call your insurer or we'll help you file. Tell them Xtreme Collision is your repair shop of choice.",
      },
      {
        title: "We work with your adjuster",
        description:
          "We send the estimate, meet the adjuster, and submit supplements for hidden damage found during the repair.",
      },
      {
        title: "Drive away restored",
        description:
          "Paintless dent repair restores the factory finish, backed by our lifetime limited warranty. We'll help line up a rental.",
      },
    ],
    insurancePoints: [
      {
        title: "Hail is a comprehensive claim",
        description:
          "Hail falls under comprehensive coverage, not collision — it isn't treated as an at-fault accident.",
      },
      {
        title: "You choose the shop in Arizona",
        description:
          "Arizona insurance rules don't let your insurer require you to use a specific repair shop. Their preferred list is a suggestion, not a rule.",
      },
      {
        title: "Storm-chaser claims get scrutinized",
        description:
          "Out-of-state storm chasers can vanish after the season. We're a real, warrantied shop that stands behind every repair.",
      },
    ],
  },

  trust: {
    intro:
      "The National Insurance Crime Bureau warns drivers about out-of-town contractors who show up after hailstorms. Here's why Valley drivers choose us instead.",
    points: [
      {
        title: "Here for the whole Valley",
        description:
          "Storm chasers set up in parking lots and leave after the season. Our Phoenix-area operation and warranty stay put long after the October 21 storm is old news.",
        icon: "building",
      },
      {
        title: "Ready for monsoon season",
        description:
          "Monsoon supercells build fast over the Valley. Our mobile unit is staged locally, so inspections start the day the hail stops — not when an out-of-town crew rolls in.",
        icon: "cloud-hail",
      },
      {
        title: "Lifetime limited warranty",
        description:
          "Every hail repair is backed by our lifetime limited warranty, honored across the Valley.",
        icon: "badge-check",
      },
    ],
  },

  nearby: {
    intro:
      "From Glendale to Mesa, our mobile hail unit covers the whole Valley — and comes straight to your driveway.",
    stateSuffix: "AZ",
    areas: [
      { city: "North Phoenix", lat: 33.6048, lng: -112.1168, note: "Ground zero for the Oct 21 golf ball-size hail near North Mountain." },
      { city: "Glendale", lat: 33.5387, lng: -112.186, note: "Pounded by the west Valley supercell the evening of Oct 21." },
      { city: "Peoria", lat: 33.5806, lng: -112.2374, note: "In the path of the Oct 21 west Valley hailstorm." },
      { city: "Surprise", lat: 33.6292, lng: -112.3679, note: "NWS reported hail up to 2 inches nearby on Oct 21." },
      { city: "Scottsdale", lat: 33.4942, lng: -111.9261, note: "Storms tracked east across the metro into the East Valley." },
      { city: "Tempe", lat: 33.4255, lng: -111.94, note: "Hail and heavy rain reported the evening of Oct 21." },
      { city: "Mesa", lat: 33.4152, lng: -111.8315, note: "Caught by the same evening storm system on Oct 21." },
      { city: "Sun City", lat: 33.5975, lng: -112.2718, note: "Close to the Oct 21 hail swath across the northwest Valley." },
      { city: "Chandler", lat: 33.3062, lng: -111.8413, note: "Mobile inspections available across the southeast Valley." },
    ],
  },

  faq: {
    heading: "Questions Phoenix Drivers Ask",
    items: [
      {
        question: "Does car insurance cover hail damage in Arizona?",
        answer:
          "Yes, if you carry comprehensive coverage. Hail is a comprehensive claim, so you pay your comprehensive deductible and your insurer covers the rest of the approved repair. Liability-only policies don't cover hail damage to your own vehicle.",
      },
      {
        question: "Will a hail claim raise my insurance rates?",
        answer:
          "Hail is a not-at-fault, comprehensive claim, and many insurers treat weather losses differently than at-fault accidents. Rate practices vary by company, so ask your agent — but don't let worry about rates leave hail damage unrepaired.",
      },
      {
        question: "Do I have to use my insurance company's preferred shop?",
        answer:
          "No. Under Arizona's insurance rules, your insurer can't require you to use a specific repair shop. Tell your adjuster you'd like Xtreme Collision to do the work and we'll coordinate directly with them.",
      },
      {
        question: "How soon after the October 21 storm should I file?",
        answer:
          "As soon as you can. Most policies require prompt notice of a loss, and filing early gets you to the front of the line before Valley shops and adjusters book up after a big storm.",
      },
      {
        question: "Can your mobile unit come to my home or work?",
        answer:
          "Yes. Our mobile unit does free hail inspections at homes and workplaces across Phoenix, Glendale, Peoria, Scottsdale, Tempe, Mesa, and the surrounding Valley. Light damage can often be repaired on-site.",
      },
      {
        question: "What is paintless dent repair (PDR)?",
        answer:
          "PDR is a technique where trained technicians use specialized rods and lighting to massage dents out from behind the panel. Because there's no sanding, filler, or repainting, your factory paint stays intact and repairs are much faster than conventional bodywork.",
      },
      {
        question: "Is it worth fixing small hail dents?",
        answer:
          "Usually, yes. Unrepaired hail damage lowers trade-in value, small paint cracks can lead to rust, and insurers may exclude panels with prior unrepaired damage from a future claim.",
      },
      {
        question: "Do you handle hail-damaged glass and windshields?",
        answer:
          "Yes. The October 21 storm shattered windshields and windows across the Valley. Cracked and pitted glass is part of the same claim, so we inspect all glass alongside the body panels and include it in one estimate.",
      },
    ],
  },

  cta: {
    heading: "Caught in the October 21 Storm?",
    subheading:
      "Book a free hail inspection before Valley shops and adjusters fill up. We'll come to you anywhere from Glendale to Mesa.",
  },

  estimate: {
    eyebrow: "Free Hail Inspection",
    heading: "Book Your Free Hail Inspection",
    description:
      "Tell us about your vehicle and where you'd like us to meet you. We'll confirm a time for an inspection at your home or work anywhere in the Phoenix metro.",
  },
};
