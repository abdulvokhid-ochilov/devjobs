import { useState, useEffect } from "react";
import Context from "./context";

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");

  return {
    token: storedToken,
  };
};

const ContextProvider = (props) => {
  const [token, setToken] = useState();
  const [mode, setMode] = useState();
  const [user, setUser] = useState();

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    setUser(null);
  };

  const loginHandler = (token) => {
    // console.log(token);
    setToken(token);
    localStorage.setItem("token", token);
    //   localStorage.setItem("expirationTime", expirationTime);

    // const remainingTime = calculateRemainingTime(expirationTime);

    // logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    const tokenData = retrieveStoredToken().token;
    if (tokenData) {
      setToken(tokenData);
      let url = "http://localhost:5000/api/v1/jobs";
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Getting user data failed!";

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
          setUserDataHandler(data.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, []);

  useEffect(() => {
    if (localStorage.theme === "true") {
      themeSetter(true);
    } else {
      themeSetter(false);
    }
  }, []);

  const themeSetter = (condition) => {
    if (condition) {
      document.documentElement.classList.add("dark");
      localStorage.theme = true;
      setMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = false;
      setMode(false);
    }
  };

  const setUserDataHandler = (data) => {
    setUser(data);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    darkMode: mode,
    userData: user,
    login: loginHandler,
    logout: logoutHandler,
    setMode: themeSetter,
    setUserData: setUserDataHandler,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
