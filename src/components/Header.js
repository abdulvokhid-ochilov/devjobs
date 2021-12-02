import ModeSwitcher from "./ModeSwitcher";
import React from "react";
import { Link } from "react-router-dom";
// import Container from "./Container";
// import ModeSwitch from './ModeSwitch';

const Header = () => {
  return (
    <header className="focus:ring focus:ring-violet-light bg-violet-dark bg-cover bg-header-mobile sm:bg-header-tablet lg:bg-header-desktop bg-no-repeat h-[6.8rem] md:h-[8.1rem] md:rounded-bl-[5rem]">
      {/* <Container> */}
      <div className="pt-[1.6rem] md:pt-[2.1rem] flex justify-between">
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
