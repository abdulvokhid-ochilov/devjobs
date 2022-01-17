import React from "react";

const Context = React.createContext({
  token: "",
  isLoggedIn: false,
  darkMode: false,
  login: (token) => {},
  logout: () => {},
  setMode: (condition) => {},
});

export default Context;
