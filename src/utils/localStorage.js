export  const setThemeLocalStorage = (theme) =>{
    localStorage.setItem("theme", theme);
}
export const getTheme = () =>{
    return localStorage.getItem("theme");
}