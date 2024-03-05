import React, { createContext, useState } from "react";

export const LoginContext = createContext();
const LoginContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(true);
  return (
    <LoginContext.Provider value={userDetails}>
      <div>{children}</div>
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
