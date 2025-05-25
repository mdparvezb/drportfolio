import doctorimg from "../assets/doctorimage.png";

import slide3 from "../assets/slide3.jpg";
import CallBtn from "../components/CallBtn";
import WhatsappBtn from "../components/WhatsappBtn";

function AboutDr() {
  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center px-4 md:px-10 py-8 bg-gray-100">
        <div className="w-full flex flex-col md:w-[50%] px-2 md:px-8 ">
          <h2 className="text-2xl md:text-4xl text-blue-800 font-bold">
            Dr. Venaktesh H
            <br />
            Interventional Radiologist
            <br />
            in North Karnataka, Hubli
          </h2>
          <p className="text-gray-600 py-4 text-lg tracking-wide">
            I am Dr. Venkatesh H, an{" "}
            <strong>
              Interventional Radiologist in North Karnataka Hubli, India
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
            DR. VENKATESH H A
          </h2>
          <h4 className="py-2 text-sm text-center text-red-600 font-bold">
            MD (AIIMS, New Delhi), PDCC (ILBS), FKSIR, EDiR, dICRI
          </h4>
          <p className="py-2 text-sm font-medium">
            Chief & Senior Consultant of Interventional Radiology
          </p>
          <p className="text-sm">
            Dr. Venkatesh is a distinguished specialist in the field of
            Minimally Invasive Neurovascular and Interventional Radiology,
            currently practicing at HCG Suchirayu Hospital in Hubballi,
            Karnataka. With over a decade of expertise in Endovascular and
            Interventional Radiology, he brings a wealth of experience, having
            received advanced training and certification from several
            prestigious national and international institutions.
            <br />
            He holds an{" "}
            <strong>
              MD in Radiodiagnosis and Interventional Radiology
            </strong>{" "}
            from the{" "}
            <strong>
              All India Institute of Medical Sciences (AIIMS), New Delhi
            </strong>{" "}
            — one of the most esteemed medical institutions in the country.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-6 py-8 bg-gray-200">
        <CallBtn />
        <WhatsappBtn className />
      </div>
    </>
  );
}

export default AboutDr;

// https://www.drgauravgangwani.com/about-us/
