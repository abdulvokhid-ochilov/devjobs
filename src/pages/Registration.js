import { Link } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import Context from "../store/context";

const Registration = () => {
  const ctx = useContext(Context);

  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();

  const [passwordState, setPasswordState] = useState("white");
  const [buttonState, setButtonState] = useState(false);

  const passwordConfirmHandler = () => {
    if (passwordConfirmInput.current.value.length === 0) {
      setPasswordState("white");
      setButtonState(false);
    } else if (
      passwordConfirmInput.current.value.localeCompare(
        passwordInput.current.value
      ) === 0
    ) {
      setPasswordState("green-200");
      setButtonState(true);
    } else {
      setPasswordState("red-200");
      setButtonState(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const firstName = firstNameInput.current.value;
    const lastName = lastNameInput.current.value;
    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    let url = "http://localhost:5000/api/v1/user/signup";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        // passwordConfirm: password,
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
        ctx.login(data.token);
        ctx.updateUserData(data.token);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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
          <form onSubmit={submitHandler}>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  ref={emailInput}
                  type="email"
                  id="create-account-email"
                  className="rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-blue-dark placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-light focus:border-transparent"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4 mb-2">
              <div className=" relative ">
                <input
                  ref={firstNameInput}
                  type="text"
                  id="create-account-first-name"
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-blue-dark placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-light focus:border-transparent"
                  name="First name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className=" relative ">
                <input
                  ref={lastNameInput}
                  type="text"
                  id="create-account-last-name"
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-blue-dark placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-light focus:border-transparent"
                  name="Last name"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  ref={passwordInput}
                  type="password"
                  id="create-account-email"
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-blue-dark placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-light focus:border-transparent"
                  placeholder="Password"
                  minlength="8"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  onChange={passwordConfirmHandler}
                  ref={passwordConfirmInput}
                  type="password"
                  id="create-account-email"
                  className={`rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-${passwordState} text-blue-dark placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-violet-light focus:border-transparent`}
                  placeholder="Confirm Password"
                  minlength="8"
                  required
                />
              </div>
            </div>
            <div className="flex w-full my-4">
              <button
                disabled={!buttonState}
                className={`py-2 px-4  bg-violet-dark hover:bg-violet-light focus:ring-violet-light focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded ${
                  !buttonState && "cursor-not-allowed"
                }`}
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
