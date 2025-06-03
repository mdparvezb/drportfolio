import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import CallBtn from "../components/CallBtn.jsx";
import WhatsappBtn from "../components/WhatsappBtn.jsx";
import AboutCard from "../components/AboutCard.jsx";
import surgeryimg from "../assets/surgery.jpg";

function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCard />
      {/* Book an Appointment Section */}
      <div className="flex flex-col gap-y-10 mx-auto items-center mt-2 justify-center w-full md:px-20 px-8 py-10 bg-blue-950 text-white">
        <h2 className="font-bold text-xl text-center md:text-3xl">
          Book An Appointment Now!
        </h2>
        <div className="w-full flex flex-col md:flex-row justify-center gap-5 md:gap-10">
          <CallBtn />
          <WhatsappBtn />
        </div>
      </div>

      {/* About Doctor Section  */}
      <AboutCard />

      {/*  */}
      <div className="flex flex-col justify-center items-center w-full px-10 md:px-20 py-8 bg-[#000000] text-[#8C85FF] ">
        <h2 className="text-3xl text-center font-bold my-2 py-4">Why Us?</h2>
        <div className="w-full flex flex-col bg-[#060708] md:flex-row justify-between shadow-sm shadow-gray-400 px-10 md:px-28 py-6 rounded-md">
          {/* Card One */}
          <div className="flex flex-col justify-center items-center p-4">
            <h4 className="text-5xl font-bold text-[#8C85FF] text-center tracking-normal">
              30000+
            </h4>
            <p className="text-md text-white text-center tracking-widest">
              Happy Patients
            </p>
          </div>

          {/*  Card Two */}
          <div className="flex flex-col justify-center items-center p-4">
            <h4 className="text-5xl font-bold text-[#8C85FF] text-center tracking-normal">
              15000+
            </h4>
            <p className="text-md text-white tracking-widest text-center">
              Procedures performed
            </p>
          </div>

          {/* Card Thrhee */}

          <div className="flex flex-col justify-center items-center p-4">
            <h4 className="text-5xl font-bold text-[#8C85FF] text-center tracking-normal">
              15+
            </h4>
            <p className="text-md text-white tracking-widest text-center">
              Years of experience
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-center pt-10 p-4 md:p-6">
        <div className="w-full md:w-[50%] p-8">
          <img
            src={surgeryimg}
            alt="surgery image"
            className="w-full rounded-md shadow-md"
          />
        </div>
        <div className="w-full md:w-[50%] px-6 md:px-20 flex flex-col items-center">
          <h2 className="text-3xl py-2 text-center text-black font-bold">
            Your Search Ends Here!
          </h2>
          <h4 className="text-xl py-2 text-center text-blue-600 font-medium">
            Learn about other IR treatments
          </h4>
          <hr className="w-[100px] text-red-600 my-4" />
          <p className="text-center text-md text-gray-800">
            Interventional Radiologists (IRs) use image-guided techniques and
            tiny incisions to treat a wide range of conditions that once
            required major open surgery—including cancers, diseased blood
            vessels, uterine fibroids, varicose veins, and enlarged prostate.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
