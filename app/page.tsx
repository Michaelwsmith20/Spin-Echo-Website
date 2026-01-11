import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Advantage from "../components/Advantage";
import ProductionReady from "../components/ProductionReady";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-spinecho-dark min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Advantage />
      <ProductionReady /> 
      <Footer />
    </main>
  );
}