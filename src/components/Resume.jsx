import React from "react";
import Work from "./Work";
import Education from "./Education";

const Resume = () => {
  return (
    <div className="">
      <Work />
      <div className="flex flex-col gap-8 py-4">
        <div className="heading text-4xl font-semibold">Education</div>{" "}
        <Education />
      </div>
      {/* <div className="flex justify-center">
        
      </div> */}
    </div>
  );
};

export default Resume;
