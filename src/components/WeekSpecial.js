import MenuCard from "./MenuCard";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { FlexedDiv } from "../styles/FlexedDiv";
import { Paragraph } from "../ui/Paragraph";
import { Button } from "../ui/Button";
import { GridColumns } from "../styles/Grid";
import styled from "styled-components";

const cardArray = [
  {
    image: "icons_assets/greek salad.jpg",
    price: "12.99",
    name: "Greek Salad",
    description:
      "The famous Greek salad of srispy lettuce, peppers,olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: "icons_assets/bruchetta.svg",
    price: "5.99",
    name: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
  },
  {
    image: "icons_assets/lemon dessert.jpg",
    price: "8.00",
    name: "Lemon Dessert",
    description:
      "This comes straight from gradma's recipe book, evry last ingrdient has been sourced and is as authentic as can be imagined.",
  },
];

const WeekSpacialStyled = styled.div`
  margin-top: 2rem;
`;
function WeekSpecial() {
  return (
    <Container as="aside">
      <Content>
        <>
          <FlexedDiv type="sbt">
            <Paragraph fontSize="extraLarge" color="black" fontWeight="bold">
              This week specials!
            </Paragraph>
            <Button>Online Menu</Button>
          </FlexedDiv>
          <WeekSpacialStyled>
            <GridColumns>
              {cardArray.map((card, index) => (
                <MenuCard card={card} key={index} />
              ))}
            </GridColumns>
          </WeekSpacialStyled>
        </>
      </Content>
    </Container>
  );
}

export default WeekSpecial;
