import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoIosCheckmarkCircle } from "react-icons/io";

const PricingPlans: React.FC = () => {
  return (
    <div className="grid-cols-3">
      <div className="flex flex-col items-center row-start-1 row-end-3 px-3 sm:px-10 md:px-16 lg:px-32 bg-[#ffd6ef] py-32">
        <h2 className="text-5xl">Explore Our Pricing Plans</h2>
        <p className="font-thin t-4">
          Use this area to describe one of your memberships.
        </p>
      </div>
      <div></div>
      <div className="flex justify-center gap-10 flex-wrap row-start-3 mt-[-100px]">
        <div className="flex flex-wrap justify-center gap-10">
          <Card className="max-w-[350px] mt-10 bg-[#fed6ef] ">
            <CardHeader className="bg-[#ffbf22]">
              <CardTitle className="text-xl text-bl">Starter Plan</CardTitle>
              <CardDescription className="text-6xl text-black font-bold    ">
                ₹25,000
              </CardDescription>
            </CardHeader>
            <CardContent className="bg-[#ffbf22]">
              <p className="text-sm">
                Ideal for: Small businesses and startups aiming to establish a
                robust presence on social media platforms.
              </p>
              <p className="text-sm mt-4">Valid for 3 months</p>
              <Button className="mt-6 w-full text-xl">Get Started </Button>
            </CardContent>
            <CardFooter className="flex flex-col pt-4 bg-[#fed6ef] gap-4 ">
              <div className="flex gap-5 items-center">
                <IoIosCheckmarkCircle className="text-sm" />
                <p className="text-sm">
                  Basic Social Media Management for one platform
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <IoIosCheckmarkCircle className="text-sm" />
                <p className="text-sm">
                  Content creation and posting (up to 3 posts per week)
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <IoIosCheckmarkCircle className="text-sm" />
                <p className="text-sm">
                  Monthly performance reports and analytics
                </p>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-[350px] mt-10 bg-[#fed6ef]">
            <CardHeader className="bg-[#ffbf22]">
              <CardTitle className="text-xl font-extrabold">
                Professional Plan
              </CardTitle>
              <CardDescription className="text-6xl text-black font-bold    ">
                ₹70,000
              </CardDescription>
            </CardHeader>
            <CardContent className="bg-[#ffbf22]">
              <p className="text-sm">
                Suited for: Growing businesses and mid-sized companies aiming to
                expand their digital footprint.
              </p>
              <p className="text-sm mt-4">Valid for 3 months</p>
              <Button className="mt-6 w-full  text-xl">Get Started </Button>
            </CardContent>
            <CardFooter className="flex flex-col pt-4 bg-[#fed6ef] gap-4 ">
              <div className="flex gap-5 items-center">
                <IoIosCheckmarkCircle className="text-sm" />
                <p className="text-sm">
                  Social Media Management for up to two platforms
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <IoIosCheckmarkCircle className="text-sm" />
                <p className="text-sm">
                  Customized content creation and posting (up to 5 posts/week)
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <IoIosCheckmarkCircle className="text-sm" />
                <p className="text-sm">
                  Audience engagement and community building
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <IoIosCheckmarkCircle className="text-sm" />
                <p className="text-sm">
                  Monthly performance reports with insights and recommendation
                </p>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-[350px] mt-10 bg-[#fed6ef] text-white">
            <CardHeader className="bg-black">
              <CardTitle className="text-xl font-extrabold">
                Premium Plan
              </CardTitle>
              <CardDescription className="text-6xl text-black font-bold text-white">
                ₹1,50,000
              </CardDescription>
            </CardHeader>
            <CardContent className="bg-black">
              <p className="text-sm ">
                Designed for: Larger enterprises and brands aiming for a
                comprehensive and impactful social media.
              </p>
              <p className="text-sm mt-4">Valid for 3 months</p>
              <Button className="mt-5 w-full text-xl bg-white text-black hover:bg-slate-300 ">
                Get Started
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col pt-4 bg-[#fed6ef] gap-4 text-black">
              <div className="flex gap-5 items-center">
                <IoIosCheckmarkCircle />
                <p className="text-sm">
                  Social Media Management across multiple platforms
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <IoIosCheckmarkCircle />
                <p className="text-sm">
                  Strategic content creation and posting (up to 7 posts/week)
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <IoIosCheckmarkCircle />
                <p className="text-sm">
                  Advanced analytics and performance tracking
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <IoIosCheckmarkCircle />
                <p className="text-sm">
                  Social media advertising strategy and implementation
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
