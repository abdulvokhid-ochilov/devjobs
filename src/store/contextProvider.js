import { useState } from "react";
import Context from "./context";

const ContextProvider = (props) => {
  //   const tokenData = retrieveStoredToken();

  //   let initialToken;
  //   if (tokenData) {
  //     initialToken = tokenData.token;
  //   }

  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("expirationTime");

    //   if (logoutTimer) {
    //     clearTimeout(logoutTimer);
    //   }
  };

  const loginHandler = (token) => {
    // console.log(token);
    setToken(token);
    //   localStorage.setItem("token", token);
    //   localStorage.setItem("expirationTime", expirationTime);

    // const remainingTime = calculateRemainingTime(expirationTime);

    // logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  //   useEffect(() => {
  //     if (tokenData) {
  //       console.log(tokenData.duration);
  //       logoutTimer = setTimeout(logoutHandler, tokenData.duration);
  //     }
  //   }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
