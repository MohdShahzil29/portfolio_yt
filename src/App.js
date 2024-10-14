import "./App.css";
import ArrowButton from "./components/ArrowButton";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import MilestoneSection from "./components/MilestoneSection";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/Product/ProductDetails";
import ProfileSection from "./components/ProfileSection";
import Services from "./components/Services";
import ServicesSection from "./components/ServicesSection";
import TechIcons from "./components/TechIcons";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

function App() {
  const handlePrevClick = () => {
    // Logic for handling left arrow click
    console.log("Previous");
  };

  const handleNextClick = () => {
    // Logic for handling right arrow click
    console.log("Next");
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <TechIcons />
      <ProfileSection />
      <ServicesSection />
      <div className="flex justify-end mt-7 gap-7 relative right-[8rem]">
        <ArrowButton direction="left" onClick={handlePrevClick} />
        <ArrowButton direction="right" onClick={handleNextClick} />
      </div>
      <Services />
      <MilestoneSection />
      <ProductDetails />
      <TestimonialSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
