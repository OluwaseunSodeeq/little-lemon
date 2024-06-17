import React from "react";
import styled from "styled-components";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Paragraph } from "../ui/Paragraph";
import CustomButton from "../components/CustomButton";
import { Button } from "../ui/Button";
import useMenusContext from "../Context/useMenusContext";

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
// // Selected Menu Image Container
// const SelectedmenuImageContainer = styled.div`
//   position: absolute;
//   z-index: 10;
//   width: 23rem;
//   height: 23rem;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   padding: 1rem 0;
//   transition: all 0.2s;

//   right: ${({ index }) => index * 7}rem; /* Adjust position dynamically */

//   &:hover {
//     z-index: 20;
//     transform: (1.05) translateY(-0.5rem);
//   }

//   @media (max-width: 450px) {
//     width: 16rem;
//     height: 23rem;
//     right: 0rem;
//     left: ${({ index }) => index * 3}rem;
//   }
// `;

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
// // Container for Menu Items
// const MenusContainer = styled.div`
//   position: relative;
//   display: inline-block;
//   height: 25rem;
//   width: 100%;

//   margin: 0 auto;
//   border: 2px solid green;

//   &:hover ${SelectedmenuImageContainer}:not(:hover) {
//     /* transform: scale(0.95); */
//     z-index: 10;
//   }
//   @media (max-width: 450px) {
//     width: 100%;
//     left: 0%;
//     border: 2px solid blue;
//   }
// `;

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

// import styled from "styled-components";
// import { Container } from "../ui/Container";
// import { Content } from "../ui/Content";
// import { Paragraph } from "../ui/Paragraph";
// import CustomButton from "../components/CustomButton";
// import { Button } from "../ui/Button";
// import useMenusContext from "../Context/useMenusContext";
// // import { useState } from "react";

// // Make Reservations
// const MakeReservationStyled = styled.div`
//   padding: 2rem 0 3rem;
//   height: auto;
// `;

// // FORM STYLING

// const Form = styled.form`
//   position: relative;
//   width: 100%;
//   height: auto;
// `;

// // RADIO STYLING
// const RadioButtonsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   gap: 5rem;
//   justify-content: center;

//   @media (max-width: 450px) {
//     flex-direction: column;
//     gap: 0rem;
//     margin-bottom: 2rem;
//   }
// `;

// const RadioButton = styled.div`
//   width: 48%;
//   margin-top: 2rem;
//   margin-bottom: 2rem;
//   padding-left: 1rem;

//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 2rem;

//   @media (max-width: 450px) {
//     width: 100%;
//     padding-left: 0rem;
//     gap: 0rem;
//     margin-bottom: 1rem;
//   }
// `;

// const Radiolabel = styled.label`
//   width: 55%;
//   position: relative;
//   cursor: pointer;
//   font-size: 1.8rem;
//   color: var(--pureWhite);
//   font-family: var(--karla);
//   font-weight: var(--bold);

//   display: flex;
//   align-items: center;
//   @media (max-width: 450px) {
//     width: 100%;
//     justify-content: start;
//     /* column-gap: 2rem; */
//   }
// `;

// const RadioInput = styled.input`
//   background-color: var(--deepGreen);
//   border: 1px solid var(--pureWhite);
//   display: none;

//   &:checked + ${Radiolabel} > span::after {
//     opacity: 1;
//   }
// `;

// const RadioSpan = styled.span`
//   position: absolute;
//   background-color: var(--deepGreen);
//   border: 2px solid var(--pureWhite);
//   height: 2.2rem;
//   width: 2.2rem;
//   border-radius: 50%;
//   display: inline-block;
//   right: 0;
//   top: 0.25rem;

//   &::after {
//     content: "";
//     display: block;
//     height: 0%.8rem;
//     width: 1.1rem;
//     border-radius: 50%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background-color: var(--pureWhite);
//     opacity: 0;
//     transition: opacity 0.2s;

//     @media (max-width: 450px) {
//       height: 0.8rem;
//       width: 0.8rem;
//     }
//   }
//   @media (max-width: 450px) {
//     left: 50%;
//     height: 1.8rem;
//     width: 1.8rem;
//   }
// `;
// // BOTTOM CONTAINER STYLE

// const BottomContainerStyled = styled.div`
//   position: relative;
//   width: 100%;
//   height: auto;
//   margin: 0 auto;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   column-gap: 5rem;
// `;

// // const SelectedmenuImageStyled = styled.div`
// //   width: 23rem;
// //   height: 23rem;
// //   position: relative;
// //   z-index: 10;
// //   transition: all 0.2s;

// //   & > img {
// //     width: 100%;
// //     height: 100%;
// //   }
// //   & > span {
// //     width: 2rem;
// //     height: 2rem;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     position: absolute;
// //     right: 2rem;
// //     top: 2rem;
// //     background-color: red;
// //     color: var(--pureWhite);
// //     border-radius: 1998px;
// //     font-family: var(--karla);
// //     cursor: pointer;
// //   }
// //   &:hover {
// //     border: 2px solid var(--deepGreen);
// //     z-index: 50;
// //     transform: scale(1.2);
// //   }
// // `;

