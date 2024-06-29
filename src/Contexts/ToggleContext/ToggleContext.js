import { createContext, useState } from "react";

const ToggleContextData = createContext();

function ToggleContextProvider({ children }) {
  const [open, setOpen] = useState(false);

  // Toggle Handler
  const toggleHamburger = () => setOpen((open) => !open);

  return (
    <ToggleContextData.Provider
      value={{
        open,
        toggleHamburger,
      }}
    >
      {children}
    </ToggleContextData.Provider>
  );
}

export { ToggleContextProvider, ToggleContextData };
