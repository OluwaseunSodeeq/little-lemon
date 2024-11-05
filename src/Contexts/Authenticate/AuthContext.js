import React, { createContext, useState } from "react";

const AuthContextData = createContext();

function AuthContextProvider({ children }) {
  // USERDATE
  const defaultPassword = "user2024";
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState(defaultPassword);
  const [auth, setAuth] = useState(false);

  // DATA FOR MENU

  //Auth Handlers
  const loginHandler = () => {
    // if (
    //   userName === "" ||
    //   userName === " " ||
    //   userPassword === " " ||
    //   userPassword === ""
    // )
    //   return;
    // setAuth(true);
    //If either userName or userPassword is empty, this line stops the function execution right there.
    if (!userName.trim() || !userPassword.trim()) return;

    // Example validation logic
    if (userName !== "" && userPassword === defaultPassword) {
      setAuth(true);
    } else {
      console.error("Invalid username or password");
      // setAuth(false);
    }
  };

  const logoutHandler = () => {
    setAuth(false);
    setUserName("");
    setUserPassword(defaultPassword);
  };

  return (
    <AuthContextData.Provider
      value={{
        auth,
        userPassword,
        userName,
        setUserName,
        setUserPassword,
        defaultPassword,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContextData.Provider>
  );
}

export { AuthContextData, AuthContextProvider };
