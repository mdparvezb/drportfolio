import doctorimg from "../assets/doctorimage.webp";

import slide3 from "../assets/slide3.jpg";
import CallBtn from "../components/CallBtn";
import WhatsappBtn from "../components/WhatsappBtn";

function AboutDr() {
  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center px-4 md:px-10 py-8 bg-gray-100">
        <div className="w-full flex flex-col md:w-[50%] px-2 md:px-8 ">
          <h2 className="text-2xl md:text-4xl text-blue-800 font-bold">
            Dr. John Doe
            <br />
            Interventional Radiologist
            <br />
            in Mumbai, Maharashtra
          </h2>
          <p className="text-gray-600 py-4 text-lg tracking-wide">
            I am Dr. John Doe, an{" "}
            <strong>
              Interventional Radiologist in Mumbai, Maharashtra, India
            </strong>
            . I offer minimally invasive interventions which can treat complex
            medical conditions without the need for surgery.
          </p>
        </div>
        <div className="w-full flex items-center justify-center md:w-[50%]">
          <img
            src={doctorimg}
            alt="doctor image"
            className="rounded-r-[150px] md:w-[60%] py-6"
          />
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col justify-center items-center px-2 md:px-4 py-4">
        <div className="w-full flex items-center justify-center py-4 md:w-[50%]  ">
          <img
            src={slide3}
            alt="doctor image"
            className="md:w-[80%] rounded-bl-[100px] shadow-[0px_0px_10px_rgba(0,0,0,0.3)]"
          />
        </div>

        <div className="w-full flex flex-col md:w-[50%] px-1 md:px-10">
          <h2 className="text-xl text-center py-2 text-black font-bold">
            Dr. John Doe
          </h2>
          <h4 className="py-2 text-sm text-center text-red-600 font-bold">
            Interventional Radiologist
          </h4>
          <p className="py-2 text-sm font-medium">
            Chief Consultant of Interventional Radiology
          </p>
          <p className="text-sm">
            Dr. Jon Doe is a distinguished specialist in Minimally Invasive
            Neurovascular and Interventional Radiology. He currently practices
            at Apollo Hospital in Mumbai, Maharashtra, and brings over a decade
            of expertise in Interventional Radiology. Dr. Doe received his MD in
            Radiodiagnosis and Interventional Radiology from the prestigious
            Institute of Medical Sciences , America, and further pursued a
            fellowship in Interventional Radiology at the Institute of Liver and
            Sciences,London. He is among the few practitioners from Asia to have
            been selected for an international fellowship under the esteemed
            Korean Society of Interventional Radiology and holds an advanced
            training certification from USA Medical Center, the largest hospital
            in America.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4 justify-center gap-6 py-6 bg-gray-200">
        <CallBtn />
        <WhatsappBtn className />
      </div>
    </>
  );
}

export default AboutDr;

