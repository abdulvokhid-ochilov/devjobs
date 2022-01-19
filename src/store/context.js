import React from "react";

const Context = React.createContext({
  token: "",
  isLoggedIn: false,
  darkMode: false,
  userData: {},
  login: (token) => {},
  logout: () => {},
  setMode: (condition) => {},
  setUserData: (data) => {},
});

export default Context;
