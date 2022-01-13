import { useRef } from "react";

const Forgot = () => {
  const emailInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const email = emailInput.current.value;

    let url = "http://localhost:5000/api/v1/user/forgot-password";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        alert(data.message);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="flex justify-center pt-[40px] px-[24px]">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded shadow dark:bg-blue-dark sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-base text-grey-dark dark:text-white">
          Enter your email to reset your password!
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"
        >
          <div className=" relative w-full ">
            <input
              ref={emailInput}
              type="email"
              id='"form-subscribe-Subscribe'
              className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-grey-med shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-light focus:border-transparent"
              placeholder="Email"
            />
          </div>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-violet-dark rounded shadow-md hover:bg-violet-light focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
