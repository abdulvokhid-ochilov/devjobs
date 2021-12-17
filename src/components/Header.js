import React from "react";
import { Link } from "react-router-dom";
// import Container from './Container';
import ModeSwitcher from "./ModeSwitcher";

const Header = () => {
  return (
    <header className="bg-cover h-[136px] bg-header-mobile sm:bg-header-tablet sm:h-[160px] md:bg-header-desktop sm:rounded-bl-[100px]">
      {/* <Container> */}
      <div className="w-[330px] sm:w-[690px] md:w-[1110px] mx-auto pt-[32px] sm:pt-[42px] md:pt-[44px] flex justify-between">
        <Link to="../">
          <h1 className="text-3xl font-extrabold text-white">devjobs</h1>
        </Link>
        <ModeSwitcher />
      </div>
      {/* </Container> */}
    </header>
  );
};

export default Header;
