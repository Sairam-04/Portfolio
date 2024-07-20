import React from "react";
import Experience from "./Experience";

const Work = () => {
  return (
    <div className="work flex flex-col gap-4 py-10">
      <div className="heading flex justify-between">
        <div className="text-4xl font-semibold">Work Experience</div>
        {window.location.pathname.includes("resume") && (
          <a href="/resume/Resume_Sairam.pdf" download="Resume_Sairam.pdf" className={`text-dark-textcolor ${window.location.pathname.includes("resume") ? "hidden" : ""} sm:block sm:text-lg text-[13px] px-5 sm:py-3 py-1.5 font-medium drop-shadow-2xl shadow-[inset_-12px_-8px_40px_#46464620] bg-gradient-to-b from-[#212121] to-[#131313] hover:scale-105 rounded-lg`}>
            Download Resume
          </a>
        )}
      </div>
      <Experience />
    </div>
  );
};

export default Work;
