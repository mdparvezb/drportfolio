import doctorimg from "../assets/doctorimage.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutDr() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-auto justify-center items-center bg-gray-200 px-6 py-10 md:px-30">
        <h2 className="text-3xl font-bold text-center">ABOUT THE DOCTOR</h2>
        <div className="w-full lg:w-[50%] md:px-10 p-10 hover:-translate-y-1 transition-all">
          <img
            src={doctorimg}
            alt="doctor image"
            className="w-full rounded-md shadow-[3px_3px_10px_rgba(0,0,0,0.2)]"
          />
        </div>
        <div className="w-full lg:w-[80%]">
          <h2 className="text-2xl text-center text-black font-bold">
            DR. VENKATESH H A
          </h2>
          <h3 className="py-2 text-sm text-center text-red-600 font-bold">
            MD (AIIMS, New Delhi), PDCC (ILBS), FKSIR, EDiR, dICRI
          </h3>
          <p className="py-4 text-md font-medium">
            Chief & Senior Consultant of Interventional Radiology
          </p>
          <p className="text-md">
            Dr. Venkatesh is a well known practitioner in the field of Minimally
            Invasive Neurovascular and Interventional Radiology, currently
            working in HCG Suchirayu Hospital, Hubballi, Karnataka. He has more
            than 10 years of experience in Endovascular & Interventional
            Radiology, being trained and certified from various premier national
            and international institutes. He has done MD in Radiodiagnosis &
            Interventional Radiology from All India Institute of Medical
            Sciences, New Delhi, a premier institute of our country. He also has
            an additional fellowship degree in Interventional Radiology from
            Institute of Liver & Biliary Sciences, New Delhi. He was one among
            the few people in Asian countries to be selected for an
            international fellowship under the reputed Korean Society of
            Interventional Radiology. He also holds a training certificate from
            Asan Medical Center, the biggest hospital in South Korea. He has
            previously worked in AIIMS – New Delhi, JPN apex trauma centre – New
            Delhi, RP centre – New Delhi, BRA – IR cancer centre – New Delhi,
            Apollo BGS-Mysore, ILBS-New Delhi and KIMS-Trivandrum. He has been
            faculty for various national and international Interventional
            radiology conferences. He has a number of publications to his
            credit.
          </p>
          <div className="pt-4 w-full flex justify-center"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutDr;

// https://www.drgauravgangwani.com/about-us/
