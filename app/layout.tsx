import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

const BASE_URL = "https://aria.mileswaite.net";
const GA_ID = "G-QTEG0Y1HSC";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Aria — Production AI Systems, Engineered for Trust",
    template: "%s | Aria",
  },
  description: "Governed, evaluated, observable AI — built for finance, commodities, energy trading, and any operation where a wrong answer costs real money.",
  keywords: [
    "production AI systems", "commodities", "energy trading", "enterprise operations",
    "AP automation AI", "non-PO invoice coding", "agentic systems",
    "RAG knowledge assistant enterprise", "LLM fine-tuning", "AI engineer UK",
    "invoice coding automation", "hybrid retrieval RAG", "LangGraph agent",
    "human in the loop AI", "Qdrant vector store", "Langfuse observability",
    "enterprise AI systems", "governed AI", "self-learning AI",
    "accounts payable automation", "GL code automation", "AI ERP integration",
  ],
  authors: [{ name: "Miles Waite", url: BASE_URL }],
  creator: "Miles Waite",
  publisher: "Aria",
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Aria — Production AI Systems, Engineered for Trust",
    description: "Governed, evaluated, observable AI — built for finance, commodities, energy trading, and any operation where a wrong answer costs real money.",
    siteName: "Aria",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aria — Production AI systems, engineered for trust" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aria — Production AI Systems, Engineered for Trust",
    description: "Governed, evaluated, observable AI — built for finance, commodities, energy trading, and any operation where a wrong answer costs real money.",
    images: ["/og.png"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: BASE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Aria",
      url: BASE_URL,
      description: "Governed, evaluated, observable AI — built for finance, commodities, energy trading, and any operation where a wrong answer costs real money.",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Miles Waite",
        jobTitle: "AI Engineer & Systems Architect",
        url: "https://mileswaite.net",
        sameAs: ["https://linkedin.com/in/miles-waite-46628a3b2", "https://github.com/Milesy1"],
      },
      address: { "@type": "PostalAddress", addressLocality: "Bingham", addressRegion: "Nottinghamshire", addressCountry: "GB" },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      knowsAbout: ["Accounts Payable Automation", "Retrieval-Augmented Generation", "Agentic AI Systems", "LLM Fine-tuning", "Enterprise AI Engineering", "Energy Trading", "Commodities", "LangGraph", "Qdrant", "Langfuse", "Human-in-the-loop AI"],
      offers: [
        { "@type": "Offer", name: "Enterprise Workflow Automation", description: "Self-learning non-PO invoice coding with RAG retrieval, confidence gating, and write-back loop. 99% automation rate, 0% false positives." },
        { "@type": "Offer", name: "RAG Intelligence", description: "Multi-tenant RAG knowledge assistants with hybrid BM25 + dense retrieval, RAGAS-evaluated, CI-gated. 9.1/10 accuracy, sub-3s latency." },
        { "@type": "Offer", name: "Agentic Systems", description: "Natural language over live systems under mandatory human-in-the-loop governance. ERP is the primary example: 90+ tools, semantic MDM, full AP/AR cycle." },
      ],
    },
    { "@type": "WebSite", "@id": `${BASE_URL}/#website`, url: BASE_URL, name: "Aria", publisher: { "@id": `${BASE_URL}/#organization` } },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Aria — Production AI Systems, Engineered for Trust",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description: "Governed, evaluated, observable AI — built for finance, commodities, energy trading, and any operation where a wrong answer costs real money.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments)}
          gtag('js',new Date());
          gtag('config','${GA_ID}');
        `}</Script>
      </body>
    </html>
  );
}

