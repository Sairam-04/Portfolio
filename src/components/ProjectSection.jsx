import React from "react";
import Project from "./Project";
import { projectsJson } from "../data/jsonData";

const ProjectSection = () => {
  return (
    <div className="projectsec flex flex-col gap-5 py-5">
      <div className="heading text-4xl text-light-skillscardtext dark:text-dark-skillscardtext font-bold pt-2">
        Projects
      </div>
      <div className="flex flex-col gap-8">
        {projectsJson.map((ele, index) => {
          return <Project data={ele} order={index % 2 !== 0} key={ele.title} />;
        })}
      </div>
      {/* <div className="flex justify-center">
        <button className="text-dark-textcolor sm:text-lg text-[13px] px-5 sm:py-3 py-1.5 font-medium drop-shadow-2xl shadow-[inset_-12px_-8px_40px_#46464620] bg-gradient-to-b from-[#212121] to-[#131313] hover:scale-105 rounded-lg">
          View More Projects
        </button>
      </div> */}
    </div>
  );
};

export default ProjectSection;
