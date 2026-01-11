import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Advantage from "../components/Advantage";
import ProductionReady from "../components/ProductionReady";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-spinecho-dark min-h-screen">
      {/* Global Navigation */}
      <Navbar />

      {/* 1. The Hook: High level vision and brand validation */}
      <Hero />

      {/* 2. The Context: Identifying the operational blind spots in the industry */}
      <Problem />
      
      {/* 3. The Shift: Introducing physics based sensing as the superior path */}
      <Advantage />

      {/* 4. The Proof: Current readiness and call to action for pilot partners */}
      <ProductionReady />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}