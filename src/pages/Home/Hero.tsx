import { Button } from "@/components/ui/button";
import { FcCollaboration } from "react-icons/fc";
import { GiLockSpy } from "react-icons/gi";
import { BsCalendar2Heart } from "react-icons/bs";
import HeroImg from "@/assets/images/hero.svg";

const Hero = () => {
  return (
    <section className="flex  flex-col sm:grid grid-cols-2  gap-2 px-3 sm:px-10 md:px-16 lg:px-32">
      <div className="col-end-3 row-span-full">
        <img src={HeroImg} className="w-full" />
      </div>
      <div>
        <div className="md:grid grid-rows-4  md:mt-32 ">
          <h2 className="text-2xl md:text-5xl col-span-1 row-start-1 row-end-2">
            Communicate.
            <br /> Collaborate. Create
          </h2>
          <p className="font-proxima mt-5 row-start-2 row-end-3">
            Sociomatic provides an effective and powerful way to manage your
            social and community presence.
          </p>
          <Button className="w-full md:w-fit px-4 row-start-3 row-end-4 mt-5">
            Get Started
          </Button>
          <div className="flex   flex-col md:flex-row row-span- gap-3">
            <div className="flex my-4 mx-1 md:m-0 gap-4 items-center">
              <GiLockSpy className="text-4xl bg-black text-white" />
              <p className="sm:max-w-[100px]">Speed & Security</p>
            </div>
            <div className="flex my-4 mx-1 md:m-0 gap-4 items-center">
              <BsCalendar2Heart className="text-4xl" />
              <p className="sm:max-w-[100px]">Flexibility & Scalability</p>
            </div>
            <div className="flex my-4 mx-1 md:m-0 gap-4 items-center">
              <FcCollaboration className="text-4xl bg-black" />
              <p className="sm:max-w-[100px]">Better Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
