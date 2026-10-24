import type { LocationContact } from "@/lib/site";

/** LeadConnector inline form settings (matches the EstimateForm component). */
export type HailForm = {
  id: string;
  name: string;
  height: number;
  cookieConsent?: boolean;
};

/**
 * Everything the hail landing page needs, per location. The Clearfield (Utah)
 * and Phoenix (Arizona) pages both satisfy this shape so the shared `hail/*`
 * components render either market without location-specific branches.
 */
export type HailLocationData = {
  location: LocationContact;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: { latitude: number; longitude: number };
  directionsHref?: string;
  pageUrl: string;
  estimateForm: HailForm;

  hero: {
    /** Shown in the storm banner, e.g. "Davis County". */
    countyName: string;
    locatorLine: string;
    heading: string;
    body: string;
    trustLine: string;
    /** Short area label under the mobile-inspection card title. */
    areas: string;
    image: string;
  };

  storms: {
    eyebrow: string;
    heading: string;
    intro: string;
    sources: string;
    stats: readonly { value: string; label: string }[];
    events: readonly { date: string; title: string; detail: string }[];
  };

  mobile: {
    intro: string;
    steps: readonly {
      title: string;
      description: string;
      icon: "truck" | "search" | "wrench";
    }[];
    serviceAreaCities: readonly string[];
    /** Omit for a pure service-area operation; the section then renders a coverage card. */
    map?: {
      src: string;
      title: string;
      name: string;
      address: string;
      note: string;
    };
  };

  damageGuide: {
    intro: string;
    hailSizes: readonly { name: string; size: string; px: number; impact: string }[];
    checks: readonly { title: string; description: string }[];
  };

  pdr: {
    benefits: readonly string[];
    images: { hero: string; secondary: string };
  };

  claims: {
    steps: readonly { title: string; description: string }[];
    insurancePoints: readonly { title: string; description: string }[];
  };

  trust: {
    intro: string;
    points: readonly {
      title: string;
      description: string;
      icon: "building" | "cloud-hail" | "badge-check";
    }[];
  };

  nearby: {
    intro: string;
    /** State suffix appended to each city, e.g. "UT" or "AZ". */
    stateSuffix: string;
    areas: readonly { city: string; lat: number; lng: number; note: string }[];
  };

  faq: {
    heading: string;
    items: readonly { question: string; answer: string }[];
  };

  cta: {
    heading: string;
    subheading: string;
  };

  estimate: {
    eyebrow: string;
    heading: string;
    description: string;
  };
};
