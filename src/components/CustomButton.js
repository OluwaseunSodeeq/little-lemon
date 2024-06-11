import React, { useState, useRef, forwardRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { LuAlarmClock } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomDropdown from "./Test";

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
  padding: 0;
  /* padding: 1rem 2rem; */
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

// const CustomDatePickerInput = forwardRef(
//   ({ beforeIcon, afterIcon, value, onClick }, ref) => (
//     <CustomButtonStyled onClick={onClick} ref={ref}>
//       <span>{beforeIcon}</span>
//       <span>{value}</span>
//       <span>{afterIcon}</span>
//     </CustomButtonStyled>
//   )
// );

// const DatePickerStyled = styled(DatePicker)`
//   width: 100%;
//   height: 100%;
// `;
const CustomRenderInputContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 1rem 2rem;
  z-index: 10;
  top: 0;
  left: 0;

  /* Dispaly */
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--deepGreen);
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

  &::placeholder {
    /* color: var(--deepGreen); */
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

const RenderSPanText = styled.span`
  color: var(--deepGreen);
  font-weight: var(--deepBold);
  font-size: 1.8rem;
  font-family: var(--karla);
`;

// SELECT STYLE
// const SelectStyled = styled.select`
//   position: absolute;
//   z-index: 20;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   opacity: 0;
//   cursor: pointer;

//   /* Hide the dropdown icon */
//   background-image: none;
//   background-color: transparent;
//   border: none;
//   padding: 0;
//   margin: 0;
//   color: transparent;
//   text-shadow: 0 0 0 black;
// `;
// const SelectDivStyled = styled.div`
//   /* flex */
//   /* display: flex;
//   align-content: center; */

//   /* display: ${(props) => (props.show ? "grid" : "none")}; */
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: auto;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 0.1 rem;
// `;

// DinnerOptin style
// const DinnerOptionstyle = styled.option`
//   width: 45%;
//   padding: 1rem;
//   background-color: var(--pureWhite);
//   display: inline;

/* border-right: 1px solid var(--deepGreen);
  border-top: 1px solid var(--deepGreen); */

//   border: 1px solid var(--deepGreen);
//   color: var(--deepGreen);
// `;
// const CustomButton = () => {
//   const [date, setDate] = useState(null);
//   const [option, setoption] = useState(null);
//   const dateRef = useRef(null);
//   const selectRef = useRef(null);
//   const defaultDate = "Select Date";

//   const onShowPicker = () => {
//     dateRef.current.showPicker();
//   };
//   // const onDisplayOptions = () => {
//   //   // dateRef.current.showPicker();
//   //   console.log("hello");
//   // };
//   const dateChangeHandler = (e) => {
//     const seletedDate = new Date(e.target.value);
//     const formattedDate = seletedDate.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//     console.log(formattedDate);
//     setDate(formattedDate);
//   };

//   const SelectClickHandler = (e, optns) => {
//     // const currentSelect = e.target === selectRef;
//     // currentSelect && selectRef.current.click();
//     const selectedOption = e.target.value;
//     // const selectedOption = optns.find(
//     //   (option) => option.value === selectedValue
//     // );
//     setoption(selectedOption);
//   };
// const CustomSelect = styled.select`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   cursor: pointer;
//   appearance: none;
//   background-color: #f1f1f1;
// `;
// const OptionItem = styled.div`
//   padding: 10px;
//   cursor: pointer;
//   border: 1px solid #ccc;
//   text-align: center;
//   background-color: #f9f9f9;
//   &:hover {
//     background-color: #e0e0e0;
//   }
// `;

// const SelectContainer = styled.div`
//   position: relative;
// `;

// const OptionContainer = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 100%;
//   background-color: #fff;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   z-index: 1;
//   display: ${(props) => (props.show ? "grid" : "none")};
//   grid-template-columns: repeat(2, 1fr);
//   gap: 10px;
//   padding: 10px;
// `;

const CustomButton = () => {
  const [date, setDate] = useState(null);
  const [value, setEachValue] = useState({
    date: { value: "Select Date", show: false },
    dinner: { value: "No. of Dinners", show: false },
    occassion: { value: "Occassion", show: false },
    time: { value: "Select Time", show: false },
  });

  const [option, setOption] = useState(null);
  const dateRef = useRef(null);
  const selectRef = useRef(null);
  const defaultDate = "Select Date";

  //
  // const [showOptions, setShowOptions] = useState(false);
  // const [selectedValue, setSelectedValue] = useState("No. of Diners");

  const content = [
    {
      label: "Date",
      beforeIcon: <CiCalendar style={{ fontSize: "3rem" }} />,
      value: "Select Date",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
      inputType: "input",
    },
    {
      label: "Number of Dinners",
      beforeIcon: <IoPersonOutline style={{ fontSize: "3rem" }} />,
      value: "No. of Dinners",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
      inputType: "select",
      options: [
        "1 Dinner",
        "2 Dinners",
        "3 Dinner",
        "4 Dinners",
        "5 Dinner",
        "6 Dinners",
        "7 Dinner",
        "8 Dinners",
        "9 Dinner",
        "10 Dinners",
      ],
    },
    {
      label: "Occasion",
      beforeIcon: <LiaGlassCheersSolid style={{ fontSize: "3rem" }} />,
      value: "Occasion",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
      inputType: "select",
      options: ["Birthday", "Anniversary", "Graduation", "Other"],
    },
    {
      label: "Time",
      beforeIcon: <LuAlarmClock style={{ fontSize: "3rem" }} />,
      value: "Select Time",
      afterIcon: <RiArrowDropDownLine style={{ fontSize: "3.4rem" }} />,
      inputType: "select",
      options: ["Morning", "Afternoon", "Evening", "Night"],
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
    setDate(formattedDate);
  };

  // const selectChangeHandler = (e) => {
  //   setOption(e.target.value);
  // };
  // const toggleOptions = () => {
  //   setShowOptions((prevShow) => !prevShow);
  // };

  // const handleOptionClick = (value) => {
  //   setSelectedValue(value);
  //   setShowOptions(false);
  // };

  return (
    <CustomButtonsContainer>
      {content.map((btn, i) => {
        const {
          beforeIcon,
          value: data,
          afterIcon,
          label,
          inputType,
          options,
        } = btn;
        return (
          <ButtonContainer key={i}>
            <ButtonLabel>{label}</ButtonLabel>
            <CustomButtonStyledContainer>
              {inputType === "input" ? (
                <>
                  <DateInput
                    type="date"
                    placeholder={defaultDate}
                    ref={dateRef}
                    onClick={onShowPicker}
                    onChange={dateChangeHandler}
                  />
                  <CustomRenderInputContent>
                    <span>{beforeIcon}</span>
                    <RenderSPanText>{data}</RenderSPanText>
                    <span>{afterIcon}</span>
                  </CustomRenderInputContent>
                </>
              ) : (
                <>
                  <CustomDropdown options={{ options, value, setEachValue }} />

                  {/* <SelectStyled ref={selectRef} onChange={selectChangeHandler}>
                    <option value="" disabled selected hidden>
                      {value}
                    </option>
                    <SelectDivStyled>
                      {options.map((option, index) => (
                        <DinnerOptionstyle key={index} value={option}>
                          {option}
                        </DinnerOptionstyle>
                      ))}
                    </SelectDivStyled>
                  </SelectStyled> */}
                  <CustomRenderInputContent
                  // onClick={() => selectRef.current.click()}
                  >
                    <span>{beforeIcon}</span>
                    <RenderSPanText>{option || value}</RenderSPanText>
                    <span>{afterIcon}</span>
                  </CustomRenderInputContent>
                </>
              )}
            </CustomButtonStyledContainer>
          </ButtonContainer>
        );
      })}
    </CustomButtonsContainer>
  );
};

//  <SelectContainer>
//                   <CustomSelect
//                     onClick={toggleOptions}
//                     value={selectedValue}
//                     readOnly
//                   >
//                     <option>{selectedValue}</option>
//                   </CustomSelect>
//                   <OptionContainer show={showOptions}>
//                     {options.map((option) => (
//                       <OptionItem
//                         key={option}
//                         onClick={() => handleOptionClick(option)}
//                       >
//                         {option}
//                       </OptionItem>
//                     ))}
//                   </OptionContainer>
//                 </SelectContainer>

//   return (
//     <CustomButtonsContainer>
//       {content.map((btn, i) => {
//         const { beforeIcon, value, afterIcon, label, inputType, options } = btn;
//         return (
//           <ButtonContainer
//             key={i}
//             // onClick={
//             //   inputType === "input" ? dateClickHandler : SelectClickHandler
//             // }
//           >
//             <ButtonLabel>{label}</ButtonLabel>
//             <CustomButtonStyledContainer>
//               {inputType === "input" ? (
//                 <>
//                   <DateInput
//                     type="date"
//                     placeholder={defaultDate}
//                     ref={dateRef}
//                     onClick={onShowPicker}
//                     onChange={dateChangeHandler}
//                   />
//                   <CustomRenderInputContent>
//                     <span>{beforeIcon}</span>
//                     <RenderDate>{value || defaultDate}</RenderDate>
//                     <span>{afterIcon}</span>
//                   </CustomRenderInputContent>
//                 </>
//               ) : (
//                 <>
//                   <SelectStyled
//                     ref={selectRef}
//                     // onClick={onDisplayOptions}
//                     onChange={(e) => SelectClickHandler}
//                   >
//                     {options.map((optn) => {
//                       <DinnerOptionstyle key={optn} value={optn}>
//                         {optn}
//                       </DinnerOptionstyle>;
//                     })}
//                   </SelectStyled>
//                   <CustomRenderInputContent>
//                     <span>{beforeIcon}</span>
//                     <RenderDate>{option || defaultDate}</RenderDate>
//                     <span>{afterIcon}</span>
//                   </CustomRenderInputContent>
//                 </>
//               )}
//             </CustomButtonStyledContainer>
//           </ButtonContainer>
//         );
//       })}
//     </CustomButtonsContainer>
//   );
// };

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
