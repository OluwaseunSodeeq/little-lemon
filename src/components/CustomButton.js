import React, { useState, useRef } from "react";
import styled from "styled-components";
import { CiCalendar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { LuAlarmClock } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomDropdown from "./CustomDropDown";
import { Paragraph } from "../ui/Paragraph";
import { boxShadowValue } from "../ui/Constant";

const CustomButtonsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 7rem;
  width: 100%;
  height: auto;

  /*  */
  z-index: 30;
`;

const ButtonContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  row-gap: 0.4rem;
  height: auto;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const CustomButtonStyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  padding: 0;
  background-color: ${({ value }) =>
    value ? "var(--deepGreen)" : "var(--pureWhite)"};
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  /* error */
  border: ${({ errors }) => (errors ? "2px solid red" : "")};
  /* selected */
  box-shadow: ${({ value }) => (value ? boxShadowValue : "")};

  /*  */
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
  color: ${({ value }) => (value ? "var(--pureWhite)" : "var(--deepGreen)")};
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
  color: inherit;
  font-weight: var(--deepBold);
  font-size: 1.8rem;
  font-family: var(--karla);
`;
const RotatingSpan = styled.span`
  transition: transform 0.3s ease-in-out;
  transform: ${({ value }) => (value ? "rotate(180deg)" : "")};
`;

const CustomButton = ({
  handleBlur,
  handleChange,
  time,
  date,
  occasion,
  dinner,
  errors,
  dispatch,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentElement, setCurrentElement] = useState(null);
  const dateRef = useRef(null);

  const content = [
    {
      currentID: 0,
      label: "Date",
      beforeIcon: <CiCalendar style={{ fontSize: "3rem", color: "inherit" }} />,
      value: date || "Select Date",
      afterIcon: (
        <RiArrowDropDownLine style={{ fontSize: "3.4rem", color: "inherit" }} />
      ),
      inputType: "input",
      errorKey: "date",
      placeholder: "Select Date",
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
      errorKey: "time",
      placeholder: "Select Time",
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
      errorKey: "occasion",
      placeholder: "Occasion",
    },
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
      errorKey: "dinner",
      placeholder: "No. of Diners",
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
    handleChange(e);
    dispatch({ type: "date", payload: formattedDate });
  };

  const toggleOptions = (id) => {
    setCurrentElement(id);
    setShowOptions((prevShow) => (currentElement !== id ? true : !prevShow));
  };
  // console.log(errors[errorKey]);

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
          errorKey,
          placeholder,
        } = btn;
        return (
          <ButtonContainer key={i}>
            <ButtonLabel>{label}</ButtonLabel>
            <CustomButtonStyledContainer
              errors={errors[errorKey]}
              value={value !== placeholder}
            >
              {inputType === "input" ? (
                <>
                  <DateInput
                    type="date"
                    name="date"
                    placeholder={placeholder}
                    ref={dateRef}
                    onClick={onShowPicker}
                    onChange={dateChangeHandler}
                    onBlur={handleBlur}
                  />
                  <CustomRenderInputContent value={value !== placeholder}>
                    <span>{beforeIcon}</span>
                    <RenderSpanText>{value}</RenderSpanText>
                    <RotatingSpan value={value !== placeholder}>
                      {afterIcon}
                    </RotatingSpan>
                  </CustomRenderInputContent>
                </>
              ) : (
                <>
                  <CustomDropdown
                    ind={i}
                    options={options}
                    value={value}
                    currentID={currentID}
                    showOptions={showOptions && currentElement === currentID}
                    toggleOptions={() => toggleOptions(currentID)}
                    dispatch={dispatch}
                    handleChange={handleChange}
                  />
                  <CustomRenderInputContent value={value !== placeholder}>
                    <span>{beforeIcon}</span>
                    <RenderSpanText>{value}</RenderSpanText>
                    <RotatingSpan value={value !== placeholder}>
                      {afterIcon}
                    </RotatingSpan>
                  </CustomRenderInputContent>
                </>
              )}
            </CustomButtonStyledContainer>
            {value === placeholder && (
              <Paragraph color="red" fontSize="large">
                {errors[errorKey]}
              </Paragraph>
            )}
          </ButtonContainer>
        );
      })}
    </CustomButtonsContainer>
  );
};

export default CustomButton;
