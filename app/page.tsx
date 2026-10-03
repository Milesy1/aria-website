import Sidebar from "@/components/Sidebar";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import APAutomation from "@/components/APAutomation";
import RAGIntelligence from "@/components/RAGIntelligence";
import AgenticERP from "@/components/AgenticERP";
import FineTuning from "@/components/FineTuning";
import HowWeBuild from "@/components/HowWeBuild";
import Results from "@/components/Results";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";
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
        <AgenticERP />
        <FineTuning />
        <HowWeBuild />
        <Results />
        <CaseStudy />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
