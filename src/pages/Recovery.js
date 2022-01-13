import { useRef, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../store/context";

const Recovery = () => {
  const authCtx = useContext(Context);
  const { token } = useParams();

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

    const password = passwordInput.current.value;

    let url = `http://localhost:5000/api/v1/user/reset-password/${token}`;
    fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        password: password,
        passwordConfirm: password,
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
        authCtx.login(data.token);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="flex justify-center pt-[40px] px-[24px]">
      <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded shadow dark:bg-blue-dark sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-2 text-xl font-light text-grey-btn sm:text-2xl dark:text-white">
          Enter a new password!
        </div>

        <div className="mt-2">
          <form onSubmit={submitHandler}>
            <div className=" flex flex-col mb-2">
              <div className=" relative ">
                <input
                  ref={passwordInput}
                  type="password"
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
                Save and Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
