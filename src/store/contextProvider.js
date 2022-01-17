import { useState, useEffect } from "react";
import Context from "./context";

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");

  return {
    token: storedToken,
  };
};

const ContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const [mode, setMode] = useState();

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
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

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    darkMode: mode,
    login: loginHandler,
    logout: logoutHandler,
    setMode: themeSetter,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
