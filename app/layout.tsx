import { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { siteConfig } from "@/config/site";
import ThemeProvider from "./providers";

const robotoslab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-robotoslab",
});
const baseURLString = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_LOCAL_URL;
const baseURL = new URL(baseURLString as string);
// console.log(baseURL.href)
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: baseURL,
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: `${baseURL.href}favicon-images/favicon.ico`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: `${baseURL.href}favicon-images/favicon-16x16.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: `${baseURL.href}favicon-images/favicon-32x32.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: `${baseURL.href}favicon-images/apple-touch-icon.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: `${baseURL.href}favicon-images/android-chrome-192x192.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: `${baseURL.href}favicon-images/android-chrome-512x512.png`,
    },
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: baseURL.href,
    siteName: siteConfig.name,
    images: [
      {
        url: `${baseURL.href}assets/myimage_1200_630.png`,
        width: 1200,
        height: 630,
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
        url: `${baseURL.href}assets/myimage_1200_675.png`,
        width: 1200,
        height: 675,
        alt: "OGI",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.name,
  },
  authors: [
    {
      name: siteConfig.name,
      url: baseURL.href,
    },
  ],
  category: "Portfolio",
  creator: siteConfig.name,
  publisher: siteConfig.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoslab.variable}  dark:bg-gradient-to-r dark:from-black dark:to-[#01293c] bg-gradient-to-r from-white to-[#01293c]`}>
      <ThemeProvider attribute="class" defaultTheme="dark"  disableTransitionOnChange>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
