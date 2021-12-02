import React from "react";
import { ReactComponent as Moon } from "../assets/desktop/icon-moon.svg";
import { ReactComponent as Sun } from "../assets/desktop/icon-sun.svg";
// import { useDarkMode } from "../hooks/toggleMode";

const ModeSwitcher = () => {
  //   const [isDark, setIsDark] = useDarkMode();
  return (
    <div className="flex justify-between items-center w-[5.6rem]">
      <Sun />
      <div>
        <input
          id="toggle"
          //   checked={isDark}
          checked
          //   onChange={(e) => setIsDark(e.target.checked)}
          type="checkbox"
          className="opacity-0 absolute -top-12"
        />
        <label htmlFor="toggle">
          <span className="block opacity-0 h-0 w-0">Mode toggle</span>
          <span className="group cursor-pointer w-[2.8rem] h-[1.4rem] flex items-center bg-white rounded-full p-[0.4rem]">
            <span className="toggle-dot transform duration-300 ease-in-out w-[0.8rem] h-[0.8rem] bg-violet-dark group-hover:bg-violet-light rounded-full"></span>
          </span>
        </label>
      </div>
      <Moon />
    </div>
  );
};

export default ModeSwitcher;
