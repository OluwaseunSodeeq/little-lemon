import React from "react";
import styled from "styled-components";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Paragraph } from "../ui/Paragraph";
import CustomButton from "../components/CustomButton";
import { Button } from "../ui/Button";
import useMenusContext from "../Context/useMenusContext";
import BackPageOfMakeReservation from "./BackPageOfMakeReservation";
/*
NOTE:
The native <option> tag inside a <select> element has limited styling capabilities and cannot be styled the same way as other HTML elements due to browser restrictions. For example, you cannot control the width of the individual <option> elements or apply complex layouts like flexbox to them. This is why creating a custom dropdown component is often necessary to achieve advanced styling and layout requirements.
However, if you still prefer to use the native <select> and <option> elements and try to achieve the layout to some extent, you can make use of custom CSS for the <select> and control its appearance, though it won't be as flexible.
Example Using Native <select> and <option>
You can style the <select> element and wrap it in a container with overflow handling, but keep in mind that individual <option> elements cannot be styled beyond some basic properties like font, color, and padding.

Limitation
Even with the custom styling, individual <option> elements within the <select> cannot be styled to have a custom width, complex layouts, or hover effects as you can with a custom dropdown component.

Alternative Solution
If you need full control over the dropdown's appearance and behavior, creating a custom component using <div> and other HTML elements, as demonstrated in the previous examples, is the recommended approach. This gives you the flexibility to style and position each option as needed, without the limitations of the native <select> and <option> elements.
*/
// Container for Reservation Section
const MakeReservationStyled = styled.div`
  padding: 2rem 0 3rem;
  height: auto;
`;

// Form Container
const Form = styled.form`
  position: relative;
  width: 100%;
  height: auto;
`;

// Radio Buttons Container
const RadioButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 0rem;
    margin-bottom: 2rem;
  }
`;

// Individual Radio Button
const RadioButton = styled.div`
  width: 48%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  @media (max-width: 450px) {
    width: 100%;
    padding-left: 0rem;
    gap: 0rem;
    margin-bottom: 1rem;
  }
`;

// Radio Label
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

  @media (max-width: 450px) {
    width: 100%;
    justify-content: start;
  }
`;

// Radio Input
const RadioInput = styled.input`
  background-color: var(--deepGreen);
  border: 1px solid var(--pureWhite);
  display: none;

  &:checked + ${Radiolabel} > span::after {
    opacity: 1;
  }
`;

// Span for Radio Input Customization
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
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--pureWhite);
    opacity: 0;
    transition: opacity 0.2s;

    @media (max-width: 450px) {
      height: 0.8rem;
      width: 0.8rem;
    }
  }

  @media (max-width: 450px) {
    left: 50%;
    height: 1.8rem;
    width: 1.8rem;
  }
`;

// Container for Bottom Section
const BottomContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 5rem;
  padding: 2rem;

  @media (max-width: 450px) {
    padding-left: 4rem;
  }
`;

// Selected Menu Image Styled
const SelectedmenuImageStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  & > span {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 2rem;
    top: 2rem;
    background-color: red;
    color: var(--pureWhite);
    border-radius: 50%;
    font-family: var(--karla);

    @media (max-width: 450px) {
      left: 0.5rem;
    }
  }
`;
const SelectedmenuImageContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 23rem;
  height: 23rem;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 0;
  transition: all 0.2s;

  right: ${({ index }) => index * 7}rem;

  &:hover {
    z-index: 20;
    /* transform: scale(1.05) translateY(-0.5rem); */
  }

  @media (max-width: 450px) {
    width: 16rem;
    height: 23rem;
    left: 20%;
    transform: translate(-50%, -50%);
    margin-right: 0%;
    margin-left: ${({ index }) => index * 3}rem;
  }
`;

const MenusContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 25rem;
  width: 100%;
  margin: 0 auto;
  /* border: 2px solid green; */

  &:hover ${SelectedmenuImageContainer}:not(:hover) {
    z-index: 10;
    /* transform: scale(0.95) translateY(0); */
  }
`;

// Button Container
const ButtonContainer = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 3rem;
`;

// Main Component
function MakeReservation() {
  const { menus, selectedMenuHandler } = useMenusContext();
  const notinIsSelected = 0;
  const makeAnOrderMsg = (
    <Paragraph
      color="deepGreen"
      fontFamily="markazi"
      fontweight="deepBold"
      fontSize="xxxlarge"
    >
      Kindly make an Order!
    </Paragraph>
  );
  // Generate selected menu items
  const orderArray = menus
    .flatMap((category) => {
      const { generalName, list } = category;
      return list.map((menu) => ({ ...menu, generalName: generalName }));
    })
    .filter((item) => item.selected)
    .map((menu, i) => {
      const { id, generalName, image, name } = menu;
      return (
        <SelectedmenuImageContainer index={i} key={id}>
          <SelectedmenuImageStyled>
            <img src={image} alt={name} />
            <span onClick={() => selectedMenuHandler(id, generalName)}>X</span>
          </SelectedmenuImageStyled>
        </SelectedmenuImageContainer>
      );
    });
  console.log(orderArray.length);
  return (
    <Container as="section" type="makeReservation">
      <Form>
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
        <BackPageOfMakeReservation />
      </Form>
      <Container as="div" type="makeReservationBottom">
        <Content>
          <BottomContainerStyled>
            {orderArray.length > notinIsSelected && (
              <Paragraph
                color="deepGreen"
                fontFamily="markazi"
                fontweight="deepBold"
                fontSize="xxxlarge"
              >
                {orderArray.length} items{" "}
                {orderArray.length === 1 ? "is" : "are"} selected!
              </Paragraph>
            )}
            <MenusContainer>
              {orderArray.length === 0 ? makeAnOrderMsg : orderArray}
            </MenusContainer>
            <ButtonContainer>
              <Button>Confirm Reservation</Button>
            </ButtonContainer>
          </BottomContainerStyled>
        </Content>
      </Container>
    </Container>
  );
}

export default MakeReservation;
