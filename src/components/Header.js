import React from "react";
import { Link } from "react-router-dom";
import ModeSwitcher from "./ModeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-cover h-[136px] bg-header-mobile sm:bg-header-tablet sm:h-[160px] md:bg-header-desktop sm:rounded-bl-[100px]">
      <div className="min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] pt-[32px] sm:pt-[42px] md:pt-[44px] flex justify-between">
        <Link to="../">
          <h1 className="text-3xl font-extrabold text-white">devjobs</h1>
        </Link>
        <div className="flex justify-between">
          <div class="flex items-center mr-[30px]">
            <Link to="../settings" className="flex items-center">
              <FontAwesomeIcon
                icon={faUserCircle}
                size="2x"
                color="white"
                className="hover:text-grey-hover"
              />
            </Link>
          </div>
          <ModeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
