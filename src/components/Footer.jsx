import React from "react";
import { Link } from "react-router-dom";
import Gradient from "./Gradient";

const Footer = () => {
  return (
    <div className="w-full relative backdrop-blur-lg">
      <div className="border-t-[.1px] border-[#454545] py-10 flex flex-col gap-8 justify-center items-center">
        <div className="text-4xl font-semibold">{"<S />"}</div>
        <div className="flex sm:flex-row flex-col gap-3 sm:gap-14 text-lg dark:text-dark-skillscardtext">
          <Link to="/" className="dark:hover:text-[#b0b0b0] hover:scale-110">
            Resume
          </Link>
          <Link to="/" className="dark:hover:text-[#b0b0b0] hover:scale-110">
            Projects
          </Link>
          <Link to="/" className="dark:hover:text-[#b0b0b0] hover:scale-110">
            Work
          </Link>
          <Link to="/" className="dark:hover:text-[#b0b0b0] hover:scale-110">
            About
          </Link>
          <Link to="/" className="dark:hover:text-[#b0b0b0] hover:scale-110">
            Contact
          </Link>
        </div>
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/sairam-ramavath/" target="_blank" className="dark:hover:text-[#b0b0b0] hover:scale-110">
            <i className="bi bi-linkedin text-2xl "></i>
          </a>
          <a href="https://github.com/Sairam-04/" target="_blank" className="dark:hover:text-[#b0b0b0] hover:scale-110">
          <i className="bi bi-github text-2xl"></i>
          </a>
          <a href="https://x.com/SairamRamavath1" target="_blank" className="dark:hover:text-[#b0b0b0] hover:scale-110">
          <i className="bi bi-twitter-x text-2xl"></i>
          </a>
          <a href="mailto: sairamramavath@gmail.com" className="dark:hover:text-[#b0b0b0] hover:scale-110">
            <i className="bi bi-envelope-fill text-2xl"></i>
          </a>
        </div>
      </div>
      <div className="border-t-[.1px] border-[#363636] flex justify-center py-4">
        &copy; 2024 | All rights reserveed
      </div>
      <Gradient />
    </div>
  );
};

export default Footer;
