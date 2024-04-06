import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GetStarted: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <h3 className="text-4xl text-center">
        Get Ready to Maximize Your Productivity <br /> With Our Workflow
        Solutions
      </h3>
      <Button className="mt-10">
        <Link to="/pricing-plans">Get Started</Link>
      </Button>
    </div>
  );
};

export default GetStarted;
