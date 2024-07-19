import React from "react";

const Project = ({data, order}) => {
  const {logo, title, desc, github_url, live_url, image} = data;
  return (
    <div className={`project w-full flex ${order ? "flex-row-reverse" : ""} dark:bg-dark-skillscardbg bg-light-skillscardbg shadow-inner p-8 rounded-2xl`}>
      <div className="leftside w-full sm:w-1/2 flex flex-col gap-12">
        <div className="topside flex flex-col gap-2">
          <div className="w-20 h-20">
            <img
              src={logo}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-3xl font-semibold">{title}</div>
          <div className="font-normal text-dark-graytextcolor">
            {desc}
          </div>
        </div>
        <div className="bottomside flex gap-4 items-center">
          <a href={github_url} target="_blank" className="flex items-center gap-3 px-3 py-1 border-[.5px] border-[#808080] rounded-2xl text-dark-graytextcolor hover:scale-105">
            <span>Github</span>
            <span><i className="bi bi-arrow-right"></i></span>
          </a>
          <a href={live_url} target="_blank" className="flex items-center gap-3  px-3 py-1 border-[.5px] border-[#808080] rounded-2xl text-dark-graytextcolor hover:scale-105">
            <span>Live</span>
            <span><i className="bi bi-arrow-right"></i></span>
          </a>
        </div>
      </div>
      <div className={`rightside sm:w-1/2 hidden sm:flex ${order? "justify-start": "justify-end"}`}>
        <img src={image} alt="logo" className="w-[90%]" />
      </div>
    </div>
  );
};

export default Project;
