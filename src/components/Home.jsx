import { useEffect, useState } from "react";
import Gradient from "./Gradient";
import Header from "./Header";
import { getTheme, setThemeLocalStorage } from "../utils/localStorage";
import { Outlet } from "react-router-dom";

const Home = () => {
    const initialTheme = getTheme();
    const [theme, setTheme] = useState(()=>initialTheme ? initialTheme : "dark");
    
    const changeTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        console.log(newTheme)
        setTheme(newTheme);
    };
    useEffect(()=>{
        console.log("-----")
        if(theme === "dark"){
            document.body.classList.add("dark");
            setThemeLocalStorage("dark")
        }else{
            document.body.classList.remove("dark");
            setThemeLocalStorage("light")
        }
    },[theme])


    return (
        <div className="h-screen w-full dark:bg-dark-bgcolor dark:text-dark-textcolor bg-light-bgcolor text-light-textcolor py-4 relative backdrop-blur-lg">
            <Gradient />
            <div className="w-4/5 mx-auto">
                <Header changeTheme={changeTheme} theme={theme} />
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
