import React, { useState, useRef } from "react";
import styled from "styled-components";
import CustomDropdown from "./CustomDropDown";
import { Paragraph } from "../ui/Paragraph";
import { boxShadowValue } from "../ui/Constant";

const CustomSelectContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 7rem;
  width: 100%;
  height: auto;

  @media (max-width: 450px) {
    width: 100%;
    margin-top: 4rem;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
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
  /* z-index: 10; */
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
  margin-top: ${({ value }) => (value ? "-1rem" : "")};
  /* margin-top: -1rem; */
`;

const CustomButton = ({
  handleBlur,
  handleChange,
  errors,
  dispatch,
  content,
  formSubmitted,
  values,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentOption, setCurrentOption] = useState(null);

  const dateRef = useRef(null);

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
    setCurrentOption(id);
    setShowOptions((prevShow) => (currentOption !== id ? true : !prevShow));
  };
  // console.log(content);
  return (
    <CustomSelectContainer>
      {content.map((btn, i) => {
        const {
          beforeIcon,
          value,
          afterIcon,
          label,
          inputType,
          options,
          currentID,
          name,
          placeholder,
        } = btn;
        return (
          <ButtonContainer key={i}>
            <ButtonLabel>{label}</ButtonLabel>
            <CustomButtonStyledContainer
              errors={errors[name] && formSubmitted}
              value={values[btn.name] !== ""}
            >
              {inputType === "input" ? (
                <DateInput
                  type="date"
                  name="date"
                  placeholder={placeholder}
                  ref={dateRef}
                  onClick={onShowPicker}
                  value={values[btn.name]}
                  onChange={dateChangeHandler}
                  onBlur={handleBlur}
                />
              ) : (
                <CustomDropdown
                  ind={i}
                  options={options}
                  value={values[btn.name]}
                  currentID={currentID}
                  $showOptions={showOptions && currentOption === currentID}
                  toggleOptions={() => toggleOptions(currentID)}
                  dispatch={dispatch}
                  handleChange={handleChange}
                />
              )}
              <CustomRenderInputContent
                value={value !== placeholder}
                onClick={toggleOptions}
              >
                <span>{beforeIcon}</span>
                <RenderSpanText>{value}</RenderSpanText>
                <RotatingSpan value={values[btn.name]}>
                  {afterIcon}
                </RotatingSpan>
              </CustomRenderInputContent>
            </CustomButtonStyledContainer>
            {errors[name] && formSubmitted && (
              <Paragraph color="red" fontSize="large">
                {errors[name]}
              </Paragraph>
            )}
          </ButtonContainer>
        );
      })}
    </CustomSelectContainer>
  );
};

export default CustomButton;
