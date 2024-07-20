import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ changeTheme, theme }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const openHamMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="header backdrop-blur-3xl dark:bg-[#ffffff1a] bg-[#f0f0f0] dark:shadow-inner shadow-2xl p-3 px-5 flex rounded-2xl items-center justify-between sticky top-0 z-10">
        <Link to="/" className="logo text-2xl leading-none tracking-tighter">
          {"<S />"}
        </Link>
        <div className="menu hidden sm:flex gap-8">
          <Link to="/" className="hover-items hover:scale-110 cursor-pointer ">
            Home
          </Link>
          <Link to="/resume" className="hover-items hover:scale-110 cursor-pointer">
            Resume
          </Link>
          <Link to="/projects" className="hover-items hover:scale-110 cursor-pointer">
            Projects
          </Link>
          <Link to="/about" className="hover-items hover:scale-110 cursor-pointer">
            About
          </Link>
          <Link to="/contact" className="hover-items hover:scale-110 cursor-pointer">
            Contact
          </Link>
        </div>
        <ul className="navitems sm:flex hidden gap-5">
          <li className="hover:bg-dark-hovercolor cursor-pointer px-2 py-0.5 rounded-md">
            <a href="/">
              <i className="bi bi-linkedin text-lg"></i>
            </a>
          </li>
          <li className="hover:bg-dark-hovercolor cursor-pointer px-2 py-0.5 rounded-md">
            <a href="/">
              <i className="bi bi-github text-lg"></i>
            </a>
          </li>
          <li className="hover:bg-dark-hovercolor cursor-pointer px-2 py-0.5 rounded-md">
            <a>
              <i className="bi bi-twitter-x text-lg"></i>
            </a>
          </li>
          <li className="py-0.5 px-1.5">|</li>
          <li
            className="hover:bg-dark-hovercolor cursor-pointer px-2 py-0.5 rounded-md"
            onClick={() => changeTheme()}
          >
            {theme === "light" ? (
              <i className="bi bi-sun text-xl"></i>
            ) : (
              <i className="bi bi-moon-stars-fill text-xl"></i>
            )}
          </li>
        </ul>
        <div
          onClick={() => openHamMenu()}
          className="sm:hidden block hover:bg-dark-hovercolor cursor-pointer px-2 py-0.5 rounded-md"
        >
          <i className="bi bi-list text-xl"></i>
        </div>
      </div>
      {openMenu && (
        <div className="absolute w-full flex flex-col gap-5 dark:bg-dark-hammenu bg-light-skillscardbg shadow-2xl left-0 top-0 z-20">
          <div className="text-right p-2" onClick={() => openHamMenu()}>
            <i className="bi bi-x-lg text-2xl"></i>
          </div>
          <div className="flex flex-col gap-3 px-2 pb-8 text-xl">
            <Link to="/" onClick={()=>openHamMenu()} className="cursor-pointer">
              Home
            </Link>
            <Link to="/resume" onClick={()=>openHamMenu()} className="cursor-pointer">
              Resume
            </Link>
            <Link to="/projects" onClick={()=>openHamMenu()} className=" cursor-pointer">
              Projects
            </Link>
            <Link to="/about" onClick={()=>openHamMenu()} className=" cursor-pointer">
              About
            </Link>
            <Link to="/contact" onClick={()=>openHamMenu()} className=" cursor-pointer">
              Contact
            </Link>
            <div onClick={()=>changeTheme()}>Change Theme</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
