// import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { IoMdStar } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { LuAlarmClock } from "react-icons/lu";

import { LASTINPUTID } from "../ui/Constant";
import { Paragraph } from "../ui/Paragraph";

const GenaralInputsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2rem;
`;
const EachInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const LabelInput = styled.label`
  font-family: var(--karla);
  color: var(--pureWhite);
  font-size: 1.6rem;
`;
const InputWrapper = styled.div`
  width: 100%;
  padding: 0px;
  position: relative;
  height: 4.5rem;
  overflow: hidden;
  background-color: var(--pureWhite);
  border-radius: var(--border-radius-md);
  border: ${({ error }) => (error ? "2px solid red" : "")};
`;
const Input = styled.input`
  height: 100%;
  position: relative;
  padding: ${({ space }) => (space ? "0.5rem 2rem;" : "0.5rem 1rem;")};
  border-radius: var(--border-radius-md);
  border: none;
  outline: var(--deepGreen);
  font-weight: var(--bold);
  color: var(--deepGreen);
  /*  */
  width: ${({ itemId }) => (itemId === LASTINPUTID ? "80%" : "100%")};
  margin-left: ${({ itemId }) => (itemId === LASTINPUTID ? "20%" : "")};
  &:focus {
    height: 100%;
    padding: 0 2.5rem;
  }
  &::placeholder {
    color: var(--deepGreen);
    font-style: italic;
    font-size: 1.6rem;
  }
`;

// Select
const SelectStyled = styled.select`
  font-family: var(--karla);
  color: var(--deepGreen);
  border-radius: var(--border-radius-md);
  height: 100%;
  position: absolute;
  top: -0.1rem;
  left: 0;
  width: 23%;
  z-index: 20;
  font-size: 1.6rem;
  font-weight: var(--regular);
  border: none;
  outline: none;
  padding: 0 1rem;
`;
const OptionStyled = styled.option`
  font-weight: var(--bold);
  font-size: 1.4rem;
  padding: 0 1rem;
  color: var(deepGreen);
  z-index: 10;
`;

// Make Reservation Data
const MakeReservationDataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

const MakeReservationData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2rem;
`;
const EachMakeReservationData = styled.div`
  width: 45%;
  color: var(--pureWhite);
  display: flex;
  justify-content: space-between;
  /* gap: 2rem; */
  align-items: center;
  padding-right: 1.5rem;
  border-radius: var(--border-radius-sm);
  border: ${({ error }) => (error ? "2px solid red" : "")};
  cursor: pointer;
`;
const IconSpan = styled.span`
  & > * {
    font-size: 3rem;
    color: var(--pureWhite);
  }
`;
const TextSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;
const ButtonSelected = styled.div`
  font-weight: var(--Bold);
  color: var(--pureWhite);
  font-size: 2rem;
  margin-top: 2rem;
`;
const TextAreaContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 13rem;
  border-radius: var(--border-radius-md);
  padding: 2rem;
