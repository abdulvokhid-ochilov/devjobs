import React, { useState, useContext, useEffect } from "react";
import { ReactComponent as Moon } from "../assets/desktop/icon-moon.svg";
import { ReactComponent as Sun } from "../assets/desktop/icon-sun.svg";
import Context from "../store/context";

const ModeSwitcher = () => {
  const ctx = useContext(Context);
  const { darkMode } = ctx;
  const [toggle, setToggle] = useState();

  const toggleClass = " transform translate-x-[24px]";

  const handleThemeChange = (condition) => {
    if (condition) {
      ctx.setMode(true);
    } else {
      ctx.setMode(false);
    }
  };

  useEffect(() => {
    setToggle(darkMode);
  }, [darkMode]);

  return (
    <div className="flex justify-between items-center w-[112px]">
      <Sun />
      <div>
        <div
          className="group w-[48px] h-[24px] flex items-center bg-white rounded-full p-[5px] cursor-pointer"
          onClick={() => {
            handleThemeChange(!toggle);
          }}
        >
          <div
            className={
              "bg-violet-dark hover:bg-violet-light h-[14px] w-[14px] rounded-full transform duration-[400ms] ease-in-out" +
              (toggle ? toggleClass : null)
            }
          ></div>
        </div>
      </div>
      <Moon />
    </div>
  );
};

export default ModeSwitcher;
