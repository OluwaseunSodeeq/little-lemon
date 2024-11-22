import React, { useReducer, createContext, useState } from "react";

// simple;
function reducer(state, action) {
  switch (action.type) {
    case "updateField":
      console.log("Updating date:", action.payload);
      return { ...state, [action.name]: action.value };
    case "reset":
      return initialState;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
// REDUCER
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "date":
//       return { ...state, date: action.payload };
//     case "dinner":
//       return { ...state, dinner: action.payload };
//     case "occasion":
//       return { ...state, occasion: action.payload };
//     case "time":
//       return { ...state, time: action.payload };
//     case "seating":
//       return { ...state, seating: action.payload };

//     case "firstName":
//       return { ...state, firstName: action.payload };
//     case "lastName":
//       return { ...state, lastName: action.payload };
//     case "email":
//       return { ...state, email: action.payload };
//     case "tel":
//       return { ...state, tel: action.payload };
//     case "countryCode":
//       return { ...state, countryCode: action.payload };
//     case "textArea":
//       return { ...state, textArea: action.payload };
//     case "reset":
//       return { ...initialState };
//     default:
//       throw new Error("Unknown action type");
//   }
// };
// user InitailData
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

const ReservationsContextData = createContext();

function ReservationsContextProvider({ children }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  const resetHandler = () => {
    setFormSubmitted(false);
    dispatch({ type: "reset" });
  };

  return (
    <ReservationsContextData.Provider
      value={{
        dispatch,
        state,
        initialState,
        resetHandler,
        formSubmitted,
        setFormSubmitted,
      }}
    >
      {children}
    </ReservationsContextData.Provider>
  );
}
export { ReservationsContextData, ReservationsContextProvider };
