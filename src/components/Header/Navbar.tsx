import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-2 px-3 md:px-12 lg:px-10">
      <div className="flex gap-2">
        <img src="https://placehold.co/38x63" alt="Sociomatic Logo" />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl leading-8 font-bold font-space">
            <Link to="/">Sociomatic</Link>
          </h1>
          <p className="text-sm font-normal leading-[17px] ">
            Where Creativity Meets Strategy
          </p>
        </div>
      </div>
      <nav className="flex gap-4 items-center ">
        <ul className=" hidden  gap-4 sm:flex">
          <li>
            <NavLink to="#Services" className="font-semibold nav-NavLink">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing-plans"
              className="font-semibold  nav-NavLink  "
            >
              Pricing Plans
            </NavLink>
          </li>
          <li>
            <NavLink to="#Contact Us" className="font-semibold  nav-NavLink ">
              Contact Us
            </NavLink>
          </li>
        </ul>
        <Button
          variant="outline"
          className="  bg-[#ffbf22] hover:bg-black hover:text-white border-black "
        >
          <Link to="/pricing-plans">Get started</Link>
        </Button>
      </nav>
    </div>
  );
};
export default Navbar;
