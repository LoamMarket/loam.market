import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { CSPostHogProvider } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://loam.market'),
  title: {
    default: "loam.market",
    template: "%s | loam.market",
  },
  description: "Hiring through community validated prediction markets.",
  keywords: ["hiring", "prediction markets", "recruiting", "tech hiring", "talent market"],
  authors: [{ name: "Loam Market" }],
  creator: "Loam Market",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loam.market",
    title: "loam.market",
    description: "Hiring through community validated prediction markets.",
    siteName: "loam.market",
  },
  twitter: {
    card: "summary_large_image",
    title: "loam.market",
    description: "Hiring through community validated prediction markets.",
    creator: "@loam_market",
  },
  icons: {
    icon: "/icon",
    apple: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J4DG6FQY5P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J4DG6FQY5P');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-loam-beige text-loam-ink`}
      >
        <CSPostHogProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <div className="mx-auto max-w-5xl px-4 py-10">{children}</div>
            </main>
            <footer className="border-t border-loam-border bg-loam-beige/95 py-4">
              <div className="mx-auto max-w-5xl px-4 text-xs text-loam-muted text-center">
                loam.market — Hiring through community validated prediction markets. hello@loam.market
              </div>
            </footer>
          </div>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
