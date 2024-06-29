import { createContext, useState } from "react";

const AuthContextData = createContext();

function AuthContextProvider({ children }) {
  // USERDATE
  const defaultPassword = "user2024";
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState(defaultPassword);
  // DATA FOR MENU
  const [auth, setAuth] = useState(false);

  //Auth Handlers
  const loginHandler = () => {
    setAuth(true);
  };
  const logoutHandler = () => {
    setAuth(false);
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
