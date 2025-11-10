import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});


export const metadata = {
  title: "Umbi Dev",
  description: "The only Dev u need",
  icons: {
    icon: [{ url: "/assets/umbi-logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Umbi Dev",
    "url": "https://umbiteams.com/"
  };
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${urbanist.variable} antialiased bg-beluga overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
