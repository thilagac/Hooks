import React, { createContext } from "react";
import MainPort from "./mainPort";
import Singlepost from "./singlepost";
import LoginContextProvider from "../UseContext/LoginContextProvider";
export const LoginContext = createContext();
const Context = () => {
  return (
    <LoginContextProvider>
      <MainPort />
    </LoginContextProvider>
  );
};

export default Context;
