import { createContext, useState } from "react";
import { menuArr } from "./defaultMenusArray";

const MenusContextData = createContext(null);

function MenusContextProvider({ children }) {
  const [menus, setMenus] = useState(menuArr);

  const SelectedMenuHandler = (id, generalName) => {
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
    <MenusContextData.Provider value={{ menus, SelectedMenuHandler }}>
      {children}
    </MenusContextData.Provider>
  );
}

export { MenusContextProvider, MenusContextData };
