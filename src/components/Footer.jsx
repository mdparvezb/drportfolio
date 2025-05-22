import { MdAddIcCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
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
              HCG - Suchirayu Hospital, Off Gokul Road, Near KSRTC bus Depot,
              Hubli - 580030
            </span>
          </div>
          <div className="flex items-center md:justify-center gap-3">
            <MdAddIcCall size={"25px"} className="text-white" />
            <a href="tel:919448525672" className="text-white text-lg">
              +91-9448525672
            </a>
          </div>
          <div className="flex items-center md:justify-center gap-3">
            <MdEmail size={"25px"} className="text-white" />
            <a href="mailto:rdaiims@gmail.com" className="text-white text-lg">
              drvenk.rdaiims@gmail.com
            </a>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default Footer;
