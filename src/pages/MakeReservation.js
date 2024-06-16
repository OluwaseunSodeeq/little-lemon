import styled from "styled-components";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Paragraph } from "../ui/Paragraph";
import CustomButton from "../components/CustomButton";
import { Button } from "../ui/Button";
import useMenusContext from "../Context/useMenusContext";
import { useState } from "react";

// Make Reservations
const MakeReservationStyled = styled.div`
  padding: 2rem 0 3rem;
  height: auto;
`;

// FORM STYLING

const Form = styled.form`
  position: relative;
  width: 100%;
  height: auto;
`;

// RADIO STYLING
const RadioButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
  justify-content: center;

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 0rem;
    margin-bottom: 2rem;
  }
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

  @media (max-width: 450px) {
    width: 100%;
    padding-left: 0rem;
    gap: 0rem;
    margin-bottom: 1rem;
  }
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
  @media (max-width: 450px) {
    width: 100%;
    justify-content: start;
    /* column-gap: 2rem; */
  }
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
    height: 0%.8rem;
    width: 1.1rem;
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
// BOTTOM CONTAINER STYLE

const BottomContainerStyled = styled.div`
  /* width: 60%; */
  margin: 0 auto;
  /* border: 2px solid red; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 5rem;
`;
const MenusContainer = styled.div`
  /* border: 2px solid blue; */
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 3rem;
`;
function MakeReservation() {
  // const { menus, SelectedMenuHandler } = useMenusContext();
  const { menus } = useMenusContext();
  const [selectedmenus, setSelectedmenus] = useState([]);

  console.log(menus);
  const orderArray = menus.map((category) => {
    const { generalName, list } = category;
    const selectedlist = list
      .filter((menu) => menu.selected === true)
      .map((menu) => menu.list);
    // .map((menu) => {
    //   return {menu.list, menu.generalName;}
    // });
    // .map((menu) => {
    //   menu.generalName, menu.list;
    // });
    console.log(selectedlist);
    // return setSelectedmenus((previuosArr) => [
    //   ...previuosArr,
    //   { generalName, menu },
    // ]);
  });
  console.log(orderArray);
  return (
    <Container as="section" type="makeReservation">
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
      <Container as="div" type="makeReservationBottom">
        <Content>
          <BottomContainerStyled>
            <MenusContainer>
              {selectedmenus.length === 0 ? (
                <span>Kindly make an order</span>
              ) : (
                orderArray
              )}
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
