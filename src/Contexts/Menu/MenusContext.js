import { createContext, useState } from "react";
import { menuArr } from "./defaultMenusArray";

const MenusContextData = createContext();

function MenusContextProvider({ children }) {
  // DATA FOR MENU
  const [menus, setMenus] = useState(menuArr);

  useState();
  const [userBookedData, setUserBookedData] = useState({});
  const [userSelectedItems, setUserSelectedItems] = useState([]);

  // Menu Handler
  const selectedMenuHandler = (id, generalName) => {
    const updatedMenus = menus.map((category) => {
      const { generalName: menuGeneralName, list } = category;
      if (menuGeneralName === generalName) {
        const updatedList = list.map((menu) =>
          menu.id === id ? { ...menu, selected: !menu.selected } : menu
        );
        return { ...menuGeneralName, list: updatedList, generalName };
      }
      return category;
    });

    setMenus(updatedMenus);
  };
  return (
    <MenusContextData.Provider
      value={{
        menus,
        selectedMenuHandler,
        userBookedData,
        setUserBookedData,
        userSelectedItems,
        setUserSelectedItems,
      }}
    >
      {children}
    </MenusContextData.Provider>
  );
}

export { MenusContextData, MenusContextProvider };
