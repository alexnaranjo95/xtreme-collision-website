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

export const navLinks = [
  { href: "/#services", label: "Services" },
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

export const reviews = [
  {
    quote: "Work was excellent on a rear bumper paint job for a mint E39.",
    label: "Body & paintwork",
  },
  {
    quote:
      "They did an awesome job on an F-150 and helped through the full process.",
    label: "F-150 repair",
  },
  {
    quote:
      "The repair followed GM standards, used OEM parts, and the process was smooth.",
    label: "GM owner experience",
  },
] as const;

export const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "15,000+", label: "Vehicles Restored" },
  { value: "5.0", label: "Average Star Rating" },
  { value: "100%", label: "Major Insurers Accepted" },
] as const;
