// src/components/CustomSelect/CustomSelect.styled.js
import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  width: 500px;
  border: 2px solid red;
  padding-top: 7rem;
`;

export const Select = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-wrap: wrap;
  position: absolute;
  top: 100%;
  left: 0;
  width: 500px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 1;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const Option = styled.div`
  width: 250px;
  padding: 10px;
  box-sizing: border-box; // Ensure padding is included in width
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
