import footerImage from "@/assets/images/footer-image.svg";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "@/assets/images/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex  flex-col items-center ">
      <img
        src={footerImage}
        alt="Footer Image"
        className="block w-full sm:w-[50%] z-10"
      />
      <div className="w-full bg-[#ffbf22] mt-[-200px] ">
        <div className="flex m-32 gap-5">
          <img src={Logo} alt="" className="w-[38px]" />
          <div>
            <h1 className="text-2xl leading-8 font-bold font-space">
              <Link to="/">Sociomatic</Link>
            </h1>
            <p className="text-sm font-normal leading-[17px]">
              Where Creativity Meets Strategy
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  justify-center items-start mx-32 mb-16">
          <div>
            <p className="font-semibold text-2xl">Contact</p>
            <p className="mt-4">
              Pune, Maharashtra <br />
              General Inquiries: <br />
              +91 9421466104
            </p>
            <p className="mt-4">Customer Care:</p>

            <Link to="mailto:support@sociomatic.tech">
              support@sociomatic.tech
            </Link>
          </div>
          <div className="">
            <p className="font-semibold text-2xl">Quick Links</p>
            <Link
              to="/terms-and-conditions"
              className="underline cursor-pointer mt-5"
            >
              <p> Terms & Conditions</p>
            </Link>
            <Link to="" className="underline nav">
              Privacy Policy
            </Link>
          </div>
          <div>
            <p className="font-semibold text-2xl">Follow </p>
            <p>Sign up to get the latest news on our product.</p>
            <form className="grid grid-cols-1 gap-2 py-5 ">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  aria-required
                  required
                />
                <Button
                  variant={"outline"}
                  className="w-full bg-black text-accent uppercase font-bold tracking-widest"
                >
                  Subscribe
                </Button>
              </div>
            </form>
            <div className="flex text-4xl gap-5">
              <Link to="https://www.instagram.com/sociomatic.co/">
                <FaInstagramSquare />
              </Link>
              <Link to="https://www.linkedin.com/company/sociomatic-co">
                <FaLinkedin />
              </Link>
              <Link to="https://twitter.com/sociomatic_co">
                <FaSquareXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p
          className="px-0 bg-gray-950 w-screen
          text-center text-primaryText py-5 text-gray-200"
        >
          &copy; {currentYear} Sociomatic. All rights reserved. Created by{" "}
          <a href="https://ganeshdole.me/" className="text-white font-bold ">
            Ganesh Dole
          </a>{" "}
          with ❤️
        </p>
      </div>
    </div>
  );
};

export default Footer;
