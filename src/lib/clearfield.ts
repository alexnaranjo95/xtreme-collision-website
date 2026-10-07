import type { LocationContact } from "@/lib/site";

export const clearfieldPath = "/hail-damage-repair-clearfield-ut";

/** The subdomain root rewrites to `clearfieldPath` (see next.config.ts). */
export const clearfieldHost = "clearfield.xtremecollision.com";

/** Canonical URL; switch to `https://${clearfieldHost}/` once the subdomain's DNS is live. */
export const clearfieldPageUrl = `https://www.xtremecollision.com${clearfieldPath}`;

/** Umbrella host for Utah pages; its root shows the Clearfield page until a Utah hub exists. */
export const utahHost = "utah.xtremecollision.com";

/**
 * Must match the Google Business Profile exactly (name, address, phone, hours).
 * Hours are placeholders until the staffed hours are confirmed.
 */
export const clearfield = {
  label: "Clearfield, UT",
  phone: "(385) 342-3200",
  phoneHref: "tel:+13853423200",
  address: "665 N Main St, Clearfield, UT 84015",
  areas: "Clearfield, Layton, Syracuse, Clinton, Roy, Kaysville & Ogden",
  hours: [
    { day: "Mon", hours: "8:00am - 6:00pm" },
    { day: "Tue", hours: "8:00am - 6:00pm" },
    { day: "Wed", hours: "8:00am - 6:00pm" },
    { day: "Thu", hours: "8:00am - 6:00pm" },
    { day: "Fri", hours: "8:00am - 6:00pm" },
    { day: "Sat", hours: "9:00am - 2:00pm" },
    { day: "Sun", hours: "Closed" },
  ],
  homeHref: clearfieldPath,
  estimateHref: "#estimate",
  navLinks: [
    { href: "#storms", label: "Recent Storms" },
    { href: "#mobile", label: "Mobile Service" },
    { href: "#claims", label: "Insurance Claims" },
    { href: "#faq", label: "FAQ" },
    { href: "#estimate", label: "Free Inspection" },
  ],
  mapEmbedSrc:
    "https://www.google.com/maps?q=665+N+Main+St,+Clearfield,+UT+84015&z=15&output=embed",
  tagline:
    "Hail damage and paintless dent repair for Clearfield, Davis County, and the north Wasatch Front.",
  showSocialLinks: false,
  otherLocations: [],
} satisfies LocationContact;

export const clearfieldEstimateForm = {
  id: "gwbDGcC7XpRzinMUtaLG",
  name: "Xtreme Collision — Free Estimate - Utah",
  height: 878,
  cookieConsent: true,
} as const;

export const clearfieldAddress = {
  streetAddress: "665 N Main St",
  addressLocality: "Clearfield",
  addressRegion: "UT",
  postalCode: "84015",
  addressCountry: "US",
} as const;

export const clearfieldGeo = { latitude: 41.12338, longitude: -112.02613 } as const;

export const clearfieldDirectionsHref =
  "https://www.google.com/maps/dir/?api=1&destination=665+N+Main+St,+Clearfield,+UT+84015";

export const serviceAreaCities = [
  "Clearfield",
  "Layton",
  "Syracuse",
  "Clinton",
  "Sunset",
  "Roy",
  "West Point",
  "Kaysville",
  "Fruit Heights",
  "Farmington",
  "South Weber",
  "Riverdale",
  "Hooper",
  "Ogden",
  "Centerville",
  "Bountiful",
] as const;

export const nearbyAreas = [
  { city: "Clearfield", lat: 41.1108, lng: -112.0261, note: "Home base at 665 N Main St — stop in or we come to you." },
  { city: "Layton", lat: 41.0602, lng: -111.9711, note: "Under the Sept 18, 2026 tornado warning and its large-hail storm." },
  { city: "Kaysville", lat: 41.0352, lng: -111.9385, note: "Named in the Sept 18, 2026 half-dollar hail warning." },
  { city: "Syracuse", lat: 41.0894, lng: -112.0647, note: "Named in the Apr 11, 2026 quarter-size hail warning." },
  { city: "Clinton", lat: 41.1397, lng: -112.0505, note: "Named in the Apr 11, 2026 quarter-size hail warning." },
  { city: "Roy", lat: 41.1616, lng: -112.0263, note: "Named in the Apr 11, 2026 quarter-size hail warning." },
  { city: "Sunset", lat: 41.1364, lng: -112.0311, note: "Just up Main St — mobile inspections at home or work." },
  { city: "South Weber", lat: 41.1324, lng: -111.9302, note: "Named in the Sept 18, 2026 half-dollar hail warning." },
  { city: "Ogden", lat: 41.223, lng: -111.9738, note: "Named in the Sept 18 and Apr 11, 2026 hail warnings." },
] as const;

export const hailStats = [
  { value: "19", label: "Severe weather warnings near Clearfield in the past 12 months" },
  { value: "18", label: "Times Doppler radar has detected hail at or near Clearfield" },
  { value: '1¾"', label: "Golf ball-size hail reported in Davis County on Sept 18, 2026" },
  { value: "Aug–Sep", label: "Clearfield's busiest months for severe-storm warnings" },
] as const;

