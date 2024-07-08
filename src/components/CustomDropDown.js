// import React, { useRef } from "react";
// import styled from "styled-components";

// // Styled components
// const SelectContainer = styled.div`
//   position: relative;
//   display: inline-block;
//   width: 100%;
//   height: 100%;
//   z-index: 20;
// `;

// const SelectStyled = styled.select`
//   /* position: relative; */
//   width: 100%;
//   height: 100%;
//   border-radius: var(--border-radius-md);
//   border: none;
//   cursor: pointer;
//   background-color: transparent;
//   appearance: none;
//   /* z-index: ${({ showOptions }) => (showOptions ? "-1" : "")}; */
// `;

// const SelectDivStyled = styled.div`
//   position: absolute;
//   width: 100%;
//   height: auto;
//   top: 0;
//   left: 0;
//   background-color: var(--deepGreen);

//   /*  */
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   padding: 10px;
//   z-index: 98;
//   border: 2px solid red;
// `;

// const OptionStyled = styled.option`
//   /* position: relative;
//   z-index: 80; */
//   width: 48%;
//   padding: 10px;
//   cursor: pointer;
//   border: 1px solid #ccc;
//   text-align: center;
//   background-color: #f9f9f9;
//   border-radius: var(--border-radius-sm);

//   &:hover,
//   &:active {
//     background-color: #e0e0e0;
//   }
// `;

// function CustomDropdown({
//   value,
//   options,
//   toggleOptions,
//   showOptions,
//   currentID,
//   dispatch,
//   ind,
//   handleChange,
// }) {
//   const selectRef = useRef(null);
//   const typeofDD = ["date", "time", "occasion", "dinner"];

//   const selectChangeHandler = (e) => {
//     const type = typeofDD[currentID];
//     handleChange(e);
//     dispatch({ type: type, payload: e.target.value });
//     toggleOptions();
//   };

//   return (
//     <SelectContainer>
//       <SelectStyled
//         ref={selectRef}
//         onChange={selectChangeHandler}
//         value={value}
//         onClick={toggleOptions}
//         name={typeofDD[currentID]}
//       />
//       {showOptions && (
//         <SelectDivStyled>
//           {options.map((option, index) => (
//             <OptionStyled
//               key={`${typeofDD[ind]}${index}`}
//               onClick={() =>
//                 selectChangeHandler({
//                   target: { name: typeofDD[currentID], value: option },
//                 })
//               }
//             >
//               {option}
//             </OptionStyled>
//           ))}
//         </SelectDivStyled>
//       )}
//     </SelectContainer>
//   );
// }

// export default CustomDropdown;
///================================2

// import React, { useRef, useEffect, useState } from "react";
// import styled from "styled-components";
// import ReactDOM from "react-dom";

// // Styled components
// const SelectContainer = styled.div`
//   position: relative;
//   display: inline-block;
//   width: 100%;
//   height: 100%;
//   z-index: 20;
// `;

// const SelectStyled = styled.select`
//   width: 100%;
//   height: 100%;
//   border-radius: var(--border-radius-md);
//   border: none;
//   cursor: pointer;
//   background-color: transparent;
//   appearance: none;
// `;

// const SelectDivStyled = styled.div`
//   position: absolute;
//   width: ${({ width }) => width}px;
//   height: auto;
//   top: ${({ top }) => top}px;
//   left: ${({ left }) => left}px;
//   background-color: var(--deepGreen);
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   padding: 10px;
//   z-index: 98;
//   border: 2px solid red;
// `;

// const OptionStyled = styled.div`
//   width: 48%;
//   padding: 10px;
//   cursor: pointer;
//   border: 1px solid #ccc;
//   text-align: center;
//   background-color: #f9f9f9;
//   border-radius: var(--border-radius-sm);

//   &:hover,
//   &:active {
//     background-color: #e0e0e0;
//   }
// `;

// function CustomDropdown({
//   value,
//   options,
//   toggleOptions,
//   showOptions,
//   currentID,
//   dispatch,
//   ind,
//   handleChange,
// }) {
//   const selectRef = useRef(null);
//   const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
//   const portalRoot = document.getElementById("portal-root");

//   const typeofDD = ["date", "time", "occasion", "dinner"];

//   const selectChangeHandler = (e) => {
//     const type = typeofDD[currentID];
//     handleChange(e);
//     dispatch({ type: type, payload: e.target.value });
//     toggleOptions();
//   };

//   useEffect(() => {
//     if (showOptions && selectRef.current) {
//       const selectRect = selectRef.current.getBoundingClientRect();
//       setPosition({
//         top: selectRect.bottom,
//         left: selectRect.left,
//         width: selectRect.width,
//       });
//     }
//   }, [showOptions]);

//   return (
//     <SelectContainer>
//       <SelectStyled
//         ref={selectRef}
//         onChange={selectChangeHandler}
//         value={value}
//         onClick={toggleOptions}
//         name={typeofDD[currentID]}
//       />
//       {showOptions &&
//         ReactDOM.createPortal(
//           <SelectDivStyled
//             top={position.top}
//             left={position.left}
//             width={position.width}
//           >
//             {options.map((option, index) => (
//               <OptionStyled
//                 key={`${typeofDD[ind]}${index}`}
//                 onMouseDown={(e) => e.preventDefault()} // Prevent focus on click
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevent click event propagation
//                   selectChangeHandler({
//                     target: { name: typeofDD[currentID], value: option },
//                   });
//                 }}
//               >
//                 {option}
//               </OptionStyled>
//             ))}
//           </SelectDivStyled>,
//           portalRoot
//         )}
//     </SelectContainer>
//   );
// }

// export default CustomDropdown;
//============================3===========
import React, { useRef, useEffect, useState } from "react";
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
  width: ${({ width }) => width}px;
  height: auto;
  top: ${({ top }) => top}px;
  left: 0;
  background-color: var(--deepGreen);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  z-index: 98;
  border: 2px solid red;
`;

const OptionStyled = styled.div`
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
  const selectContainerRef = useRef(null);
  const selectRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({ top: 0, width: 0 });

  const typeofDD = ["date", "time", "occasion", "dinner"];

  const selectChangeHandler = (e) => {
    const type = typeofDD[currentID];
    handleChange(e);
    dispatch({ type: type, payload: e.target.value });
    toggleOptions();
  };

  useEffect(() => {
    if (showOptions && selectRef.current && selectContainerRef.current) {
      const containerRect = selectContainerRef.current.getBoundingClientRect();
      const selectRect = selectRef.current.getBoundingClientRect();
      const top = selectRect.height; // Height of the select element to position the dropdown below it
      const width = containerRect.width;
      setDropdownStyle({ top, width });
    }
  }, [showOptions]);

  return (
    <SelectContainer ref={selectContainerRef}>
      <SelectStyled
        ref={selectRef}
        onChange={selectChangeHandler}
        value={value}
        onClick={toggleOptions}
        name={typeofDD[currentID]}
      />
      {showOptions && (
        <SelectDivStyled top={dropdownStyle.top} width={dropdownStyle.width}>
          {options.map((option, index) => (
            <OptionStyled
              key={`${typeofDD[ind]}${index}`}
              onMouseDown={(e) => e.preventDefault()} // Prevent focus on click
              onClick={(e) => {
                e.stopPropagation(); // Prevent click event propagation
                selectChangeHandler({
                  target: { name: typeofDD[currentID], value: option },
                });
              }}
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
