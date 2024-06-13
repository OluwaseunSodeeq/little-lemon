import React, { useRef } from "react";
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
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  z-index: 30;
`;

const OptionStyled = styled.option`
  position: relative;
  z-index: 80;
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
function CustomDropdown({
  value,
  options,
  toggleOptions,
  showOptions,
  currentID,
  dispatch,
}) {
  const selectRef = useRef(null);
  console.log(toggleOptions);
  console.log(options, toggleOptions, showOptions);

  const selectChangeHandler = (e) => {
    const type = ["date", "time", "occasion", "dinner"][currentID];
    dispatch({ type: type, payload: e.target.value });
    toggleOptions();
  };

  return (
    <SelectContainer>
      <SelectStyled
        ref={selectRef}
        onChange={() => selectChangeHandler(currentID)}
        value={value}
        onClick={toggleOptions}
      ></SelectStyled>
      {showOptions && (
        <SelectDivStyled>
          {options.map((option, index) => (
            <OptionStyled
              key={index}
              onClick={() => selectChangeHandler({ target: { value: option } })}
            >
              {option}
            </OptionStyled>
          ))}
        </SelectDivStyled>
      )}
    </SelectContainer>
  );
}

export default CustomDropdown;
