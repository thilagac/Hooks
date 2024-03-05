import React, { useContext } from "react";
import { LoginContext } from "../UseContext/LoginContextProvider";
const Singlepost = () => {
  const login = useContext(LoginContext);
  console.log(login);
  return <div>singlepost</div>;
};

export default Singlepost;
