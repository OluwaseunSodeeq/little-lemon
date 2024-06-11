import styled from "styled-components";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Paragraph } from "../ui/Paragraph";
import CustomButton from "../components/CustomButton";

// Make Reservations
const MakeReservationStyled = styled.div`
  padding: 2rem 0 3rem;
`;

// FORM STYLING

const Form = styled.form`
  position: relative;
  width: 100%;
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

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

const Radiolabel = styled.label`
  width: 55%;
  position: relative;
  cursor: pointer;
  font-size: 1.8rem;
  color: var(--pureWhite);
  font-family: var(--karla);
  font-weight: var(--bold);

  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  background-color: var(--deepGreen);
  border: 1px solid var(--pureWhite);
  display: none;

  &:checked + ${Radiolabel} > span::after {
    opacity: 1;
  }
`;

const RadioSpan = styled.span`
  position: absolute;
  background-color: var(--deepGreen);
  border: 2px solid var(--pureWhite);
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
  display: inline-block;
  right: 0;
  top: 0.25rem;

  &::after {
    content: "";
    display: block;
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--pureWhite);
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

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
                  <RadioInput type="radio" name="seating" id="indoor" />
                  <Radiolabel htmlFor="indoor">
                    Indoor seating <RadioSpan />
                  </Radiolabel>
                </RadioButton>
                <RadioButton>
                  <RadioInput type="radio" name="seating" id="outdoor" />
                  <Radiolabel htmlFor="outdoor">
                    Outdoor seating <RadioSpan />
                  </Radiolabel>
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
