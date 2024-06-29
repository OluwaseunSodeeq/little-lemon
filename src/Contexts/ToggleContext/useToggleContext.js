import { useContext } from "react";
import { ToggleContextData } from "./ToggleContext";

function useToggleContext() {
  const context = useContext(ToggleContextData);
  if (context === undefined)
    throw new Error("Toggle context was used outside open context provider");
  return context;
}

export default useToggleContext;
