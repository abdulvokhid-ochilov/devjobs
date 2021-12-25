import React, { useState, useEffect } from "react";
import { ReactComponent as Moon } from "../assets/desktop/icon-moon.svg";
import { ReactComponent as Sun } from "../assets/desktop/icon-sun.svg";

const ModeSwitcher = () => {
  const [toggle, setToggle] = useState(true);

  const toggleClass = " transform translate-x-[24px]";

  useEffect(() => {
    if (localStorage.theme === false) {
      setToggle(false);
      document.documentElement.classList.add("dark");
    }
  }, []);

  console.log(toggle);

  document.documentElement.classList.add("dark");

  return (
    <div className="flex justify-between items-center w-[112px]">
      <Sun />
      <div>
        <div
          className="group w-[48px] h-[24px] flex items-center bg-white rounded-full p-[5px] cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
            localStorage.theme = !toggle;
            toggle
              ? document.documentElement.classList.remove("dark")
              : document.documentElement.classList.add("dark");
          }}
        >
          <div
            className={
              "bg-violet-dark hover:bg-violet-light h-[14px] w-[14px] rounded-full transform duration-[400ms] ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>
      </div>
      <Moon />
    </div>
  );
};

export default ModeSwitcher;
