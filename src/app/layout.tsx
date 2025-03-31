import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/**
 * Note about Render.com demos:
 * We're using a client-side solution to pre-fetch/wake-up Render.com demo instances 
 * that may have gone to sleep due to inactivity. See ProjectCard component which:
 * 1. Pings the demo server as soon as the page loads (via useEffect)
 * 2. Provides visual feedback about the loading state
 * 3. Allows users to click through immediately or wait for server to wake up
 * 4. Uses isDemoOnRender prop to identify which projects are hosted on Render.com
 */

export const metadata: Metadata = {
  title: "Kavon Hooshiar | Developer Portfolio",
  description: "Personal portfolio website showcasing my projects and skills",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/favicon.ico', sizes: 'any' }
    ]
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Kavon Hooshiar | Developer Portfolio"
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#0B090A'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
