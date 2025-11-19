import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

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
  description: "Hiring, as efficiently as possible, through market-grown connections.",
  keywords: ["hiring", "prediction markets", "recruiting", "tech hiring", "talent market"],
  authors: [{ name: "Loam Market" }],
  creator: "Loam Market",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loam.market",
    title: "loam.market",
    description: "Hiring, as efficiently as possible, through market-grown connections.",
    siteName: "loam.market",
  },
  twitter: {
    card: "summary_large_image",
    title: "loam.market",
    description: "Hiring, as efficiently as possible, through market-grown connections.",
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
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MB7JG76V');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-loam-beige text-loam-ink`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MB7JG76V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <div className="mx-auto max-w-5xl px-4 py-10">{children}</div>
          </main>
          <footer className="border-t border-loam-border bg-loam-beige/95 py-4">
            <div className="mx-auto max-w-5xl px-4 text-xs text-loam-muted text-center">
              loam.market — Hiring through community-validated prediction markets. hello@loam.market
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
