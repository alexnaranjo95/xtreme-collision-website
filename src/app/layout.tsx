import type { Metadata, Viewport } from "next";
import { Geist, Oswald } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#16183a",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xtremecollision.com"),
  title: "Xtreme Collision | 5-Star Auto Body & Collision Repair in North Texas",
  description:
    "Expert collision repair in Carrollton, TX. Xtreme Collision works with all major insurance companies, offers a lifetime limited warranty, and repairs vehicles to factory standards.",
  keywords: [
    "collision repair Carrollton TX",
    "auto body shop Carrollton",
    "hail damage repair Carrollton",
    "paintless dent repair",
    "insurance claims auto body repair",
    "frame repair Carrollton",
    "certified collision repair North Texas",
  ],
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico", sizes: "any" },
      { url: "/images/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
  },
  manifest: "/images/favicon/site.webmanifest",
  openGraph: {
    title: "Xtreme Collision | 5-Star Auto Body & Collision Repair in North Texas",
    description:
      "Expert collision repair in Carrollton, TX. Xtreme Collision works with all major insurance companies, offers a lifetime limited warranty, and repairs vehicles to factory standards.",
    url: "https://www.xtremecollision.com",
    siteName: "Xtreme Collision",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/paintless-dent-repair-carrollton.webp",
        width: 758,
        height: 500,
        alt: "Xtreme Collision technician performing paintless dent repair in Carrollton, TX",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  "@id": "https://www.xtremecollision.com/#business",
  name: "Xtreme Collision",
  url: "https://www.xtremecollision.com",
  image: [
    "https://www.xtremecollision.com/images/paintless-dent-repair-carrollton.webp",
    "https://www.xtremecollision.com/images/auto-body-panel-refinishing-carrollton.webp",
    "https://www.xtremecollision.com/images/collision-repair-technician-carrollton.webp",
  ],
  logo: "https://www.xtremecollision.com/images/xtreme-logo.png",
  description:
    "Expert collision repair in Carrollton, TX. Xtreme Collision works with all major insurance companies, offers a lifetime limited warranty, and repairs vehicles to factory standards.",
  telephone: "(972) 233-0207",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2025 Midway Road, Suite E",
    addressLocality: "Carrollton",
    addressRegion: "TX",
    postalCode: "75006",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.9539,
    longitude: -96.8394,
  },
  areaServed: [
    { "@type": "City", name: "Carrollton" },
    { "@type": "City", name: "Addison" },
    { "@type": "City", name: "Dallas" },
    { "@type": "City", name: "Plano" },
    { "@type": "City", name: "Frisco" },
    { "@type": "City", name: "Richardson" },
  ],
  sameAs: [
    "https://www.facebook.com/XtremeCollisionRepair",
    "https://www.instagram.com/xtreme_collision/",
    "https://www.yelp.com/biz/xtreme-collision-repair-carrollton",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`light ${geistSans.variable} ${oswald.variable}`}
    >
      <body className="font-sans antialiased">
        <Script
          src="https://backend.leadconnectorhq.com/appengine/loc/7265He95WmGfBaKz95x6/pool/n9sMqLoOEpR6FQWJu9U5/number_pool.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://backend.leadconnectorhq.com/appengine/js/user_session.js"
          strategy="beforeInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
