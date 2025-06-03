import React from "react";
import doctorimg from "../assets/doctorimage.webp";
import { Link } from "react-router-dom";

const AboutCard = () => {
  return (
    <div className="animate flex flex-col justify-center items-center md:flex-col lg:flex-row bg-gray-200 px-6 py-20 md:px-30">
      <div className="w-full lg:w-[50%] md:px-10 p-10 hover:-translate-y-1 transition-all">
        <img
          src={doctorimg}
          alt="doctor image"
          className="w-full rounded-md shadow-xl"
        />
      </div>
      <div className="w-full lg:w-[50%]">
        <h2 className="text-2xl text-black font-bold">Dr. John Doe</h2>
        <h3 className="py-2 text-sm text-red-600">
          Inrerventional Radiologist
        </h3>
        <p className="py-4 text-md font-medium">
          Chief Consultant of Interventional Radiology
        </p>
        <p className="text-md">
          Dr. Jon Doe is a distinguished specialist in Minimally Invasive
          Neurovascular and Interventional Radiology. He currently practices at
          Apollo Hospital in Mumbai, Maharashtra, and brings over a decade of
          expertise in Interventional Radiology. Dr. Doe received his MD in
          Radiodiagnosis and Interventional Radiology from the prestigious
          Institute of Medical Sciences , America, and further pursued a
          fellowship in Interventional Radiology at the Institute of Liver and
          Sciences,London. He is among the few practitioners from Asia to have
          been selected for an international fellowship under the esteemed
          Korean Society of Interventional Radiology and holds an advanced
          training certification from USA Medical Center, the largest hospital
          in America.
        </p>
        <div className="pt-4 w-full flex justify-center">
          <Link
            to="about-doctor"
            className="w-80 text-center rounded-lg bg-blue-800 shadow-md hover:shadow-xl hover:opacity-95 active:translate-y-0.5  hover:translate-y-0.5 transition-all text-white py-2 px-8"
          >
            Read More About Doctor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
