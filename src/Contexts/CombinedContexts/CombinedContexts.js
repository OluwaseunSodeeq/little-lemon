import React, { createContext, useState, useReducer, useEffect } from "react";
import { menuArr } from "../Menu/defaultMenusArray";

import { CiCalendar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { LuAlarmClock } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";

// Initial State
const initialState = {
  date: "",
  dinner: "",
  occasion: "",
  time: "",
  seating: "",
  firstName: "",
  lastName: "",
  tel: "",
  email: "",
  textArea: "",
  countryCode: "NG",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "date":
      return { ...state, date: action.payload };
    case "dinner":
      return { ...state, dinner: action.payload };
    case "occasion":
      return { ...state, occasion: action.payload };
    case "time":
      return { ...state, time: action.payload };
    case "seating":
      return { ...state, seating: action.payload };
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastName: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "tel":
      return { ...state, tel: action.payload };
    case "countryCode":
      return { ...state, countryCode: action.payload };
    case "textArea":
      return { ...state, textArea: action.payload };
    case "reset":
      return { ...initialState };
    default:
      throw new Error("Unknown action type");
  }
};

const CombinedContextsData = createContext();

function CombinedContextsProvider({ children, remount, setremount }) {
  // AUTH STATES
  const defaultPassword = "user2024";
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState(defaultPassword);
  const [auth, setAuth] = useState(false);
  // ====================

  // TOGGLECONTEXT STATES
  const [open, setOpen] = useState(false);

  // Toggle Handler
  const toggleHamburger = () => setOpen((open) => !open);

  // ====================

  // MENUS STATES
  const [menus, setMenus] = useState(menuArr);
  const [userBookedData, setUserBookedData] = useState([]);
  const [userSelectedItems, setUserSelectedItems] = useState([]);
  // ====================

  // Menus Handler
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

  console.log(userBookedData);
  // ====================

  // AUTH FEATURES/FUNCTIONALITIES
  //Auth Handlers
  const loginHandler = () => {
    if (!userName.trim() || !userPassword.trim()) return;

    if (userName !== "" && userPassword === defaultPassword) {
      setAuth(true);
    } else {
      console.error("Invalid username or password");
    }
  };

  const logoutHandler = () => {
    setAuth(false);
    setUserName("");
    setUserPassword(defaultPassword);
  };

  // ====================

  // RESERVATION STATES ANDHANDLERS
  const [formSubmitted, setFormSubmitted] = useState(false);
  const storedState =
    JSON.parse(localStorage.getItem("reservationState")) || initialState;

  const [state, dispatch] = useReducer(reducer, storedState);

  // Sync state changes to localStorage
  useEffect(() => {
    localStorage.setItem("reservationState", JSON.stringify(state));
  }, [state]); // Run every time `state` changes

  const resetHandler = () => {
    localStorage.removeItem("reservationState"); // Clear local storage
    dispatch({ type: "reset" }); // Reset context state
    setremount((val) => val + 1); // Force re-render
    localStorage.setItem("reservationState", JSON.stringify(state));
  };
  const { date, time, dinner, occasion } = state;
  const initialContent = [
    {
      currentID: 3,
      label: "Number of Diners",
      beforeIcon: (
        <IoPersonOutline style={{ fontSize: "3rem", color: "inherit" }} />
      ),
      value: dinner || "No. of Diners",
      afterIcon: (
        <RiArrowDropDownLine style={{ fontSize: "3.4rem", color: "inherit" }} />
      ),
      inputType: "select",
      options: [
        "1 Diner",
        "2 Diners",
        "3 Diners",
        "4 Diners",
        "5 Diners",
        "6 Diners",
        "7 Diners",
        "8 Diners",
        "9 Diners",
        "10 Diners",
      ],
      name: "dinner",
      id: "dinner",
      placeholder: "No. of Diners",
    },
    {
      currentID: 1,
      label: "Time",
      beforeIcon: (
        <LuAlarmClock style={{ fontSize: "3rem", color: "inherit" }} />
      ),
      value: time || "Select Time",
      afterIcon: (
        <RiArrowDropDownLine style={{ fontSize: "3.4rem", color: "inherit" }} />
      ),
      inputType: "select",
      options: ["Morning", "Afternoon", "Evening", "Night"],
      name: "time",
      id: "time",
      placeholder: "Select Time",
    },

    {
      currentID: 0,
      label: "Date",
      beforeIcon: <CiCalendar style={{ fontSize: "3rem", color: "inherit" }} />,
      value: date || "Select Date",
      afterIcon: (
        <RiArrowDropDownLine style={{ fontSize: "3.4rem", color: "inherit" }} />
      ),
      inputType: "input",
      name: "date",
      id: "date",
      placeholder: "Select Date",
    },

    {
      currentID: 2,
      label: "Occasion",
      beforeIcon: (
        <LiaGlassCheersSolid style={{ fontSize: "3rem", color: "inherit" }} />
      ),
      value: occasion || "Occasion",
      afterIcon: (
        <RiArrowDropDownLine style={{ fontSize: "3.4rem", color: "inherit" }} />
      ),
      inputType: "select",
      options: ["Birthday", "Anniversary", "Graduation", "Other"],
      name: "occasion",
      id: "occasion",
      placeholder: "Occasion",
    },
  ];
  const [content, setContent] = useState(initialContent);

  return (
    <CombinedContextsData.Provider
      key={remount}
      value={{
        // AUth
        auth,
        userPassword,
        userName,
        setUserName,
        setUserPassword,
        defaultPassword,
        loginHandler,
        logoutHandler,
        // menus
        menus,
        setMenus,
        selectedMenuHandler,
        setUserBookedData,
        userSelectedItems,
        setUserSelectedItems,
        isAnyItemSelected,
        // ToggleHamburger
        open,
        toggleHamburger,
        // Reservations
        dispatch,
        state,
        initialState,
        resetHandler,
        formSubmitted,
        setFormSubmitted,
        initialContent,
        setContent,
        content,
        setremount,
      }}
    >
      {children}
    </CombinedContextsData.Provider>
  );
}

export { CombinedContextsData, CombinedContextsProvider };
