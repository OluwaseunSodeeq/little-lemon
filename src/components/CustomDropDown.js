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
  width: 100%;
  height: auto;
  top: 100%;
  left: 0;
  background-color: var(--deepGreen);

  /*  */
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

  &:hover,
  &:active {
    background-color: #e0e0e0;
  }
`;

function CustomDropdown({
  value,
  options,
  toggleOptions,
  showOptions,
  currentID,
  dispatch,
  ind,
  handleChange,
}) {
  const selectRef = useRef(null);
  const typeofDD = ["date", "time", "occasion", "dinner"];

  const selectChangeHandler = (e) => {
    const type = typeofDD[currentID];
    handleChange(e);
    dispatch({ type: type, payload: e.target.value });
    toggleOptions();
  };

  return (
    <SelectContainer>
      <SelectStyled
        ref={selectRef}
        onChange={selectChangeHandler}
        value={value}
        onClick={toggleOptions}
        name={typeofDD[currentID]}
      ></SelectStyled>
      {showOptions && (
        <SelectDivStyled>
          {options.map((option, index) => (
            <OptionStyled
              key={`${typeofDD[ind]}${index}`}
              onClick={() =>
                selectChangeHandler({
                  target: { name: typeofDD[currentID], value: option },
                })
              }
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
