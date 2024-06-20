import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { siteConfig } from "@/config/site";

const robotoslab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-robotoslab",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description:siteConfig.description,
  // metadataBase: baseURL,
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "favicon-images/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-images/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-images/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon-images/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon-images/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/favicon-images/android-chrome-512x512.png",
    },
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    // url: process.env.SITE_URL,
    siteName: `${siteConfig.name}`,
    images: [
      {
        url: "/assets/myimage_1200_630.png",
        alt: "OGI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/image/myimage_1200_675.png",
        alt: "OGI",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.name,
  },
  // authors: [
  //   {
  //     name: siteConfig.name,
  //     url: process.env.SITE_URL,
  //   },
  // ],
  // category: "Social Networking",
  // creator: siteConfig.name,
  // formatDetection: {
  //   address: false,
  //   date: false,
  //   email: false,
  //   telephone: false,
  // },
  // publisher: siteConfig.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoslab.variable} bg-gradient-to-r from-primary to-[#006191] `}
      >
        <Header />
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
