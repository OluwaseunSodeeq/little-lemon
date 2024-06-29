import { useContext } from "react";
import { AuthContextData } from "./AuthContext";

function useAuthContext() {
  const context = useContext(AuthContextData);
  if (context === undefined)
    throw new Error("Auth context was used outside open context provider");
  return context;
}

export default useAuthContext;
