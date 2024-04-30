import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    accessToken: null,
    userId: null,
    usertype: null,
  });

  const checkSession = async () => {
    if (sessionStorage.getItem("access") !== null) {
      const sessionAccess = await sessionStorage.getItem("access");
      const usertype = await sessionStorage.getItem("usertype");
      const userId = await sessionStorage.getItem("userId");
      setUser({
        accessToken: sessionAccess,
        userId: userId,
        usertype: usertype,
      });
    }
  };

  const logout = () => {
    sessionStorage.clear("access");
    sessionStorage.clear("usertype");
    console.log("Logged out succesfully!");
    setUser({
      accessToken: null,
      userId: null,
      usertype: null,
    });
  };

  const value = {
    user,
    setUser,
    checkSession,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