`;

export function LeftBackCard({
  values,
  handleChange,
  errors,
  touched,
  dataArr,
  turnCardHandler,
  formSubmitted,
}) {
  const cardLeftInput = dataArr.filter(
    (input) => input.id === "firstName" || input.id === "email"
  );
  // console.log(cardLeftInput);
  const makeReservationArr = [
    {
      icon: <FaCalendar style={{ fontSize: "2.4rem", color: "inherit" }} />,
      text: values.date || "Select Date",
      id: "date",
      name: "date",
    },
    {
      icon: (
        <IoPersonOutline style={{ fontSize: "2.4rem", color: "inherit" }} />
      ),
      text: values.dinner || "No. of diners",
      id: "dinner",
      name: "dinner",
    },
    {
      icon: <LuAlarmClock style={{ fontSize: "2.4rem", color: "inherit" }} />,
      text: values.time || "Select Time",
      id: "time",
      name: "time",
    },
    {
      icon: (
        <LiaGlassCheersSolid style={{ fontSize: "2.4rem", color: "inherit" }} />
      ),
      text: values.occasion || "Occasion",
      id: "occasion",
      name: "occasion",
    },
  ];

  return (
    <div>
      <GeneralInputsContainer
        // LestInput Array
        arr={cardLeftInput}
        errors={errors}
        touched={touched}
        values={values}
        handleChange={handleChange}
        formSubmitted={formSubmitted}
      />
      <SummaryOfSelectTags
        // frontpage result Array
        makeReservationArr={makeReservationArr}
        values={values}
        errors={errors}
        turnCardHandler={turnCardHandler}
        formSubmitted={formSubmitted}
      />
    </div>
  );
}

export function RightBackCard({
  values,
  handleChange,
  errors,
  touched,
  dataArr,
  handleBlur,
  formSubmitted,
}) {
  const textAreaText = { label: "Special Requests", value: "" };

  const cardRightInput = dataArr.filter(
    (input) => input.id !== "firstName" && input.id !== "email"
  );
  return (
    <div>
      <GeneralInputsContainer
        arr={cardRightInput}
        errors={errors}
        touched={touched}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        formSubmitted={formSubmitted}
      />

      <TextAreaContainer>
        <LabelInput>{textAreaText.label}</LabelInput>
        <TextAreaStyled
          id="textArea"
          name="textArea"
          onChange={handleChange}
          value={values["textArea"]}
          onBlur={handleBlur}
        />
        <div>
          {/* {errors.textArea && touched.textArea && (
            <Paragraph fontSize="large" color="red">
              {errors.textArea}
            </Paragraph>
          )} */}
        </div>
      </TextAreaContainer>
    </div>
  );
}

function SummaryOfSelectTags({
  turnCardHandler,
  makeReservationArr,
  values,
  errors,
  formSubmitted,
}) {
  return (
    <MakeReservationDataContainer>
      <MakeReservationData>
        {makeReservationArr.map((data) => {
          const { icon, text, id, name } = data;
          console.log(errors[name] && formSubmitted);
          return (
            <EachMakeReservationData
              key={id}
              error={errors[name] && formSubmitted}
              onClick={turnCardHandler}
            >
              <IconSpan>{icon}</IconSpan>
              <TextSpan>{text}</TextSpan>
            </EachMakeReservationData>
          );
        })}
      </MakeReservationData>
      <ButtonSelected>{`${values.seating} seating`}</ButtonSelected>
    </MakeReservationDataContainer>
  );
}

function GeneralInputsContainer({
  arr,
  errors,
  touched,
  values,
  handleChange,
  formSubmitted,
}) {
  return (
    <GenaralInputsContainer>
      {arr.map((input, i) => {
        const { id, inputType, label, itemId, selectOptns, placeholder } =
          input;
        return (
          <EachInputContainer key={i}>
            <LabelInput htmlFor={id}>
              <IoMdStar
                style={{
                  fontSize: "1.2rem",
                  color: "var(--pureWhite)",
                }}
              />
              {label}
            </LabelInput>

            <InputWrapper error={errors[id] && touched[id]}>
              {itemId === LASTINPUTID && (
                <SelectStyled
                  id={"countryCode"}
                  value={values.countryCode}
                  onChange={handleChange}
                >
                  {selectOptns.map((optn) => {
                    const { countryAbbrev, country, code } = optn;
                    return (
                      // <OptionStyled value={Number(code)} key={country}>
                      <OptionStyled value={code} key={country}>
                        {countryAbbrev}
                      </OptionStyled>
                    );
                  })}
                </SelectStyled>
              )}
              <Input
                type={inputType}
                itemId={itemId}
                id={id}
                name={id}
                placeholder={placeholder}
                value={values[id]}
                onChange={handleChange}
                space={itemId === LASTINPUTID}
              />
            </InputWrapper>
            {errors[id] && touched[id] && formSubmitted && (
              <Paragraph color="red" fontSize="large">
                {errors[id]}
              </Paragraph>
            )}
          </EachInputContainer>
        );
      })}
    </GenaralInputsContainer>
  );
}
// INITIAL APPROACH
// export default BackPageOfMakeReservation;

// import styled from "styled-components";
// import { IoMdStar } from "react-icons/io";
// import { FaCalendar } from "react-icons/fa";

// import { LASTINPUTID } from "../ui/Constant";
// import { useState } from "react";
// import { IoPersonOutline } from "react-icons/io5";
// import { LuAlarmClock } from "react-icons/lu";
// import { LiaGlassCheersSolid } from "react-icons/lia";
// import { Paragraph } from "../ui/Paragraph";

// const ConfirmReservationStyled = styled.div`
//   background-color: var(--deepGreen);
//   padding: 3rem 0.5rem;
// `;

