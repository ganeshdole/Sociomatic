import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "/Users/ganeshdole/Desktop/Programming/project/Sociomatic/src/components/ui/button.tsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-3 py-2 md:px-12 lg:px-10">
      <div className="flex items-center gap-2">
        <img src="https://placehold.co/38x63" alt="Sociomatic Logo" />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl leading-8 font-bold font-space">
            <Link to="/">Sociomatic</Link>
          </h1>
          <p className="text-sm font-normal leading-[17px]">
            Where Creativity Meets Strategy
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center">
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink to="#Services" className="font-semibold nav-NavLink">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing-plans" className="font-semibold nav-NavLink">
              Pricing Plans
            </NavLink>
          </li>
          <li>
            <NavLink to="#Contact Us" className="font-semibold nav-NavLink">
              Contact Us
            </NavLink>
          </li>
          <li>
            <Button
              variant="outline"
              className="bg-[#ffbf22] hover:bg-black hover:text-white border-black"
            >
              <Link to="/pricing-plans">Get started</Link>
            </Button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="outline-none mobile-menu-button"
        >
          <svg
            className={`w-6 h-6 text-gray-500 hover:text-green-500 ${
              isOpen ? "hidden" : ""
            }`}
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
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden fixed top-0 left-0 h-screen w-1/2 bg-white z-10 transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-full overflow-y-auto">
          <div className="flex justify-between items-center pb-2 mt-15">
            <h1 className="text-2xl leading-8 font-bold font-space">
              <Link to="/">Sociomatic</Link>
            </h1>
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
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
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Services
          </NavLink>
          <NavLink
            to="/pricing-plans"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Pricing Plans
          </NavLink>
          <NavLink
            to="#Contact Us"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Contact Us
          </NavLink>
          <Button
            variant="outline"
            className="bg-[#ffbf22] hover:bg-black hover:text-white border-black mx-1"
          >
            <Link to="/pricing-plans">Get started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
