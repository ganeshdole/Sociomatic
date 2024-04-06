import React from "react";
import { Button } from "@/components/ui/button";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const PricingOptions: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-3 sm:p-10 md:p-16 lg:p-32 bg-[#f6f4f4]  ">
      <div className="w-full md:m-32">
        <h3 className="text-4xl mt-10">Explore Our Pricing Options</h3>
        <p className="mt-10">
          Discover the perfect plan to elevate your brand's online presence.
          Whether you're a startup, growing business, or an established
          enterprise, our flexible pricing options cater to your unique social
          media management needs. Choose the plan that aligns with your goals
          and watch your brand soar to new heights. Explore our pricing options
          below.
        </p>
        <Button className="mt-10">See More</Button>
      </div>
      <div className="w-full  ">
        <div className="border-2 bg-[#ffbf22] border-black	 outline-black mt-10 p-10   ">
          <p className="text-2xl mt-10">Starter Plan</p>
          <p className="text-6xl mt-5">
            <sup className="mt-[-2]">₹</sup>25,000
          </p>
          <p className="text-[12px] mt-4">Every month </p>
          <p className="text-[14px]">
            Ideal for: Small businesses and startups seeking a solid social
            media presence. Valid for 3 months
          </p>
          <Button className="mt-5">
            {" "}
            <Link to="/pricing-plans">Get Started </Link>
          </Button>
        </div>
        <div className="border-2  border-t-0 border-black bg-[#ffd6ef]	 outline-black p-10	">
          <p className="mt-2 flex gap-4 items-center">
            <IoIosCheckmarkCircle />
            Basic Social Media Management for one platform
          </p>
          <p className="mt-2 flex gap-4 items-center">
            <IoIosCheckmarkCircle />
            Content creation and posting (up to 3 posts per week)
          </p>
          <p className="mt-2 flex gap-4 items-center">
            <IoIosCheckmarkCircle />
            Monthly performance reports and analytics
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingOptions;