// const GenaralInputsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   row-gap: 2rem;
// `;
// const EachInputContainer = styled.div`
//   width: 45%;
//   display: flex;
//   flex-direction: column;
//   /* justify-content: flex-start; */
// `;
// const LabelInput = styled.label`
//   font-family: var(--karla);
//   color: var(--pureWhite);
//   font-size: 1.6rem;
// `;
// const InputWrapper = styled.div`
//   width: 100%;
//   padding: 0px;
//   position: relative;
//   height: 4.5rem;
//   /* height: auto; */
//   overflow: hidden;
//   background-color: var(--pureWhite);
//   border-radius: var(--border-radius-md);
//   border: ${({ error }) => (error ? "2px solid red" : "")};
// `;
// const Input = styled.input`
//   height: 100%;
//   position: relative;
//   padding: 0.5rem 1rem;
//   border-radius: var(--border-radius-md);
//   border: none;
//   outline: var(--deepGreen);
//   font-weight: var(--bold);
//   color: var(--deepGreen);
//   /*  */
//   width: ${({ itemId }) => (itemId === LASTINPUTID ? "80%" : "100%")};
//   margin-left: ${({ itemId }) => (itemId === LASTINPUTID ? "20%" : "")};
//   &:focus {
//     height: 100%;
//     padding: 0 2.5rem;
//   }
//   &::placeholder {
//     color: var(--deepGreen);
//     font-style: italic;
//     font-size: 1.6rem;
//     /* font-family: var(--karla); */
//   }
// `;

// // Select
// const SelectStyled = styled.select`
//   font-family: var(--karla);
//   color: var(--deepGreen);
//   border-radius: var(--border-radius-md);
//   height: 100%;
//   position: absolute;
//   top: -0.1rem;
//   left: 0;
//   width: 23%;
//   z-index: 20;
//   font-size: 1.6rem;
//   font-weight: var(--regular);
//   border: none;
//   outline: none;
//   /* height: 3.5rem; */
//   padding: 0 1rem;
// `;
// const OptionStyled = styled.option`
//   font-weight: var(--bold);
//   font-size: 1.4rem;
//   padding: 0 1rem;
//   color: var(deepGreen);
//   z-index: 10;
// `;
// // BOTTOM
// const GenaralBottomContainer = styled.div`
//   margin-top: 2rem;

//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   flex-wrap: wrap;

//   @media (max-width: 450px) {
//     align-items: center;
//   }
//   /* row-gap: 2rem; */
// `;
// // Make Reservation Data
// const MakeReservationDataContainer = styled.div`
//   width: 45%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   margin-top: 2rem;
// `;

// const MakeReservationData = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;

//   row-gap: 2rem;
// `;
// const EachMakeReservationData = styled.div`
//   width: 45%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-right: 1.5rem;
//   border-radius: var(--border-radius-sm);

//   border: ${({ error }) => (error ? "2px solid red" : "")};
// `;
// const IconSpan = styled.span`
//   & > * {
//     font-size: 3rem;
//     color: var(--pureWhite);
//   }
// `;
// const TextSpan = styled.span`
//   font-size: 1.4rem;
//   color: var(--pureWhite);
//   font-weight: 600;
// `;
// const ButtonSelected = styled.div`
//   font-weight: var(--Bold);
//   color: var(--pureWhite);
//   font-size: 2rem;
// `;
// const TextAreaContainer = styled.div`
//   width: 45%;
// `;
// const TextAreaStyled = styled.textarea`
//   width: 100%;
//   height: 13rem;
//   border-radius: var(--border-radius-md);
//   padding: 2rem;
// `;
// function BackPageOfMakeReservation({
//   values,
//   handleChange,
//   dispatch,
//   errors,
//   touched,
// }) {
//   const [selectCountryCode, setSelectCountryCode] = useState("NG");
//   const contryCodeHandler = (e) => setSelectCountryCode(e.target.value);
//   const dataArr = [
//     {
//       label: "First Name",
//       id: "firstName",
//       inputType: "text",
//       itemId: 0,
//       placeholder: "Oluwaseun",
//     },
//     {
//       label: "Last Name",
//       id: "lastName",
//       inputType: "text",
//       itemId: 1,
//       placeholder: "Sodeeq",
//     },
//     {
//       label: "Email",
//       id: "email",
//       inputType: "email",
//       itemId: 2,
//       placeholder: "ademolaoluwaseun90@gmail.com",
//     },
//     {
//       label: "Phone Number",
//       id: "tel",
//       inputType: "tel",
//       itemId: 3,
//       placeholder: "8149428278",
//       selectOptns: [
//         { code: +234, countryAbbrev: "NG", country: "Nigeria" },
//         { code: +1, countryAbbrev: "US", country: "United State of America" },
//         { code: +91, countryAbbrev: "IN", country: "India" },
//         { code: +44, countryAbbrev: "GB", country: "Great Britain" },
//         { code: +86, countryAbbrev: "CN", country: "China" },
//       ],
//     },
//   ];
//   const textAreaText = { label: "Special Requests", value: "" };

