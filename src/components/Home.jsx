import { useEffect, useState } from "react";
import Gradient from "./Gradient";
import Header from "./Header";
import { getTheme, setThemeLocalStorage } from "../utils/localStorage";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const initialTheme = getTheme();
  const [theme, setTheme] = useState(() =>
    initialTheme ? initialTheme : "dark"
  );

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      setThemeLocalStorage("dark");
    } else {
      document.body.classList.remove("dark");
      setThemeLocalStorage("light");
    }
  }, [theme]);

  return (
    <>
      <div className="w-full py-4 px-4 relative backdrop-blur-lg">
        <Gradient />
        <div className="sm:w-4/5 w-full mx-auto">
          <Header changeTheme={changeTheme} theme={theme} />
          <Outlet />
        </div>
        {/* <div id="cursor" className="w-6 h-6 rounded-full bg-white fixed"></div> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
