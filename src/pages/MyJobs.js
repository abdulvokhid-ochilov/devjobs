import { Link } from "react-router-dom";

const MyJobs = () => {
  return (
    <div className="-mt-10 min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] flex flex-col items-center justify-center">
      <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Jobs database
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
          Information about posted jobs.
        </p>
      </div>
      <ul className="w-full flex flex-col">
        <li className="border-gray-400 flex flex-row mb-2">
          <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <Link to="/myjobs/34" className="block relative">
                <img
                  alt="profil"
                  src="https://cdn-icons-png.flaticon.com/512/306/306424.png"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </Link>
            </div>
            <div className="flex-1 pl-1 md:mr-16">
              <div className="font-medium dark:text-white">Jean Marc</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                Developer
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-xs">
              6:00 AM
            </div>
            <button className="w-24 text-right flex justify-end">
              <svg
                width="12"
                fill="currentColor"
                height="12"
                className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </li>
        <li className="border-gray-400 flex flex-row mb-2">
          <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <Link to="/myjobs/34" className="block relative">
                <img
                  alt="profil"
                  src="https://cdn-icons-png.flaticon.com/512/306/306424.png"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </Link>
            </div>
            <div className="flex-1 pl-1 md:mr-16">
              <div className="font-medium dark:text-white">Designer</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                Charlie Moi
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-xs">
              6:00 AM
            </div>
            <button className="w-24 text-right flex justify-end">
              <svg
                width="12"
                fill="currentColor"
                height="12"
                className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </li>
        <li className="border-gray-400 flex flex-row mb-2">
          <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <Link to="/myjobs/34" className="block relative">
                <img
                  alt="profil"
                  src="https://cdn-icons-png.flaticon.com/512/306/306424.png"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </Link>
            </div>
            <div className="flex-1 pl-1 md:mr-16">
              <div className="font-medium dark:text-white">CEO</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                Marine Jeanne
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-xs">
              6:00 AM
            </div>
            <button className="w-24 text-right flex justify-end">
              <svg
                width="12"
                fill="currentColor"
                height="12"
                className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </li>
        <li className="border-gray-400 flex flex-row mb-2">
          <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <Link to="/myjobs/34" className="block relative">
                <img
                  alt="profil"
                  src="https://cdn-icons-png.flaticon.com/512/306/306424.png"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </Link>
            </div>
            <div className="flex-1 pl-1 md:mr-16">
              <div className="font-medium dark:text-white">CTO</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                Boby PArk
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-xs">
              6:00 AM
            </div>
            <button className="w-24 text-right flex justify-end">
              <svg
                width="12"
                fill="currentColor"
                height="12"
                className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MyJobs;
