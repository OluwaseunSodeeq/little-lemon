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
