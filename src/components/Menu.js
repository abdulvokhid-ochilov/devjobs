import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../store/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const [menuState, setMenuState] = useState(false);
  const authCtx = useContext(Context);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div className="relative inline-block text-left">
      <div>
        {!isLoggedIn ? (
          <Link
            to="../login"
            className="w-full px-[14px] py-[8px] flex items-center justify-center rounded bg-white hover:cursor-pointer text-violet-dark hover:text-violet-light font-semibold"
          >
            Log in
            <FontAwesomeIcon
              icon={faSignInAlt}
              className="ml-[6px]"
            ></FontAwesomeIcon>
          </Link>
        ) : (
          <button
            onClick={() => setMenuState(!menuState)}
            type="button"
            className=" border border-gray-300 bg-white dark:bg-blue-dark shadow-sm flex items-center justify-center w-full rounded  px-4 py-2 font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-grey-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
            id="options-menu"
          >
            <span className="hidden sm:flex">Menu </span>

            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
            </svg>
          </button>
        )}
      </div>
      <div
        className={`${
          menuState ? "" : "hidden"
        } z-10 origin-top-right absolute right-0 mt-2 w-44 sm:w-56 rounded-md shadow-lg bg-white dark:bg-blue-dark ring-1 ring-black ring-opacity-5`}
      >
        <div
          className="py-1 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <Link
            onClick={() => setMenuState(!menuState)}
            to={"../profile"}
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>Edit Profile</span>
            </span>
          </Link>
          <Link
            onClick={() => setMenuState(!menuState)}
            to={"../post-job"}
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>Post a Job</span>
            </span>
          </Link>
          <Link
            onClick={() => setMenuState(!menuState)}
            to={"../myjobs"}
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>Posted Jobs</span>
            </span>
          </Link>

          <Link
            onClick={() => setMenuState(!menuState)}
            to={"/applicant/info"}
            state={authCtx.userData}
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>About</span>
            </span>
          </Link>
          <Link
            onClick={() => {
              setMenuState(!menuState);
              authCtx.logout();
            }}
            to={"../"}
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>
                <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon> Log out
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
