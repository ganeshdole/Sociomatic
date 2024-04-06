import footerImage from "@/assets/images/footer-image.svg";

const Footer = () => {
  return (
    <div>
      <img src={footerImage} alt="" className=" w-full sm:w-[50%]" />
      <div className="flex flex-col items-center px-3 py-2 md:px-12 lg:px-10 ">
        <div className=" w-full mt-[-200px] z-[-10]">h</div>
        <div className="w-full ">
          <h2>Sociomatic</h2>
          <p>Where Creativity Meets Strategy</p>
        </div>
        <div className="">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
