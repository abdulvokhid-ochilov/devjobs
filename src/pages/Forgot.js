const Forgot = () => {
  return (
    <div className="flex justify-center pt-[40px] px-[24px]">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded shadow dark:bg-blue-dark sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-base text-grey-dark sm:text-2xl dark:text-white">
          Enter your email!
        </div>
        <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
          <div className=" relative ">
            <input
              type="text"
              id='"form-subscribe-Subscribe'
              className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-grey-med shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-light focus:border-transparent"
              placeholder="Email"
            />
          </div>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-violet-dark rounded shadow-md hover:bg-violet-light focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit"
          >
            Send password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
