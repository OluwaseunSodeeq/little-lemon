import React, { useRef, useState } from "react";
import styled from "styled-components";

// Styled components
const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  z-index: 20;
`;

const SelectStyled = styled.select`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-md);

  border: none;
  cursor: pointer;
  background-color: transparent;
  appearance: none;
`;

const SelectDivStyled = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--deepGreen);
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); */
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  z-index: 30;
`;

const DinnerOptionStyled = styled.option`
  position: relative;
  z-index: 50;
  width: 48%;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: var(--border-radius-sm);

  &:hover {
    background-color: #e0e0e0;
  }
`;

// Custom select component
function CustomDropdown({ options, value, setEachValue }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState("No. of Diners");
  const selectRef = useRef(null);

  const toggleOptions = () => {
    setShowOptions((prevShow) => !prevShow);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setShowOptions(false);
  };

  const selectChangeHandler = (e) => {
    handleOptionClick(e.target.value);
  };

  //   const options = [
  //     "1 Diner",
  //     "2 Diners",
  //     "3 Diners",
  //     "4 Diners",
  //     "5 Diners",
  //     "6 Diners",
  //     "7 Diners",
  //     "8 Diners",
  //     "9 Diners",
  //     "10 Diners",
  //   ];

  return (
    <SelectContainer>
      <SelectStyled
        ref={selectRef}
        onChange={selectChangeHandler}
        value={selectedValue}
        onClick={toggleOptions}
      >
        {/* <option value="" disabled hidden>
          {selectedValue}
        </option> */}
      </SelectStyled>
      {/* <DropdownIcon>▼</DropdownIcon> */}
      {showOptions && (
        <SelectDivStyled>
          {options.map((option, index) => (
            <DinnerOptionStyled key={index} value={option}>
              {option}
            </DinnerOptionStyled>
          ))}
        </SelectDivStyled>
      )}
    </SelectContainer>
  );
}

export default CustomDropdown;
