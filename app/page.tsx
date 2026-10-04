import Sidebar from "@/components/Sidebar";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import APAutomation from "@/components/APAutomation";
import RAGIntelligence from "@/components/RAGIntelligence";
import Security from "@/components/Security";
import AgenticERP from "@/components/AgenticERP";
import HowWeBuild from "@/components/HowWeBuild";
import Results from "@/components/Results";
import CaseStudy from "@/components/CaseStudy";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import EngagementProcess from "@/components/EngagementProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="layout">
      <Cursor />
      <Sidebar />
      <main className="main">
        <Hero />
        <Capabilities />
        <APAutomation />
        <RAGIntelligence />
        <Security />
        <AgenticERP />
        <HowWeBuild />
        <Results />
        <CaseStudy />
        <FAQ />
        <About />
        <EngagementProcess />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