// // const SelectedmenuImageContainer = styled.div`
// //   position: absolute;
// //   top: 50%;
// //   transform: translate(-50%, -50%);
// //   right: ${({ index }) => index * 5}rem;
// //   transition: transform 0.2s;
// //   margin-top: 1rem;
// //   padding: 1rem 0;
// // `;
// // const MenusContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   position: relative;
// //   justify-content: center;
// //   width: 80%;
// //   margin: 0 auto;
// //   height: 25rem;

// //   &:hover ${SelectedmenuImageContainer}:not(:hover) ${SelectedmenuImageStyled} {
// //     transform: scale(0.95);
// //     z-index: 1;
// //   }
// // `;

// const SelectedmenuImageStyled = styled.div`
//   width: 23rem;
//   height: 23rem;
//   position: relative;
//   z-index: 10;
//   transition: all 0.2s;

//   & > img {
//     width: 100%;
//     height: 100%;
//   }

//   & > span {
//     width: 2rem;
//     height: 2rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     right: 2rem;
//     top: 2rem;
//     background-color: red;
//     color: var(--pureWhite);
//     border-radius: 50%;
//     font-family: var(--karla);
//     cursor: pointer;
//   }

//   &:hover {
//     border: 2px solid var(--deepGreen);
//     z-index: 50;
//     transform: scale(1.2);
//   }
// `;

// const SelectedmenuImageContainer = styled.div`
//   position: absolute;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   right: ${({ index }) => index * 5}rem;
//   transition: transform 0.2s;
//   margin-top: 1rem;
//   padding: 1rem 0;
// `;

// const MenusContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 80%;
//   margin: 0 auto;
//   height: 25rem;

//   &:hover ${SelectedmenuImageContainer}:not(:hover) ${SelectedmenuImageStyled} {
//     transform: scale(0.95);
//     z-index: 1; /* Ensure lower z-index for non-hovered items */
//   }
// `;

// const ButtonContainer = styled.div`
//   display: inline-block;
//   text-align: center;
//   margin-top: 3rem;
// `;

// function MakeReservation() {
//   const { menus, selectedMenuHandler } = useMenusContext();
//   // const [selectedmenus] = useState([]);

//   console.log(menus);

//   const orderArray = menus
//     .flatMap((category) => {
//       const { generalName, list } = category;
//       return list.map((menu) => ({ ...menu, generalName: generalName }));
//     })
//     .filter((item) => item.selected)
//     .map((menu, i) => {
//       const { id, generalName, image, name } = menu;
//       return (
//         <SelectedmenuImageContainer index={i + 1} key={i}>
//           <SelectedmenuImageStyled>
//             <img src={image} alt={name} />
//             <span onClick={() => selectedMenuHandler(id, generalName)}>X</span>
//           </SelectedmenuImageStyled>
//         </SelectedmenuImageContainer>
//       );
//     });

//   return (
//     <Container as="section" type="makeReservation">
//       <Container as="div" type="makeReservationTop">
//         <Content>
//           <MakeReservationStyled>
//             <Paragraph
//               fontSize="extraLarge"
//               color="yellow"
//               fontWeight="bold"
//               fontFamily="karla"
//             >
//               Reservations
//             </Paragraph>
//             <Form action="">
//               <RadioButtonsContainer>
//                 <RadioButton>
//                   <RadioInput type="radio" name="seating" id="indoor" />
//                   <Radiolabel htmlFor="indoor">
//                     Indoor seating <RadioSpan />
//                   </Radiolabel>
//                 </RadioButton>
//                 <RadioButton>
//                   <RadioInput type="radio" name="seating" id="outdoor" />
//                   <Radiolabel htmlFor="outdoor">
//                     Outdoor seating <RadioSpan />
//                   </Radiolabel>
//                 </RadioButton>
//               </RadioButtonsContainer>
//               <CustomButton />
//             </Form>
//           </MakeReservationStyled>
//         </Content>
//       </Container>
//       <Container as="div" type="makeReservationBottom">
//         <Content>
//           <BottomContainerStyled>
//             <Paragraph
//               color="deepGreen"
//               fontFamily=" markazi"
//               fontweight="deepBold"
//               fontSize="xxxlarge"
//             >
//               {orderArray.length} items are selected!
//             </Paragraph>
//             <MenusContainer>
//               {orderArray.length === 0 ? (
//                 <span>Kindly make an order</span>
//               ) : (
//                 orderArray
//               )}
//             </MenusContainer>
//             <ButtonContainer>
//               <Button>Confirm Reservation</Button>
//             </ButtonContainer>
//           </BottomContainerStyled>
//         </Content>
//       </Container>
//     </Container>
//   );
// }

// export default MakeReservation;
