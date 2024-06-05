import React, { useState, useRef, forwardRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { LuAlarmClock } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";

const CustomButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 5rem;
  width: 100%;
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
  padding: 1rem 2rem;
  background-color: var(--pureWhite);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
`;

const CustomButtonStyled = styled.div`
  position: relative;
  width: 100%;
  border-radius: var(--border-radius-md);
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid green;

  & > span:not(span:nth-child(2)) > * {
    color: var(--deepGreen);
    font-size: 2.4rem;
    font-weight: var(--bold);

    &:hover {
      color: var(--yellow);
    }
  }
  & > span:nth-child(2) {
    color: var(--deepGreen);
    font-size: 1.6rem;
    font-weight: var(--bold);
    font-family: var(--karla);
  }
`;

const ButtonLabel = styled.label`
  font-size: 1.6rem;
  color: var(--pureWhite);
`;

const SelectStyled = styled.select`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0; /* hide the select */
`;

const CustomDatePickerInput = forwardRef(
  ({ beforeIcon, afterIcon, value, onClick }, ref) => (
    <CustomButtonStyled onClick={onClick} ref={ref}>
      <span>{beforeIcon}</span>
      <span>{value}</span>
      <span>{afterIcon}</span>
    </CustomButtonStyled>
  )
);

const DatePickerStyled = styled(DatePicker)`
  width: 100%;
  height: 100%;
`;

const CustomButton = () => {
  const [date, setDate] = useState(null);
  const dateRef = useRef(null);
  const selectRef = useRef(null);

  const dateClickHandler = () => {
    dateRef.current.setFocus();
  };

  const dateChangeHandler = (selectedDate) => {
    setDate(selectedDate);
    console.log(selectedDate);
  };

  const SelectClickHandler = (e) => {
    const currentSelect = e.target === selectRef;
    currentSelect && selectRef.current.click();
  };

  const content = [
    {
      label: "Date",
      beforeIcon: <CiCalendar />,
      value: date || "Select Date",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
      inputType: "input",
    },
    {
      label: "Number of Dinners",
      beforeIcon: <IoPersonOutline />,
      value: "No. of Dinners",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
      inputType: "select",
    },
    {
      label: "Ocassion",
      beforeIcon: <LiaGlassCheersSolid />,
      value: "Occasion",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
      inputType: "select",
    },
    {
      label: "Time",
      beforeIcon: <LuAlarmClock />,
      value: "Select Time",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
      inputType: "select",
    },
  ];

  return (
    <CustomButtonsContainer>
      {content.map((btn, i) => {
        const { beforeIcon, value, afterIcon, label, inputType } = btn;
        return (
          <ButtonContainer
            key={i}
            onClick={
              inputType === "input" ? dateClickHandler : SelectClickHandler
            }
          >
            <ButtonLabel>{label}</ButtonLabel>
            <CustomButtonStyledContainer>
              {inputType === "input" ? (
                <DatePickerStyled
                  selected={date}
                  onChange={dateChangeHandler}
                  customInput={
                    <CustomDatePickerInput
                      beforeIcon={beforeIcon}
                      value={value}
                      afterIcon={afterIcon}
                    />
                  }
                  ref={dateRef}
                />
              ) : (
                <SelectStyled ref={selectRef} />
              )}
            </CustomButtonStyledContainer>
          </ButtonContainer>
        );
      })}
    </CustomButtonsContainer>
  );
};

export default CustomButton;

// Styled components
// const CustomButtonsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   row-gap: 5rem;
//   width: 100%;
// `;
// const ButtonContainer = styled.div`
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;
// `;
// const ButtonLabel = styled.div`
//   margin-right: 1rem;
// `;
// const CustomButtonStyledContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const CustomButtonStyled = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 200px; /* Adjust as needed */
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   background-color: white;
// `;

// const DateInput = styled.input`
//   display: none;
// `;
// const SelectStyled = styled.select``;

// // Custom input for DatePicker
// const CustomInput = forwardRef(({ value, onClick }, ref) => (
//   <CustomButtonStyled onClick={onClick} ref={ref}>
//     <span>
//       <CiCalendar />
//     </span>
//     <span>{value}</span>
//     <span>
//       <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />
//     </span>
//   </CustomButtonStyled>
// ));

// function CustomButton() {
//   // States
//   const [date, setDate] = useState(null);
//   const dateRef = useRef(null);
//   const selectRef = useRef(null);

//   // Handlers
//   const dateChangeHandler = (selectedDate) => {
//     setDate(selectedDate);
//     console.log(selectedDate);
//   };

//   const SelectClickHandler = (e) => {
//     const currentSelect = e.target === selectRef.current;
//     currentSelect && selectRef.current.click();
//   };

//   // Default Array
//   const content = [
//     {
//       label: "Date",
//       beforeIcon: <CiCalendar />,
//       value: date ? format(date, "MM/dd/yyyy") : "Select Date",
//       AfterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
//       inputType: "input",
//     },
//     {
//       label: "Number of Dinners",
//       beforeIcon: <IoPersonOutline />,
//       value: "No. of Dinners",
//       AfterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
//       inputType: "select",
//     },
//     {
//       label: "Ocassion",
//       beforeIcon: <LiaGlassCheersSolid />,
//       value: "Occasion",
//       AfterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
//       inputType: "select",
//     },
//     {
//       label: "Time",
//       beforeIcon: <LuAlarmClock />,
//       value: "Select Time",
//       AfterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
//       inputType: "select",
//     },
//   ];

//   return (
//     <CustomButtonsContainer>
//       {content.map((btn, i) => {
//         const { beforeIcon, value, AfterIcon, label, inputType } = btn;
//         return (
//           <ButtonContainer
//             key={i}
//             onClick={
//               inputType === "input"
//                 ? () => dateRef.current.setFocus()
//                 : SelectClickHandler
//             }
//           >
//             <ButtonLabel>{label}</ButtonLabel>
//             <CustomButtonStyledContainer>
//               {inputType === "input" ? (
//                 <DatePicker
//                   selected={date}
//                   onChange={dateChangeHandler}
//                   customInput={<CustomInput />}
//                   ref={dateRef}
//                 />
//               ) : (
//                 <SelectStyled ref={selectRef} />
//               )}
//             </CustomButtonStyledContainer>
//           </ButtonContainer>
//         );
//       })}
//     </CustomButtonsContainer>
//   );
// }

// export default CustomButton;

// import styled from "styled-components";
// // import moment from "moment";
// import DatePicker from "react-datepicker";
// // import { format, parseISO } from "date-fns";

// import { RiArrowDropDownLine } from "react-icons/ri";
// import { CiCalendar } from "react-icons/ci";
// import { IoPersonOutline } from "react-icons/io5";
// import { LuAlarmClock } from "react-icons/lu";
// import { LiaGlassCheersSolid } from "react-icons/lia";
// import { useRef, useState } from "react";

//   return (
//     <CustomButtonsContainer>
//       {content.map((btn, i) => {
//         const { beforeIcon, value, afterIcon, label, inputType } = btn;
//         return (
//           <ButtonContainer
//             key={i}
//             onClick={
//               inputType === "input" ? dateClickHandler : SelectClickHandler
//             }
//           >
//             <ButtonLabel>{label}</ButtonLabel>
//             <CustomButtonStyledContainer>
//               {inputType === "input" ? (
//                  <DatePicker
//                                    selected={date}
//                                    onChange={dateChangeHandler}
//                                    customInput={<CustomInput />}
//                                    ref={dateRef}
//                                  />
//               ) : (
//                 <SelectStyled />
//               )}
//               <CustomButtonStyled>
//                 <span>{beforeIcon}</span>
//                 <span>{value}</span>
//                 <span>{afterIcon}</span>

//                   {/* {inputType === "input" && date
//                     ? moment(date).format("MM/DD/YYYY")
//                     : "Select Date"}
//                   {date && (
//                     <DatePicker
//                       selected={date}
//                       onChange={(selectedDate) => setDate(selectedDate)}
//                       ref={dateRef} // Reference the date picker instance
//                     />
//                   )}
//                   {inputType !== "input" && value} */}
//                   {/* <span>
//                     {value !== null &&
//                       value !== "Select Date" &&
//                       format(parseISO(value), "MM/dd/yyyy")}
//                   </span> */}

//               </CustomButtonStyled>
//             </CustomButtonStyledContainer>
//           </ButtonContainer>
//         );
//       })}
//     </CustomButtonsContainer>
//   );
// }
