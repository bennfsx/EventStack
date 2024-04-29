import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    accessToken: null,
    email: null,
    firstName: null,
    lastName: null,
    usertype: null,
    id: null,
  });

  const checkSession = async () => {
    if (sessionStorage.getItem("access") !== null) {
      const sessionAccess = await sessionStorage.getItem("access");
      const usertype = await sessionStorage.getItem("usertype");
      const id = await sessionStorage.getItem("id");
      setUser({
        accessToken: sessionAccess,
        email: null, // Make sure to set other properties to null initially
        firstName: null,
        lastName: null,
        usertype: usertype,
        id: id,
      });
    }
  };

  const logout = () => {
    sessionStorage.clear("access");
    sessionStorage.clear("usertype");
    setUser({
      accessToken: null,
      email: null,
      firstName: null,
      lastName: null,
      usertype: null,
      id: null,
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