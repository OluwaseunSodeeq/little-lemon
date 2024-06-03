import { useState } from "react";
import ReactDatePicker from "react-datepicker";
// import ReactDatePicker from "react-datepicker";
// import ReactDatePicker from "react-datepicker";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styled from "styled-components";

// const StyledLabel = styled.label`
//   display: block;
//   font-size: 0.875rem;
//   font-weight: 500;
//   color: #71717a;
//   margin-bottom: 4px;
// `;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-size: 0.875rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 8px 12px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #63b3ed;
    box-shadow: 0 0 0 2px rgba(99, 179, 237, 0.2);
  }
`;

// const DateButtons = () => {
//   return (
//     <>
//       <StyledLabel htmlFor="datepicker">Pick a date:</StyledLabel>
//       <StyledInput type="date" id="datepicker" name="datepicker" />
//     </>
//   );
// };

const DateButtons = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      {/* <StyledInput></StyledInput>
      <StyledLabel></StyledLabel> */}
      <ReactDatePicker selected={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default DateButtons;
