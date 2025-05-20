import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import CallBtn from "./CallBtn";
import WhatsappBtn from "./WhatsappBtn";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-[#0003AA] content-between top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "w-[95%]" : "w-full"
      }`}
    >
      {/* Desktop Menu */}
      <div className="w-full sm:px-6 lg:px-8">
        <div className="flex px-6 items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div>
            <Link to="/" className="text-xl font-bold text-white">
              DR. VENKATESH H
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-white hover:text-red-600 px-2 py-2 text-md font-bold transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about-doctor"
              className="text-white hover:text-red-600 px-2 py-2 text-md font-bold transition-colors"
            >
              About Doctor
            </Link>
            <Link
              to="/about-ir"
              className="text-white hover:text-red-600 px-2 py-2 text-md font-bold transition-colors"
            >
              About IR
            </Link>
            <Link
              to="/treatment-facilities"
              className="text-white hover:text-red-600 px-2 py-2 text-md font-bold transition-colors"
            >
              Treatment Facilities
            </Link>
            <Link
              to="about-doctor"
              className="text-white hover:text-red-600 px-2 py-2 text-md font-bold transition-colors"
            >
              Contact Us
            </Link>

            <a
              href="tel:919448525672"
              className="text-white text-2xl hover:text-red-600 px-2 py-2 text-md font-bold transition-colors"
            >
              <MdAddIcCall />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white font-bold hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {!isMenuOpen ? (
                <RxHamburgerMenu size={"24px"} />
              ) : (
                <RxCross2 size={"24px"} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`bg-white md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 w-full flex flex-col pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
          <Link
            to="/"
            className="w-full px-6 py-2 font-medium hover:rounded-full text-gray-900 hover:text-blue-600 hover:bg-gray-100 border-b-gray-200 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about-doctor"
            className="w-full px-6 py-2 font-medium hover:rounded-full  text-gray-900 hover:text-blue-600 hover:bg-gray-100 border-b-gray-200 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            About Doctor
          </Link>
          <Link
            to="/about-ir"
            className="w-full px-6 py-2 font-medium hover:rounded-full text-gray-900 hover:text-blue-600 hover:bg-gray-100 border-b-gray-200 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            About IR
          </Link>
          <Link
            to="/treatment-facilities"
            className="w-full px-6 py-2 font-medium hover:rounded-full text-gray-900 hover:text-blue-600 hover:bg-gray-100 border-b-gray-200 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Treatment and Facilities
          </Link>
          <Link
            to="/contact-us"
            className="w-full px-6 py-2 font-medium hover:rounded-full text-gray-900 hover:text-blue-600 hover:bg-gray-100 border-b-gray-200 border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          <div className="border-b-gray-200 border-b px-3 py-2">
            <CallBtn />
          </div>
          <div className="px-3 py-2">
            <WhatsappBtn />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
