import styled from "styled-components";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Paragraph } from "../ui/Paragraph";
// import DateButtons from "../components/DateButtons";
import CustomButton from "../components/CustomButton";

// Make Reservations
const MakeReservationStyled = styled.div`
  padding: 2rem 0 3rem;
`;

//FORM STYLING
const Form = styled.form`
  position: relative;
  width: 100%;

  /* border: 2px solid red; */
  /* height: 23rem; */
  /* height: auto; */
`;

// RADIO STYLING
const RadioButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
  justify-content: center;
`;

const RadioButton = styled.div`
  width: 48%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1rem;

  /* border: 2px solid blue; */

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

const Radiolabel = styled.label`
  cursor: pointer;
  font-size: 1.8rem;
  color: var(--pureWhite);
  font-family: var(--karla);
  font-weight: var(--bold);
`;
const RadioInput = styled.input`
  background-color: var(--deepGreen);
  border: 1px sold var(--pureWhite);
`;

// Container for the radio input
// const RadioContainer = styled.div`
//   background-color: var(--deepGreen);
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   border: 2px solid green;
// `;

// Hidden native radio input
// const HiddenRadioInput = styled.input.attrs({ type: "radio" })`
//   border: 0;
//   clip: rect(0, 0, 0, 0);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `;

// Custom radio input
// const CustomRadioInput = styled.div`
//   width: 16px;
//   height: 16px;
//   background-color: ${(props) =>
//     props.checked ? "var(--deepGreen)" : "var(--pureWhite"};
//   border: 1px solid var(--pureWhite);
//   border-radius: 50%;
//   transition: all 150ms;
//   display: inline-block;
//   cursor: pointer;
//   margin-right: 8px;

//   ${RadioContainer}:hover & {
//     background-color: var(--lightGreen);
//   }

//   ${HiddenRadioInput}:focus + & {
//     box-shadow: 0 0 0 3px var(--lightGreen);
//   }

//   ${HiddenRadioInput}:checked + & {
//     background-color: var(--pureWhite);
//   }
// `;

function MakeReservation() {
  return (
    <>
      <Container as="div" type="makeReservationTop">
        <Content>
          <MakeReservationStyled>
            <Paragraph
              fontSize="extraLarge"
              color="yellow"
              fontWeight="bold"
              fontFamily="karla"
            >
              Reservations
            </Paragraph>
            <Form action="">
              <RadioButtonsContainer>
                <RadioButton>
                  <Radiolabel htmlFor="indoor">Indoor seating</Radiolabel>
                  <RadioInput type="radio" name="seating" id="indoor" />

                  {/* <RadioContainer className={className}> */}
                  {/* <RadioContainer> */}
                  {/* <HiddenRadioInput checked={checked} {...props} />
                  <CustomRadioInput checked={checked} /> */}
                  {/* </RadioContainer> */}
                </RadioButton>

                <RadioButton>
                  <Radiolabel htmlFor="indoor">Outdoor seating</Radiolabel>
                  <RadioInput type="radio" name="seating" id="indoor" />
                </RadioButton>
              </RadioButtonsContainer>
              <CustomButton />
            </Form>
          </MakeReservationStyled>
        </Content>
      </Container>
      <Container as="div" type="makeReservationBottom"></Container>
    </>
  );
}

export default MakeReservation;
