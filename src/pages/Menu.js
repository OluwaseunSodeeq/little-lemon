import React from "react";
import styled from "styled-components";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Paragraph } from "../ui/Paragraph";
import { FlexedDiv } from "../styles/FlexedDiv";
import useMenusContext from "../Contexts/Menu/useMenusContext";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
// import { Button } from "../ui/Button";

const MenuStyled = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  /* padding: 2rem 0 2rem 0; */
  /* padding: 2rem 0 2rem 0; */
  /* border: 5px solid blueviolet; */
  /* border: 2px solid blue; */
`;
const OtherMenuStyledContainer = styled.div`
  padding: 5rem 0;
`;

const BasicMenuStyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const EachMenuContainer = styled.div`
  width: 30%;
  @media (max-width: 950px) {
    width: 45%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
const EachMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: var(--border-radius-lg);
  padding: 0 1rem;
  background-color: ${({ selected }) =>
    selected ? "rgba(255, 255, 255, 0.3)" : ""};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const MenuImage = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1998px;
  border: 2px solid var(--pureWhite);

  & > img {
    width: 100%;
    border-radius: 1998px;
  }
`;
const OthermenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 1rem;
`;
const OtherMenuContainer = styled.div`
  width: 100%;
`;
const ButtonContainer = styled.div`
  position: relative;
  text-align: center;
  /* border: 5px solid red; */
`;

function Menu() {
  const { menus, selectedMenuHandler } = useMenusContext();

  const resultOfMainMenu = menus
    .filter((menu) => menu.generalName !== "OTHER FOOD MENU")
    .map((menu, i) => {
      const { list, generalName } = menu;
      return (
        <EachMenuContainer key={i}>
          <Paragraph
            fontFamily=" markazi"
            fontweight="deepBold"
            fontSize="xxxlarge"
          >
            {generalName}
          </Paragraph>
          <BasicMenuStyledContainer>
            {list.map((food, i) => {
              const { name, price, image, id, selected } = food;

              return (
                <EachMenu
                  selected={selected}
                  onClick={() => {
                    selectedMenuHandler(id, generalName);
                  }}
                  key={i}
                >
                  <MenuImage>
                    <img src={image} alt={name} />
                  </MenuImage>
                  <Paragraph fontFamily="karlaText" fontSize="xlarge">
                    {name}
                  </Paragraph>
                  <Paragraph
                    fontFamily="karlaText"
                    fontweight="bold"
                    color="yellow"
                    fontSize="xxlarge"
                  >
                    ${price}
                  </Paragraph>
                </EachMenu>
              );
            })}
          </BasicMenuStyledContainer>
        </EachMenuContainer>
      );
    });

  const resultOfOtherMenu = menus
    .filter((menu) => menu.generalName === "OTHER FOOD MENU")
    .map((menu, i) => {
      const { list, generalName } = menu;
      return (
        <OtherMenuContainer key={i}>
          <Paragraph
            fontFamily=" markazi"
            fontweight="deepBold"
            fontSize="xxxlarge"
          >
            {generalName}
          </Paragraph>
          <OthermenuItem>
            {list.map((food, i) => {
              const { name, price, image, id, selected } = food;
              return (
                <EachMenuContainer key={i}>
                  <EachMenu
                    onClick={() => selectedMenuHandler(id, generalName)}
                    selected={selected}
                  >
                    <MenuImage>
                      <img src={image} alt={name} />
                    </MenuImage>
                    <Paragraph fontFamily="karlaText" fontSize="xlarge">
                      {name}
                    </Paragraph>
                    <Paragraph
                      fontFamily="karlaText"
                      fontweight="bold"
                      color="yellow"
                      fontSize="xxlarge"
                    >
                      ${price}
                    </Paragraph>
                  </EachMenu>
                </EachMenuContainer>
              );
            })}
          </OthermenuItem>
        </OtherMenuContainer>
      );
    });

  const orderArray = menus
    .flatMap((category) => {
      const { generalName, list } = category;
      return list.map((menu) => ({ ...menu, generalName }));
    })
    .filter((item) => item.selected);

  const userHasSelected = orderArray.length > 0;

  console.log(orderArray.length);

  return (
    <div>
      <Container as="section" type="menu">
        <Content>
          <MenuStyled>
            <BasicMenuStyledContainer>
              <FlexedDiv type="flexMenu">{resultOfMainMenu}</FlexedDiv>
            </BasicMenuStyledContainer>
            <OtherMenuStyledContainer>
              {resultOfOtherMenu}
            </OtherMenuStyledContainer>
            <ButtonContainer>
              {userHasSelected && (
                <Link to="/reservations">
                  <Button>Continue</Button>
                </Link>
              )}
              {/* <Button>Continue</Button> */}
            </ButtonContainer>
          </MenuStyled>
        </Content>
      </Container>

      {/*       
      
      <Container as="div" type="helper">
        <Content>
          <ButtonContainer>
            {isAnyItemSelected ? (
              <Paragraph fontSize="xlarge" color="deepGreen">
                Click Back for the submission of your selections
              </Paragraph>
            ) : (
              <Paragraph fontSize="xlarge" color="deepGreen">
                Make some selections above
              </Paragraph>
            )}
            <Button>Back</Button>
          </ButtonContainer>
        </Content>
      </Container> */}
    </div>
  );
}

export default Menu;
