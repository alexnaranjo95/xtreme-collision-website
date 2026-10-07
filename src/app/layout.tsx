import type { Metadata, Viewport } from "next";
import { Geist, Oswald } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}
