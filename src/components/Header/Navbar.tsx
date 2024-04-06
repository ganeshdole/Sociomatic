import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/logo.svg";
import { Button } from "../ui/button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-3 py-2 md:px-12 lg:px-10">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Sociomatic Logo" className="w-[38px]" />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl leading-8 font-bold font-space">
            <Link to="/#services">Sociomatic</Link>
          </h1>
          <p className="text-sm font-normal leading-[17px]">
            Where Creativity Meets Strategy
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center">
        <ul className="flex gap-4 items-center">
          <li>
            {/* <NavLink
              to="/#services"
              className="font-semibold nav-NavLink transition-all duration-300 ease-in-out hover:text-green-500"
            >
              Services
            </NavLink> */}
          </li>
          <li>
            <NavLink
              to="/pricing-plans"
              className="font-semibold nav-NavLink transition-all duration-300 ease-in-out hover:text-green-500"
            >
              Pricing Plans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#Contact Us"
              className="font-semibold nav-NavLink transition-all duration-300 ease-in-out hover:text-green-500"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <Button
              variant="outline"
              className="bg-[#ffbf22] hover:bg-black hover:text-white border-black transition-all duration-300 ease-in-out"
            >
              <Link
                to="/pricing-plans"
                className="transition-all duration-300 ease-in-out hover:text-white"
              >
                Get started
              </Link>
            </Button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="outline-none mobile-menu-button transition-all duration-300 ease-in-out hover:text-green-500"
        >
          <svg
            className={`w-6 h-6 text-gray-500 ${isOpen ? "hidden" : ""}`}
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Open */}
      <div
        className={`
    ${
      isOpen
        ? "block opacity-100 translate-x-0 transition-all duration-1000 ease-in-out"
        : "hidden opacity-0 -translate-x-full transition-all duration-1000 ease-in-out"
    }
    md:hidden fixed top-0 left-0 h-screen w-1/2 bg-white z-10
  `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-full overflow-y-auto">
          <div className="flex justify-between items-center pb-2 mt-15">
            <h1 className="text-2xl leading-8 font-bold font-space">
              <Link to="/">Sociomatic</Link>
            </h1>
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button transition-all duration-300 ease-in-out hover:text-green-500"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <NavLink
            to="#Services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 ease-in-out"
          >
            Services
          </NavLink>
          <NavLink
            to="/pricing-plans"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 ease-in-out"
          >
            Pricing Plans
          </NavLink>
          <NavLink
            to="#Contact Us"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 ease-in-out"
          >
            Contact Us
          </NavLink>
          <Button
            variant="outline"
            className="bg-[#ffbf22] hover:bg-black hover:text-white border-black mx-1 transition-all duration-300 ease-in-out"
          >
            <Link
              to="/pricing-plans"
              className="transition-all duration-300 ease-in-out hover:text-white"
            >
              Get started
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
