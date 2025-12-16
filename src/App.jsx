import NavSection from "./components/NavSection";
import BannerSection from "./components/BannerSection";
import FreelancersCompanies from "./components/FreelancersCompanies";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
// import SpecialtiesSection from "./components/SpecialtiesSection";
import LinkedButton from "./components/LinkedButton";
import Specialties from "./components/Specialties";

function App() {
  return (
    <>
      <NavSection />
      <BannerSection />
      {/* <SpecialtiesSection /> */}
      <Specialties />
      <FreelancersCompanies />
      <PricingSection />
      <FAQSection />
      <LinkedButton />
    </>
  );
}

export default App;
