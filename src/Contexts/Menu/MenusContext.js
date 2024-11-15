import React, { createContext, useState } from "react";
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

  // If any Item is selected
  const isAnyItemSelected = menus
    .flatMap((category) => category.list)
    .filter((selected) => selected.selected === true);
  return (
    <MenusContextData.Provider
      value={{
        menus,
        setMenus,
        selectedMenuHandler,
        userBookedData,
        setUserBookedData,
        userSelectedItems,
        setUserSelectedItems,
        isAnyItemSelected,
      }}
    >
      {children}
    </MenusContextData.Provider>
  );
}

export { MenusContextData, MenusContextProvider };
