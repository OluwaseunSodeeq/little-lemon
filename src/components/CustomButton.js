import React, { useState, useRef, useReducer } from "react";
import styled from "styled-components";
import { CiCalendar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { LuAlarmClock } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomDropdown from "./CustomDropDown";

const CustomButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 7rem;
  width: 100%;
  height: auto;
`;

const ButtonContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  row-gap: 0.4rem;
`;

const CustomButtonStyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  padding: 0;
  background-color: var(--pureWhite);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
`;

const ButtonLabel = styled.label`
  font-size: 1.6rem;
  color: var(--pureWhite);
`;

const CustomRenderInputContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 1rem 2rem;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--deepGreen);
`;

const DateInput = styled.input`
  position: relative;
  z-index: 20;
  width: 100%;
  height: 100%;
  padding: 0 5%;
  border-radius: var(--border-radius-md);
  color: transparent;
  text-shadow: 0 0 0 0;
  background-color: transparent;
  opacity: 0;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

const RenderSpanText = styled.span`
  color: var(--deepGreen);
  font-weight: var(--deepBold);
  font-size: 1.8rem;
  font-family: var(--karla);
`;

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
    default:
      throw new Error("Unknown action type");
  }
};

const initialState = {
  date: "",
  dinner: "",
  occasion: "",
  time: "",
};

const CustomButton = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { date, dinner, occasion, time } = state;
  const [showOptions, setShowOptions] = useState(false);
  const [currentElement, setCurrentElement] = useState(null);
  const dateRef = useRef(null);

  const content = [
    {
      currentID: 0,
      label: "Date",
      beforeIcon: <CiCalendar style={{ fontSize: "3rem" }} />,
      value: date || "Select Date",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
      inputType: "input",
    },
    {
      currentID: 1,
      label: "Time",
      beforeIcon: <LuAlarmClock style={{ fontSize: "3rem" }} />,
      value: time || "Select Time",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
      inputType: "select",
      options: ["Morning", "Afternoon", "Evening", "Night"],
    },
    {
      currentID: 2,
      label: "Occasion",
      beforeIcon: <LiaGlassCheersSolid style={{ fontSize: "3rem" }} />,
      value: occasion || "Occasion",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
      inputType: "select",
      options: ["Birthday", "Anniversary", "Graduation", "Other"],
    },

    {
      currentID: 3,
      label: "Number of Diners",
      beforeIcon: <IoPersonOutline style={{ fontSize: "3rem" }} />,
      value: dinner || "No. of Diners",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
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
    },
  ];

  const onShowPicker = () => {
    dateRef.current.showPicker();
  };

  const dateChangeHandler = (e) => {
    const selectedDate = new Date(e.target.value);
    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    dispatch({ type: "date", payload: formattedDate });
  };

  const toggleOptions = (id) => {
    setCurrentElement(id);
    setShowOptions((prevShow) => (currentElement !== id ? true : !prevShow));
  };

  return (
    <CustomButtonsContainer>
      {content.map((btn, i) => {
        const {
          beforeIcon,
          value,
          afterIcon,
          label,
          inputType,
          options,
          currentID,
        } = btn;
        return (
          <ButtonContainer key={i}>
            <ButtonLabel>{label}</ButtonLabel>
            <CustomButtonStyledContainer>
              {inputType === "input" ? (
                <>
                  <DateInput
                    type="date"
                    placeholder="Select Date"
                    ref={dateRef}
                    onClick={onShowPicker}
                    onChange={dateChangeHandler}
                  />
                  <CustomRenderInputContent>
                    <span>{beforeIcon}</span>
                    <RenderSpanText>{value}</RenderSpanText>
                    <span>{afterIcon}</span>
                  </CustomRenderInputContent>
                </>
              ) : (
                <>
                  <CustomDropdown
                    options={options}
                    value={value}
                    currentID={currentID}
                    showOptions={showOptions && currentElement === currentID}
                    toggleOptions={() => toggleOptions(currentID)}
                    dispatch={dispatch}
                  />
                  <CustomRenderInputContent>
                    <span>{beforeIcon}</span>
                    <RenderSpanText>{value}</RenderSpanText>
                    <span>{afterIcon}</span>
                  </CustomRenderInputContent>
                </>
              )}
            </CustomButtonStyledContainer>
          </ButtonContainer>
        );
      })}
    </CustomButtonsContainer>
  );
};

export default CustomButton;

// ////////////////////////////////////////////////////////////////////////////////////////////
