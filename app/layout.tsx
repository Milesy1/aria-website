import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
const GA_ID = "G-H8DFHKXRNS";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Aria — Self-learning AP Automation, RAG & Agentic AI for Enterprise Finance",
    template: "%s | Aria",
  },
  description: "Aria builds self-learning AI systems for enterprise finance operations: AP automation with RAG and confidence gating, multi-tenant RAG knowledge assistants, agentic ERP automation with human-in-the-loop governance, and domain-specific LLM fine-tuning. Deployed, governed, verified.",
  keywords: [
    "AP automation AI", "non-PO invoice coding", "agentic ERP automation",
    "RAG knowledge assistant enterprise", "LLM fine-tuning finance", "AI engineer UK",
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
    title: "Aria — Self-learning AP Automation, RAG & Agentic AI for Enterprise Finance",
    description: "Self-learning AI systems for enterprise finance operations. AP automation, RAG knowledge assistants, agentic ERP automation, LLM fine-tuning. Deployed, governed, verified.",
    siteName: "Aria",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aria — Self-learning AI systems for enterprise finance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aria — Self-learning AP Automation, RAG & Agentic AI for Enterprise Finance",
    description: "Self-learning AI systems for enterprise finance. AP automation, RAG assistants, agentic ERP, LLM fine-tuning. Deployed, governed, verified.",
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
      description: "Aria builds self-learning AI systems for enterprise finance operations — AP automation, RAG knowledge assistants, agentic ERP automation, and domain-specific LLM fine-tuning.",
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
      knowsAbout: ["Accounts Payable Automation", "Retrieval-Augmented Generation", "Agentic AI Systems", "LLM Fine-tuning", "Enterprise AI Engineering", "LangGraph", "Qdrant", "Langfuse", "Human-in-the-loop AI"],
      offers: [
        { "@type": "Offer", name: "AP Automation", description: "Self-learning non-PO invoice coding with RAG retrieval, confidence gating, and write-back loop. 99% automation rate, 0% false positives." },
        { "@type": "Offer", name: "RAG Intelligence", description: "Multi-tenant RAG knowledge assistants with hybrid BM25 + dense retrieval, RAGAS-evaluated, CI-gated. 9.1/10 accuracy, sub-3s latency." },
        { "@type": "Offer", name: "Agentic ERP Automation", description: "Natural language over live ERP under mandatory human-in-the-loop governance. 90+ tools, semantic MDM, full AP/AR cycle." },
        { "@type": "Offer", name: "LLM Fine-tuning", description: "Domain-specific model training and eval-driven fine-tuning for finance and enterprise workflows, CI-gated on golden datasets." },
      ],
    },
    { "@type": "WebSite", "@id": `${BASE_URL}/#website`, url: BASE_URL, name: "Aria", publisher: { "@id": `${BASE_URL}/#organization` } },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Aria — Self-learning AP Automation, RAG & Agentic AI for Enterprise Finance",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description: "Aria builds self-learning AI systems for enterprise finance: AP automation, RAG knowledge assistants, agentic ERP automation, and LLM fine-tuning. All governed, evaluated, and production-ready.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
