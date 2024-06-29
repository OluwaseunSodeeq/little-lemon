import { useContext } from "react";
import { MenusContextData } from "./MenusContext";

function useMenusContext() {
  const context = useContext(MenusContextData);
  if (context === undefined)
    throw new Error("menus context was used outside open context provider");
  return context;
}

export default useMenusContext;
