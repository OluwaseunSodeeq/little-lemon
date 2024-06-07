import styled from "styled-components";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Paragraph } from "../ui/Paragraph";
import { FlexedDiv } from "../styles/FlexedDiv";

const MenuStyled = styled.div`
  width: 100%;
  padding: 2rem 0 3rem 0;
`;
// const MenuStyledContainer = styled.div``;
const OtherMenuStyledContainer = styled.div`
  padding: 5rem 0;
`;
// const OtherMiniMenuStyledContainer = styled.div`
//   width: 100%;
// `;

const BasicMenuStyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  /* border: 2px solid var(--pureWhite); */
`;

const EachMenuContainer = styled.div`
  width: 30%;
  @media (max-width: 950px) {
    width: 40%;
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
  padding: 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    /* border: 2px solid red; */
  }
`;

const MenuImage = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1998px;
  border: 2px solid var(--pureWhite);

  /* &img {
    width: 100%;
  } */
`;
const OthermenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
const OtherMenuContainer = styled.div`
  width: 100%;
`;
function Menu() {
  const menuArr = [
    {
      generalName: "Paste",
      list: [
        { name: "Special Pasta", price: "10", image: "" },
        { name: "Small Pasta", price: "3", image: "" },
        { name: "Medium Pasta", price: "5", image: "" },
        { name: "Big Pasta", price: "8", image: "" },
      ],
    },
    {
      generalName: "Burger",
      list: [
        { name: "Special Burger", price: "10", image: "" },
        { name: "Small Burger", price: "3", image: "" },
        { name: "Medium Burger", price: "5", image: "" },
        { name: "Big Burger", price: "8", image: "" },
      ],
    },
    {
      generalName: "Pizza",
      list: [
        { name: "Special Pizza", price: "10", image: "" },
        { name: "Small Pizza", price: "3", image: "" },
        { name: "Medium Pizza", price: "5", image: "" },
        { name: "Big Pizza", price: "8", image: "" },
      ],
    },
    {
      generalName: "OTHER FOOD MENU",
      list: [
        { name: "Food Name", price: "5", image: "" },
        { name: "Food Name", price: "7", image: "" },
        { name: "Food Name", price: "2", image: "" },
        { name: "Food Name", price: "10", image: "" },
        { name: "Food Name", price: "12", image: "" },
        { name: "Food Name", price: "2", image: "" },
        { name: "Food Name", price: "2", image: "" },
        { name: "Food Name", price: "7", image: "" },
      ],
    },
  ];

  const resultOfMainMenu = menuArr
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
              const { name, price, image } = food;
              return (
                <EachMenu key={i}>
                  <MenuImage>{image}</MenuImage>
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

  const resultOfOtherMenu = menuArr
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
              const { name, price, image } = food;
              return (
                <EachMenuContainer key={i}>
                  <EachMenu>
                    <MenuImage>{image}</MenuImage>
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
  return (
    <Container as="section" type="menu">
      <Content>
        <MenuStyled>
          <BasicMenuStyledContainer>
            <FlexedDiv type="sb">{resultOfMainMenu}</FlexedDiv>
          </BasicMenuStyledContainer>
          <OtherMenuStyledContainer>
            {resultOfOtherMenu}
          </OtherMenuStyledContainer>
        </MenuStyled>
      </Content>
    </Container>
  );
}

export default Menu;
