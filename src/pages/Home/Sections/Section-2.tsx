import React from "react";

const Section2: React.FC = () => {
  return (
    <section className="px-3 bg-[#ffbf22] sm:px-10 md:px-16 lg:px-32">
      <div className="flex flex-col sm:flex-row h-fit sm:min-h-[420px] pt-5 ">
        <div className=" flex justify-center  items-center w-full">
          <p className="text-4xl  tracking-wide max-w-[400px]">
            With the Right Team, Great Things Can Happen
          </p>
        </div>
        <div className="flex justify-center  items-center w-full p-12">
          <p>
            Elevate your brand's online presence with Sociomatic! We specialize
            in expert social media management, crafting engaging content, and
            strategic event management to create memorable experiences that
            leave a lasting impact. At Sociomatic, we blend the art of social
            media management with the precision of event coordination. Boost
            your brand's visibility through our tailored strategies, while our
            meticulous event planning ensures seamless and unforgettable
            occasions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
