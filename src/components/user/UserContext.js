import React, { createContext, useMemo, useState } from "react";

import { authenticate } from "./UserAuth";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();

  const contextValue = useMemo(() => {
    return {
      authenticate,
      userInfo,
      setUserInfo,
    };
  }, [userInfo]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
