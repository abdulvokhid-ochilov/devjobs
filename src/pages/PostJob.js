import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import EditorComp from "../components/Editor";

const PostJob = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="-mt-10 min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] md:grid md:grid-cols-2 md:gap-6">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={submitHandler}>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div>
                <label className="block text-gray-700">Company Logo</label>
                <div className="mt-1 flex items-center">
                  <span className="flex items-center justify-center h-12 w-12 rounded-md overflow-hidden bg-gray-100">
                    <FontAwesomeIcon icon={faImage} size="lg" />
                  </span>
                  <input type="file" className="ml-5" />
                </div>
              </div>
            </div>

            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="company-name" className="block text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-violet-light focus:border-violet-light block w-full shadow-sm border border-gray-300 rounded"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="company-website"
                    className="block  text-gray-700"
                  >
                    Company website
                  </label>
                  <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-violet-light focus:border-violet-light block w-full shadow-sm border border-gray-300 rounded"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="email-address"
                    className="block text-gray-700"
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    className="mt-1 focus:ring-violet-light focus:border-violet-light block w-full shadow-sm border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="email-address"
                    className="block text-gray-700"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="mt-1 focus:ring-violet-light focus:border-violet-light block w-full shadow-sm border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="email-address"
                    className="block text-gray-700"
                  >
                    Type
                  </label>
                  <select
                    name="type"
                    id="type"
                    className="mt-1 focus:ring-violet-light focus:border-violet-light block w-full shadow-sm border border-gray-300 rounded"
                  >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <h1 className="my-4">Job description in detail</h1>
                  <EditorComp />
                </div>
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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
