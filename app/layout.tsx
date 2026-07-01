import type { Metadata } from "next";
import { Allura, Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const heading = Newsreader({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const script = Allura({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arya-jainam-wedding.vercel.app/"),

  title: "Arya & Jainam | Malibu Wedding Weekend",

  description:
    "Join us in Malibu, California on August 22–23, 2026 for a weekend of love, laughter, sunsets, and celebration.",

  openGraph: {
    title: "Arya & Jainam | Malibu Wedding Weekend",

    description:
      "August 22–23, 2026 • Malibu, California",

    url: "/",

    siteName: "Arya & Jainam",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arya & Jainam Wedding Weekend",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Arya & Jainam | Malibu Wedding Weekend",

    description:
      "August 22–23, 2026 • Malibu, California",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${script.variable}`}>
        {children}
      </body>
    </html>
  );
}