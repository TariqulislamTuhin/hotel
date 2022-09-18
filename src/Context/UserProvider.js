import React, { createContext, useEffect, useState } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState({
    isAuthenticated: false,
    name: null,
    email: null,
  });

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);
  return (
    <userContext.Provider value={[user, setUser]}>
      {children}
    </userContext.Provider>
  );
};

export { userContext, UserProvider };
