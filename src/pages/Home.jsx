import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import CallBtn from "../components/CallBtn.jsx";
import WhatsappBtn from "../components/WhatsappBtn.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceCard />
      {/* Contact us */}
      <div className="flex flex-col gap-y-10 mx-auto items-center justify-center w-full md:px-20 px-10 py-10 bg-blue-800 text-white">
        <h2 className="font-bold text-2xl md:text-3xl">
          Book An Appointment Now!
        </h2>
        <div className="w-full flex flex-col md:flex-row justify-center gap-5 md:gap-10">
          <CallBtn />
          <WhatsappBtn />
        </div>
      </div>
    </>
  );
}

export default Home;
