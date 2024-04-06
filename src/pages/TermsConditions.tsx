import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="">
      <div className="bg-[#ffd6ef] p-3 py-16 sm:p-10 md:p-16 lg:p-32">
        <h1 className="text-4xl">Terms & Conditions</h1>
      </div>
      <div className="p-3  sm:p-10 md:p-16 lg:p-32 max-w-[800px]">
        <p>
          Terms and conditions (“Terms”) are a set of legal terms defined by the
          owner of a website. They set forth the terms and conditions governing
          the activities of the website visitors on the said website and the
          relationship between the site visitors and the website owner. Terms
          must be defined according to the specific needs and nature of each
          website. For example, a website offering products to customers in
          e-commerce transactions requires Terms that are different from the
          Terms of a website only providing information. Terms provide the
          website owner the ability to protect themselves from potential legal
          exposure.
        </p>
      </div>
      <div className="px-3 sm:px-10 md:px-16 lg:px-32 max-w-[800px]">
        <p className="font-bold">
          The explanations and information provided herein are only general
          explanations, information and samples. You should not rely on this
          article as legal advice or as recommendations regarding what you
          should actually do. We recommend that you seek legal advice to help
          you understand and to assist you in the creation of your privacy
          policy.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
