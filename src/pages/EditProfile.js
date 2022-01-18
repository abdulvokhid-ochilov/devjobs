// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const EditProfile = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="-mt-10 min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={submitHandler}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white dark:bg-blue-dark space-y-6 sm:p-6">
                <div>
                  <label className="block text-[18px]">About</label>
                  <div className="mt-1 flex items-center">
                    <textarea
                      required
                      id="about"
                      name="about"
                      rows={3}
                      className="p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                      placeholder=" Brief description for your profile."
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 py-5 bg-white dark:bg-blue-dark space-y-6 sm:p-6">
                <div>
                  <label className="block text-[18px]">Profile Photo</label>
                  <div className="mt-1 flex items-center">
                    <span className="flex items-center justify-center h-12 w-12 rounded-2xl overflow-hidden bg-grey-light dark:text-grey-btn">
                      <FontAwesomeIcon icon={faUserCircle} size="lg" />
                    </span>
                    <input
                      className="ml-[17px] cursor-pointer bg-white border-violet-dark dark:text-black border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light text-sm rounded"
                      id="profile"
                      type="file"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[18px]">Resume</label>
                  <div className="mt-1 flex items-center">
                    <span className="flex items-center justify-center h-12 w-12 rounded-2xl overflow-hidden bg-grey-light dark:text-grey-btn">
                      <FontAwesomeIcon icon={faFile} size="lg" />
                    </span>
                    <input
                      className="ml-[17px] cursor-pointer bg-white border-violet-dark dark:text-black border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light text-sm rounded"
                      id="resume"
                      type="file"
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 py-5 bg-white dark:bg-blue-dark sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-[18px]">First name</label>
                    <input
                      required
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="mt-1 p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block  text-[18px]">Last name</label>
                    <input
                      required
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="mt-1 p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-[18px]">Email address</label>
                    <input
                      required
                      type="mail"
                      name="email-address"
                      id="email-address"
                      className="mt-1 p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-[18px]">Password</label>
                    <input
                      required
                      type="password"
                      name="password"
                      id="password"
                      className="mt-1 p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 dark:bg-blue-dark bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-violet-dark hover:bg-violet-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-light"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
