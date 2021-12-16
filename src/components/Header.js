import React from "react";
import { Link } from "react-router-dom";
// import Container from './Container';
// import ModeSwitch from './ModeSwitch';

const Header = () => {
  return (
    <header className="bg-cover h-32 bg-header-mobile sm:bg-header-tablet sm:h-40 md:bg-header-desktop sm:rounded-bl-lg">
      {/* <Container> */}
      <div className="w-96 m-auto">
        <Link to="../">
          <h1 className="text-3xl font-extrabold text-white">devjobs</h1>
        </Link>
        {/* <ModeSwitch /> */}
      </div>
      {/* </Container> */}
    </header>
  );
};

export default Header;
