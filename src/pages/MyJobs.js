import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Context from "../store/context";

const MyJobs = () => {
  const ctx = useContext(Context);

  return (
    <div className="-mt-10 min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] flex flex-col items-center justify-center">
      {/* <!-- component --> */}

      {/* <!-- Table --> */}
      <div className="w-full bg-white dark:bg-blue-dark shadow rounded border border-grey-light dark:border-grey-hover">
        <header className="px-5 py-4 border-b border-grey-light dark:border-grey-hover">
          <h2 className="font-semibold">Customers</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-grey-light dark:bg-blue-dark">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Company Name</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      Company Website
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Position</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Location</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Type</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Edit</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Delete</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-grey-light dark:divide-grey-hover">
                {ctx.userData.postedJobs.map((job) => (
                  <tr key={job["_id"]}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-md bg-yellow-500 p-1"
                            src={job.logo}
                            width="40"
                            height="40"
                            alt={job.company}
                          />
                        </div>
                        <div className="font-medium">{job.company}</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{job.website}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium">
                        {job.position}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium">
                        {job.location}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium">
                        {job.contract}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center text-green-500 hover:text-black dark:hover:text-white hover:cursor-pointer">
                        <FontAwesomeIcon icon={faEdit} />
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center text-red-500 hover:text-black dark:hover:text-white hover:cursor-pointer">
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div classNameNameName="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
        <h3 classNameNameName="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Jobs database
        </h3>
        <p classNameNameName="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
          Information about posted jobs.
        </p>
      </div>
      <ul classNameNameName="w-full flex flex-col">
        <li classNameNameName="border-gray-400 flex flex-row mb-2">
          <div classNameNameName="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
            <div classNameNameName="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <Link to="/myjobs/34" classNameNameName="block relative">
                <img
                  alt="profil"
                  src="https://cdn-icons-png.flaticon.com/512/306/306424.png"
                  classNameNameName="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </Link>
            </div>
            <div classNameNameName="flex-1 pl-1 md:mr-16">
              <div classNameNameName="font-medium dark:text-white">Jean Marc</div>
              <div classNameNameName="text-gray-600 dark:text-gray-200 text-sm">
                Developer
              </div>
            </div>
            <div classNameNameName="text-gray-600 dark:text-gray-200 text-xs">
              6:00 AM
            </div>
            <button classNameNameName="w-24 text-right flex justify-end">
              <svg
                width="12"
                fill="currentColor"
                height="12"
                classNameNameName="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </li>
        <li classNameNameName="border-gray-400 flex flex-row mb-2">
          <div classNameNameName="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
            <div classNameNameName="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <Link to="/myjobs/34" classNameNameName="block relative">
                <img
                  alt="profil"
                  src="https://cdn-icons-png.flaticon.com/512/306/306424.png"
                  classNameNameName="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </Link>
            </div>
            <div classNameNameName="flex-1 pl-1 md:mr-16">
              <div classNameNameName="font-medium dark:text-white">Designer</div>
              <div classNameNameName="text-gray-600 dark:text-gray-200 text-sm">
                Charlie Moi
              </div>
            </div>
            <div classNameNameName="text-gray-600 dark:text-gray-200 text-xs">
              6:00 AM
            </div>
            <button classNameNameName="w-24 text-right flex justify-end">
              <svg
                width="12"
                fill="currentColor"
                height="12"
                classNameNameName="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </li>
        <li classNameNameName="border-gray-400 flex flex-row mb-2">
          <div classNameNameName="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
            <div classNameNameName="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <Link to="/myjobs/34" classNameNameName="block relative">
                <img
                  alt="profil"
                  src="https://cdn-icons-png.flaticon.com/512/306/306424.png"
                  classNameNameName="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </Link>
            </div>
            <div classNameNameName="flex-1 pl-1 md:mr-16">
              <div classNameNameName="font-medium dark:text-white">CEO</div>
              <div classNameNameName="text-gray-600 dark:text-gray-200 text-sm">
                Marine Jeanne
              </div>
            </div>
            <div classNameNameName="text-gray-600 dark:text-gray-200 text-xs">
              6:00 AM
            </div>
            <button classNameNameName="w-24 text-right flex justify-end">
              <svg
                width="12"
                fill="currentColor"
                height="12"
                classNameNameName="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </li>
        <li classNameNameName="border-gray-400 flex flex-row mb-2">
          <div classNameNameName="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
            <div classNameNameName="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <Link to="/myjobs/34" classNameNameName="block relative">
                <img
                  alt="profil"
                  src="https://cdn-icons-png.flaticon.com/512/306/306424.png"
                  classNameNameName="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </Link>
            </div>
            <div classNameNameName="flex-1 pl-1 md:mr-16">
              <div classNameNameName="font-medium dark:text-white">CTO</div>
              <div classNameNameName="text-gray-600 dark:text-gray-200 text-sm">
                Boby PArk
              </div>
            </div>
            <div classNameNameName="text-gray-600 dark:text-gray-200 text-xs">
              6:00 AM
            </div>
            <button classNameNameName="w-24 text-right flex justify-end">
              <svg
                width="12"
                fill="currentColor"
                height="12"
                classNameNameName="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </li>
      </ul> */}
    </div>
  );
};

export default MyJobs;
