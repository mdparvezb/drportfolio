import React from "react";
import { LuAmbulance } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { LuBriefcaseMedical } from "react-icons/lu";
import "../index.css";

const ServiceCard = () => {
  return (
    <div className="w-full flex flex-col md:flex md:flex-row gap-y-4 md:gap-4 px-4 py-2 mt-10">
      {/* 1st Card */}
      <div className="flex flex-col items-center text-center p-6 md:w-[30%] sm:w-[100%] mx-auto shadow-xl hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] active:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:-translate-y-1 transition-all hover:cursor-pointer rounded-md">
        <LuBriefcaseMedical size={"100px"} className="text-blue-600" />
        <h2 className="text-md font-medium pt-4 text-black mb-4">
          ADVANCE TECHNOLOGY
        </h2>
        <p className="text-gray-600">
          Interventional radiology treatments have become the primary method of
          care for a variety of conditions, offering less risk, less pain and
          less recovery time, compared to open surgery.
        </p>
      </div>

      {/* 2nd Card */}
      <div className="flex flex-col items-center text-center p-6 md:w-[30%] sm:w-[100%] mx-auto shadow-xl hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] active:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:-translate-y-1 transition-all hover:cursor-pointer rounded-md">
        <FaUserDoctor size={"100px"} className="text-blue-600" />
        <h2 className="text-md font-medium text-black pt-4 mb-4">
          EXPERIENCED DOCTOR
        </h2>
        <p className="text-gray-600">
          10 years of experience in Endovascular & Interventional Radiology,
          being trained and certified from various premier national and
          international institutes.
        </p>
      </div>

      {/* 3rd Card */}
      <div className="flex flex-col items-center text-center p-6 md:w-[30%] sm:w-[100%] mx-auto shadow-xl hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] active:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:-translate-y-1 transition-all hover:cursor-pointer rounded-md">
        <LuAmbulance size={"100px"} className="text-blue-600" />
        <h2 className="text-md font-medium text-black pt-4 mb-4">
          24/7 AVAILABILITY
        </h2>
        <p className="text-gray-600">
          If you have any Interventional Radiology related query, call us and
          don’t hesitate to ask. We are here to provide you transparent,
          seamless, and informative care.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
