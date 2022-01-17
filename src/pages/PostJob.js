import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import EditorComp from "../components/Editor";

const PostJob = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="-mt-10 pb-10 min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] md:grid md:grid-cols-2 md:gap-6">
      <div className="md:mt-0 md:col-span-2">
        <form onSubmit={submitHandler}>
          <div className="shadow  sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white dark:bg-blue-dark space-y-6 sm:p-6">
              <div>
                <label className="block text-[18px]">Company Logo</label>
                <div className="mt-1 flex items-center">
                  <span className="flex items-center justify-center h-12 w-12 rounded-md overflow-hidden bg-grey-light dark:text-grey-btn">
                    <FontAwesomeIcon icon={faImage} size="lg" />
                  </span>
                  <input
                    className="ml-4 cursor-pointer bg-white border-violet-dark dark:text-black border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light text-sm rounded"
                    id="company-logo"
                    type="file"
                  />
                </div>
              </div>
            </div>

            <div className="px-4 py-5 bg-white dark:bg-blue-dark sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="company-name" className="block text-[18px]">
                    Company Name
                  </label>
                  <input
                    required
                    type="text"
                    name="company-name"
                    id="company-name"
                    className="mt-1 p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="company-website"
                    className="block  text-[18px]"
                  >
                    Company website
                  </label>
                  <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    className="mt-1 p-1 focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light block w-full  border border-grey-med rounded dark:border-grey-hover dark:bg-blue-dark"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="position" className="block text-[18px]">
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    className="mt-1 p-1 focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light block w-full border border-grey-med dark:border-grey-hover dark:bg-blue-dark rounded"
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="location" className="block text-[18px]">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="mt-1 p-1 focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light block w-full border border-grey-med dark:border-grey-hover dark:bg-blue-dark rounded"
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="job-type" className="block text-[18px]">
                    Type
                  </label>
                  <select
                    name="type"
                    id="type"
                    className="mt-1 p-1.5 focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light block w-full border border-grey-med dark:border-grey-hover dark:bg-blue-dark rounded"
                  >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <h1 className="my-4 text-[18px]">
                    Job description in detail
                  </h1>
                  <EditorComp />
                </div>
              </div>
            </div>

            <div className="px-4 py-3 bg-white dark:bg-blue-dark text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-violet-dark hover:bg-violet-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-light"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
