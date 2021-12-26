import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex justify-center pt-[40px] px-[24px]">
      <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded shadow dark:bg-blue-dark sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-2 text-xl font-light text-grey-btn sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account ?
          <Link
            to={`../login`}
            className="text-sm text-violet-dark underline hover:text-violet-light"
          >
            Log in
          </Link>
        </span>
        <div className="p-6 mt-8">
          <form action="#">
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="email"
                  id="create-account-email"
                  className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-blue-dark placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-light focus:border-transparent"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-blue-dark placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-light focus:border-transparent"
                  name="First name"
                  placeholder="First name"
                />
              </div>
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-last-name"
                  className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-blue-dark placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-light focus:border-transparent"
                  name="Last name"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="password"
                  id="create-account-email"
                  className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-blue-dark placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-light focus:border-transparent"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex w-full my-4">
              <button
                type="submit"
                className="py-2 px-4  bg-violet-dark hover:bg-violet-light focus:ring-violet-light focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
