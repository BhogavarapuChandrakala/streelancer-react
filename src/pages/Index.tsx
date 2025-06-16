
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CareerSections from "@/components/CareerSections";
import ProcessSteps from "@/components/ProcessSteps";
import EmployerBenefits from "@/components/EmployerBenefits";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <CareerSections />
      <ProcessSteps />
      <EmployerBenefits />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
