import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../store/context";

const ApplicantInfo = () => {
  const ctx = useContext(Context);

  return (
    <div className="-mt-10 min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] bg-white dark:bg-blue-dark shadow overflow-hidden rounded">
      <div className="flex items-center px-4 py-5 sm:px-6">
        <Link to="" className="block relative">
          <img
            alt="profile"
            src={ctx.userData.photo}
            className="mx-auto object-cover rounded-full h-16 w-16"
          />
        </Link>
        <div className="ml-3">
          <h3 className="text-lg leading-6 font-medium dark:text-white">
            User Information
          </h3>
          <p className="mt-1 max-w-2xl text-grey-dark">
            Personal details and resume.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 dark:bg-blue-dark px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="font-medium text-grey-dark">Full name</dt>
            <dd className="mt-1 dark:text-white sm:mt-0 sm:col-span-2">
              {`${ctx.userData.firstName} ${ctx.userData.lastName}`}
            </dd>
          </div>

          <div className="bg-gray-50 dark:bg-blue-dark px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-grey-dark">Email address</dt>
            <dd className="mt-1 dark:text-white sm:mt-0 sm:col-span-2">
              {ctx.userData.email}
            </dd>
          </div>

          <div className="bg-gray-50 dark:bg-blue-dark px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-grey-dark">About</dt>
            <dd className="mt-1 dark:text-white sm:mt-0 sm:col-span-2">
              {ctx.userData.about ? ctx.userData.about : "No information"}
            </dd>
          </div>
          <div className="bg-white dark:bg-blue-dark border-t border-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-grey-dark">Attachments</dt>
            <dd className="mt-1  dark:text-white sm:mt-0 sm:col-span-2">
              <ul className="border border-grey-med dark:border-grey-hover rounded divide-y divide-grey-med">
                {ctx.userData.resume === "undefined" || !ctx.userData.resume ? (
                  <p className="p-2">Resume has not been uploaded yet.</p>
                ) : (
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <FontAwesomeIcon
                        icon={faPaperclip}
                        className="flex-shrink-0 h-5 w-5 text-grey-med"
                        aria-hidden="true"
                      />
                      <span className="ml-2 flex-1 w-0 truncate dark:text-white">
                        resume.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link
                        target="_blank"
                        to="/"
                        onClick={() => {
                          window.open(ctx.userData.resume);
                        }}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </Link>
                    </div>
                  </li>
                )}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ApplicantInfo;