export const recentStorms = [
  {
    date: "Sept 18, 2026",
    title: "Tornado + golf ball-size hail",
    detail:
      "A tornado touched down in the mountains above Fruit Heights as golf ball-size hail was reported across Davis County. NWS warnings named Hill AFB, Layton, and Kaysville and said damage to vehicles was expected.",
  },
  {
    date: "Aug 29, 2026",
    title: "Quarter-size hail + 60 mph gusts",
    detail:
      "A fast line of storms crossed Salt Lake and Davis counties at 45 mph. The National Weather Service warned that hail damage to vehicles was expected.",
  },
  {
    date: "Apr 11, 2026",
    title: "Early-season hail across north Davis County",
    detail:
      "A severe thunderstorm warning covered Clearfield, Hill AFB, Layton, Roy, Syracuse, and Clinton with quarter-size hail along I-15.",
  },
  {
    date: "Jul 4, 2025",
    title: "Holiday storm over Kaysville and Farmington",
    detail:
      "Quarter-size hail and 60 mph winds swept northeastern Davis County on the Fourth of July.",
  },
] as const;

export const hailSizes = [
  { name: "Pea", size: '¼"', px: 10, impact: "Usually cosmetic — check glass and trim." },
  { name: "Quarter", size: '1"', px: 22, impact: "NWS severe threshold. Dents on hood, roof, and trunk." },
  { name: "Ping pong", size: '1½"', px: 32, impact: "Deep, widespread dents. Cracked lights and mirrors possible." },
  { name: "Golf ball", size: '1¾"', px: 38, impact: "Heavy panel damage, glass breakage, and paint cracks." },
  { name: "Egg", size: '2"', px: 44, impact: "Severe damage — some panels may need replacement." },
] as const;

export const damageChecks = [
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
      "Chips and cracks spread with Utah's temperature swings. Glass damage is usually part of the same hail claim.",
  },
] as const;

export const pdrBenefits = [
  "Keeps your factory paint — no sanding, filler, or repainting",
  "Most hail cars are done in days, not weeks",
  "Protects resale and trade-in value",
  "Insurance-approved method for hail damage",
] as const;

export const mobileSteps = [
  {
    title: "We come to you",
    description:
      "Our mobile unit meets you at home or work anywhere in Davis and Weber counties — no taking time off to sit at a shop.",
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
      "Qualifying light damage can be repaired on-site. Heavier hail goes to our Clearfield location at 665 N Main St.",
    icon: "wrench",
  },
] as const;

export const claimSteps = [
  {
    title: "Note the storm date",
    description:
      "Write down when the hail hit and, if it's safe, snap a few photos. Your insurer will ask for the date of loss.",
  },
  {
    title: "Get a free hail inspection",
    description:
      "Stop by 665 N Main St or have our mobile unit come to you. You'll get a written estimate of every dent.",
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
] as const;

export const hailInsurancePoints = [
  {
    title: "Hail is a comprehensive claim",
    description:
      "Hail falls under comprehensive coverage, not collision — it isn't treated as an at-fault accident.",
  },
  {
    title: "You choose the shop in Utah",
    description:
      "Utah insurance rules don't let your insurer require you to use a specific repair shop. Their preferred list is a suggestion.",
  },
  {
    title: "Hill AFB & military families",
    description:
      "We work with USAA and every major carrier, so service members and civilians at Hill get the same easy claim process.",
  },
] as const;

export const hailTrustPoints = [
  {
    title: "A real local address",
    description:
      "Storm chasers set up in parking lots and leave after the season. Our Clearfield location and Google Business Profile stay put — and so does your warranty.",
    icon: "building",
  },
  {
    title: "Ready for Wasatch Front storms",
    description:
      "Summer storms build over the Great Salt Lake and hit north Davis County fast. We're based in Clearfield, so inspections start the day the hail stops — not when an out-of-town crew rolls in.",
    icon: "cloud-hail",
  },
  {
    title: "Lifetime limited warranty",
    description:
      "Every hail repair is backed by our lifetime limited warranty, honored right here in Clearfield.",
    icon: "badge-check",
  },
] as const;

export const hailFaqs = [
  {
    question: "Does car insurance cover hail damage?",
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
      "No. Under Utah's insurance rules, your insurer can't require you to use a specific repair shop. Tell your adjuster you'd like Xtreme Collision to do the work and we'll coordinate directly with them.",
  },
  {
    question: "How long does hail repair take?",
    answer:
      "Light hail damage repaired with paintless dent repair is often finished in 1–3 days. Moderate damage across multiple panels typically takes 3–7 business days. Severe damage that needs panel replacement or paint takes longer, and insurance approvals can affect timing.",
  },
  {
    question: "Can your mobile unit come to my home or work?",
    answer:
      "Yes. Our mobile unit does free hail inspections at homes and workplaces across Davis and Weber counties, including Clearfield, Layton, Syracuse, Clinton, Roy, Kaysville, and Ogden. Light damage can often be repaired on-site; heavier damage is repaired at our Clearfield location.",
  },
  {
    question: "What is paintless dent repair (PDR)?",
    answer:
      "PDR is a technique where trained technicians use specialized rods and lighting to massage dents out from behind the panel. Because there's no sanding, filler, or repainting, your factory paint stays intact and repairs are much faster than conventional bodywork.",
  },
  {
    question: "How soon after a hailstorm should I file a claim?",
    answer:
      "As soon as you can. Most policies require prompt notice of a loss, and filing early gets you to the front of the line before shops and adjusters book up after a big Wasatch Front storm.",
  },
  {
    question: "Is it worth fixing small hail dents?",
    answer:
      "Usually, yes. Unrepaired hail damage lowers trade-in value, small paint cracks can lead to rust, and insurers may exclude panels with prior unrepaired damage from a future claim.",
  },
] as const;
