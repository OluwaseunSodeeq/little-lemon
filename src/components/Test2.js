// src/components/CustomSelect/CustomSelect.js
import { useState, useEffect, useRef } from "react";
import { SelectContainer, Select, OptionsContainer, Option } from "./Test1";

const CustomSelect = ({ options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const selectRef = useRef(null);

  const handleSelectClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SelectContainer ref={selectRef}>
      <Select onClick={handleSelectClick}>{selectedOption}</Select>
      <OptionsContainer show={showOptions}>
        {options.map((option, index) => (
          <Option key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </Option>
        ))}
      </OptionsContainer>
    </SelectContainer>
  );
};

export default CustomSelect;

// // src/components/CustomSelect/CustomSelect.js
// import React, { useState } from "react";
// import { SelectContainer, Select, OptionsContainer, Option } from "./Test1";

// const CustomSelect = ({ options }) => {
//   const [showOptions, setShowOptions] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("Select an option");

//   const handleSelectClick = () => {
//     setShowOptions(!showOptions);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setShowOptions(false);
//   };

//   return (
//     <SelectContainer>
//       <Select onClick={handleSelectClick}>{selectedOption}</Select>
//       <OptionsContainer show={showOptions}>
//         {options.map((option, index) => (
//           <Option key={index} onClick={() => handleOptionClick(option)}>
//             {option}
//           </Option>
//         ))}
//       </OptionsContainer>
//     </SelectContainer>
//   );
// };

// export default CustomSelect;
// src/components/CustomSelect/CustomSelect.styled.js
// import styled from "styled-components";

// export const SelectContainer = styled.div`
//   position: relative;
//   width: 500px;
//   border: 2px solid red;
//   padding-top: 7rem;
// `;

// export const Select = styled.div`
//   width: 100%;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   padding: 10px;
//   cursor: pointer;
// `;

// export const OptionsContainer = styled.div`
//   display: ${(props) => (props.show ? "flex" : "none")};
//   flex-wrap: wrap;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 500px;
//   background-color: white;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   z-index: 1;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
// `;

// export const Option = styled.div`
//   width: 250px;
//   padding: 10px;
//   box-sizing: border-box; // Ensure padding is included in width
//   cursor: pointer;
//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;
