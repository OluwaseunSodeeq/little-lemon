import styled from "styled-components";
import { IoMdStar } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";

import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { LASTINPUTID } from "../ui/Constant";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { LiaGlassCheersSolid } from "react-icons/lia";

const ConfirmReservationStyled = styled.div`
  background-color: var(--deepGreen);
  padding: 3rem 0.5rem;
`;

// const Form = styled.form`
//   position: relative;
//   width: 100%;
// `;

const GenaralInputsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2rem;
`;
const EachInputContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
`;
const Input = styled.input`
  height: 100%;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  border: none;
  outline: var(--deepGreen);
  font-weight: var(--bold);
  color: var(--deepGreen);
  width: ${({ itemId }) => (itemId === LASTINPUTID ? "80%" : "100%")};
  /* z-index: ${({ itemId }) => (itemId === LASTINPUTID ? "20%" : "")}; */
  margin-left: ${({ itemId }) => (itemId === LASTINPUTID ? "20%" : "")};

  &:focus {
    height: 100%;
    padding: 0 2rem;
    /* outline: var(pureWhite); */
    /* border: 5px solid var(--deepGreen); */
  }
  &::placeholder {
    color: var(--deepGreen);
    font-style: italic;
    font-size: 1.6rem;
    /* font-family: var(--karla); */
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
  /* height: 3.5rem; */
  padding: 0 1rem;
`;
const OptionStyled = styled.option`
  font-weight: var(--bold);
  font-size: 1.4rem;
  padding: 0 1rem;
  color: var(deepGreen);
  z-index: 10;
`;
// BOTTOM
const GenaralBottomContainer = styled.div`
  margin-top: 2rem;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  /* row-gap: 2rem; */
`;
// Make Reservation Data
const MakeReservationDataContainer = styled.div`
  width: 45%;
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
`;
const EachMakeReservationData = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1.5rem;
`;
const IconSpan = styled.span`
  & > * {
    font-size: 3.4rem;
    color: var(--pureWhite);
  }
`;
const TextSpan = styled.span`
  font-size: 1.4rem;
  color: var(--pureWhite);
`;
const ButtonSelected = styled.div`
  font-weight: var(--Bold);
  color: var(--pureWhite);
  font-size: 2rem;
`;
const TextAreaContainer = styled.div`
  width: 45%;
`;
const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 13rem;
`;
function BackPageOfMakeReservation({
  values,
  handleChange,
  dispatch,
  date,
  time,
  occasion,
  dinner,
}) {
  const [selectCountryCode, setSelectCountryCode] = useState("NG");
  const contryCodeHandler = (e) => setSelectCountryCode(e.target.value);
  const dataArr = [
    {
      label: "First Name",
      id: "firstName",
      inputType: "text",
      itemId: 0,
      placeholder: "Oluwaseun",
    },
    {
      label: "Last Name",
      id: "lastName",
      inputType: "text",
      itemId: 1,
      placeholder: "Sodeeq",
    },
    {
      label: "Email",
      id: "email",
      inputType: "email",
      itemId: 2,
      placeholder: "ademolaoluwaseun90@gmail.com",
    },
    {
      label: "Phone Number",
      id: "phoneNumber",
      inputType: "tel",
      itemId: 3,
      placeholder: "8149428278",
      selectOptns: [
        { code: +234, countryAbbrev: "NG", country: "Nigeria" },
        { code: +1, countryAbbrev: "US", country: "United State of America" },
        { code: +91, countryAbbrev: "IN", country: "India" },
        { code: +44, countryAbbrev: "GB", country: "Great Britain" },
        { code: +86, countryAbbrev: "CN", country: "China" },
      ],
    },
  ];
  const textAreaText = { label: "Special Requests", value: "" };

  const makeReservationArr = [
    { icon: <FaCalendar />, text: values.date || "Select Date" },
    { icon: <IoPersonOutline />, text: values.dinner || "No. of dinners" },
    { icon: <LuAlarmClock />, text: values.time || "Select Time" },
    { icon: <LiaGlassCheersSolid />, text: values.occasion || "Occasion" },
  ];
  const textAreaHandler = (e) => {
    handleChange(e);
    dispatch({ type: "textArea", payload: e.target.value });
  };
  return (
    <>
      <Container as="section" type="confirmReservation">
        <Content>
          <ConfirmReservationStyled>
            {/* <Form action=""> */}
            <GenaralInputsContainer>
              {dataArr.map((input, i) => {
                const {
                  id,
                  inputType,
                  label,
                  itemId,
                  selectOptns,
                  placeholder,
                } = input;
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
                    <InputWrapper>
                      {itemId === LASTINPUTID && (
                        <SelectStyled
                          value={selectCountryCode}
                          onChange={contryCodeHandler}
                        >
                          {selectOptns.map((optn) => (
                            <OptionStyled key={optn.country}>
                              {optn.countryAbbrev}
                            </OptionStyled>
                          ))}
                        </SelectStyled>
                      )}
                      <Input
                        type={inputType}
                        itemId={itemId}
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        value={values.id}
                        onChange={handleChange}
                      />
                    </InputWrapper>
                  </EachInputContainer>
                );
              })}
            </GenaralInputsContainer>
            <GenaralBottomContainer>
              <MakeReservationDataContainer>
                <MakeReservationData>
                  {makeReservationArr.map((data, i) => {
                    const { icon, text } = data;
                    return (
                      <EachMakeReservationData key={i}>
                        <IconSpan>{icon}</IconSpan>
                        <TextSpan>{text}</TextSpan>
                      </EachMakeReservationData>
                    );
                  })}
                </MakeReservationData>
                <ButtonSelected>{`${values.seating} seating`}</ButtonSelected>
              </MakeReservationDataContainer>
              <TextAreaContainer>
                <LabelInput>{textAreaText.label}</LabelInput>
                {/* <TextAreaStyled value={} onChange={}/> */}
                <TextAreaStyled
                  id="textArea"
                  onChange={textAreaHandler}
                  // value={values.id}
                />
              </TextAreaContainer>
            </GenaralBottomContainer>
            {/* </Form> */}
          </ConfirmReservationStyled>
        </Content>
      </Container>
    </>
  );
}

export default BackPageOfMakeReservation;
