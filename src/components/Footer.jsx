import { MdAddIcCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import mail from "../assets/mail.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    // Connect With Us Contact Details
    <div className="w-full flex flex-col">
      <div className="flex flex-col justify-center md:items-center bg-blue-900 px-6 md:px-10 py-4">
        <h2 className="text-2xl font-bold text-white text-center py-4">
          Connect With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 items-center mt-3">
          <div className="flex items-center md:justify-center gap-3">
            <MdLocationOn size={"50px"} className="text-white" />
            <span className="text-white">
              Interventional Radiology OPD <br />
              Parsik Hill Rd, off Uran Road, opp. Nerul Wonders Park, Sector 23, CBD Belapur, Navi Mumbai, Maharashtra 400614
            </span>
          </div>
          <div className="flex items-center md:justify-center gap-3">
            <MdAddIcCall size={"25px"} className="text-white" />
            <a href="tel:9441234567" className="text-white text-lg">
              +91-9441234567
            </a>
          </div>
          <div className="flex items-center md:justify-center gap-3">
            <MdEmail size={"25px"} className="text-white" />
            <a href="mailto:rdaiims@gmail.com" className="text-white text-lg">
             drjohndoe@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* Footer Quick Links */}
      <footer className="flex flex-col bg-[#1E2939]  py-2 pt-6">
        <div className="flex flex-col px-6 justify-center md:items-center">
          <h2 className="text-2xl text-center font-bold text-white pb-4">
            Quick Links
          </h2>
          <ul className="flex flex-col md:flex-row gap-8 text-gray-300">
            <li>
              <Link to={"/"} className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about-doctor"} className="hover:text-blue-500">
                About Doctor
              </Link>
            </li>
            <li>
              <Link to={"/about-ir"} className="hover:text-blue-500">
                About IR
              </Link>
            </li>
            <li>
              <Link
                to={"/treatment-facilities"}
                className="hover:text-blue-500"
              >
                Treatment and Facilities
              </Link>
            </li>
            <li>
              <Link to={"/contact-us"} className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Links */}
        <div className="flex gap-6 py-6 justify-center">
          <a
            target="_blank"
            href="#"
            className="w-8 h-8 hover:translate-y-1 active:translate-y-1 transition-all"
          >
            <img src={facebook} alt="facebook image" />
          </a>
          <a
            target="_blank"
            href="#"
            className="w-8 h-8 hover:translate-y-1 active:translate-y-1 transition-all"
          >
            <img src={instagram} alt="facebook image" />
          </a>
          <a
            target="_blank"
            href="#"
            className="w-8 h-8 hover:translate-y-1 active:translate-y-1 transition-all"
          >
            <img src={twitter} alt="facebook image" />
          </a>
          <a
            target="_blank"
            href="mailto:drjohndoe@gmail.com"
            className="w-8 h-8 hover:translate-y-1 active:translate-y-1 transition-all"
          >
            <img src={mail} alt="facebook image" />
          </a>
        </div>
      </footer>
      {/* Copyright Section */}
      <div className="flex justify-center items-center py-2 bg-black">
        <p className="text-white text-center text-md">
          &copy;{new Date().getFullYear()} &nbsp;
          <Link className="text-blue-500" to="/">
            drjohndoe
          </Link>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
