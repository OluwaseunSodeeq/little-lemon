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

const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "space",
})`
  height: 100%;
  position: relative;
  padding: ${({ space }) => (space ? "0.5rem 2rem;" : "0.5rem 1rem;")};
  border-radius: var(--border-radius-md);
  border: none;
  outline: var(--deepGreen);
  font-weight: var(--bold);
  color: var(--deepGreen);
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
        // Input Array
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
        const { id, inputType, label, selectOptns, placeholder } = input;
        const itemId = id;
        console.log(itemId);
        console.log(typeof itemId);
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
                  name={"countryCode"}
                  value={values.countryCode}
                  onChange={handleChange}
                >
                  {selectOptns.map((optn) => {
                    const { countryAbbrev, country, code } = optn;
                    return (
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