//   const makeReservationArr = [
//     { icon: <FaCalendar />, text: values.date || "Select Date", id: "date" },
//     {
//       icon: <IoPersonOutline />,
//       text: values.dinner || "No. of diners",
//       id: "dinner",
//     },
//     { icon: <LuAlarmClock />, text: values.time || "Select Time", id: "time" },
//     {
//       icon: <LiaGlassCheersSolid />,
//       text: values.occasion || "Occasion",
//       id: "occasion",
//     },
//   ];
//   const textAreaHandler = (e) => {
//     handleChange(e);
//     dispatch({ type: "textArea", payload: e.target.value });
//   };
//   // console.log(errors);
//   return (
//     <>
//       {/* <Container as="section" type="confirmReservation">
//         <Content> */}
//       <ConfirmReservationStyled>
//         {/* <Form action=""> */}
//         <GenaralInputsContainer>
//           {dataArr.map((input, i) => {
//             const { id, inputType, label, itemId, selectOptns, placeholder } =
//               input;
//             return (
//               <EachInputContainer key={i}>
//                 <LabelInput htmlFor={id}>
//                   <IoMdStar
//                     style={{
//                       fontSize: "1.2rem",
//                       color: "var(--pureWhite)",
//                     }}
//                   />
//                   {label}
//                 </LabelInput>

//                 <InputWrapper error={errors[id] && touched[id]}>
//                   {itemId === LASTINPUTID && (
//                     <SelectStyled
//                       value={selectCountryCode}
//                       onChange={contryCodeHandler}
//                     >
//                       {selectOptns.map((optn) => (
//                         <OptionStyled key={optn.country}>
//                           {optn.countryAbbrev}
//                         </OptionStyled>
//                       ))}
//                     </SelectStyled>
//                   )}
//                   <Input
//                     type={inputType}
//                     itemId={itemId}
//                     id={id}
//                     name={id}
//                     placeholder={placeholder}
//                     value={values[id]}
//                     onChange={handleChange}
//                   />
//                 </InputWrapper>
//                 {errors[id] && (
//                   <Paragraph color="red" fontSize="large">
//                     {errors[id]}
//                   </Paragraph>
//                 )}
//               </EachInputContainer>
//             );
//           })}
//         </GenaralInputsContainer>
//         <GenaralBottomContainer>
//           <MakeReservationDataContainer>
//             <MakeReservationData>
//               {makeReservationArr.map((data, i) => {
//                 const { icon, text, id } = data;
//                 return (
//                   <EachMakeReservationData key={i} error={errors[id]}>
//                     <IconSpan>{icon}</IconSpan>
//                     <TextSpan>{text}</TextSpan>
//                   </EachMakeReservationData>
//                 );
//               })}
//             </MakeReservationData>
//             <ButtonSelected>{`${values.seating} seating`}</ButtonSelected>
//           </MakeReservationDataContainer>
//           <TextAreaContainer>
//             <LabelInput>{textAreaText.label}</LabelInput>
//             {/* <TextAreaStyled value={} onChange={}/> */}
//             <TextAreaStyled
//               id="textArea"
//               onChange={textAreaHandler}
//               // value={values.id}
//             />
//           </TextAreaContainer>
//         </GenaralBottomContainer>
//         {/* </Form> */}
//       </ConfirmReservationStyled>
//       {/* </Content>
//       </Container> */}
//     </>
//   );
// }

// export default BackPageOfMakeReservation;
