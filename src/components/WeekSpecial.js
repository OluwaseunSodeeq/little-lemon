import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { FlexedDiv } from "../styles/FlexedDiv";
import { Paragraph } from "../ui/Paragraph";
import { Button } from "../ui/Button";
import { GridColumns } from "../styles/Grid";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { menuArr } from "../Contexts/Menu/defaultMenusArray";

// const cardArray = [
//   {
//     image: "icons_assets/greek salad.jpg",
//     price: "12.99",
//     name: "Greek Salad",
//     description:
//       "The famous Greek salad of srispy lettuce, peppers,olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons.",
//   },
//   {
//     image: "icons_assets/bruchetta.svg",
//     price: "5.99",
//     name: "Bruchetta",
//     description:
//       "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
//   },
//   {
//     image: "icons_assets/lemon dessert.jpg",
//     price: "8.00",
//     name: "Lemon Dessert",
//     description:
//       "This comes straight from gradma's recipe book, evry last ingrdient has been sourced and is as authentic as can be imagined.",
//   },
// ];

const WeekSpacialStyled = styled.div`
  margin-top: 2rem;
`;
function WeekSpecial() {
  // const homePage = "/home";
  const [thisWeekSpecial, setThisWeekSpecial] = useState([]);
  const currentLocation = useLocation();

  // I randomly generate up to three items from the menuArray
  function getRandomElements(array, count) {
    const limitedCount = Math.min(count, array.length);
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limitedCount);
  }

  useEffect(() => {
    setThisWeekSpecial(getRandomElements(menuArr, 3));
  }, [currentLocation]);

  return (
    <Container as="section" type="week">
      <Content>
        <FlexedDiv type="sbt">
          <Paragraph fontSize="extraLarge" color="black" fontWeight="bold">
            This week specials!
          </Paragraph>
          <Button>
            <Link to="/orderonline">Online Menu</Link>
          </Button>
        </FlexedDiv>
        <WeekSpacialStyled>
          <GridColumns>
            {thisWeekSpecial.map((card, index) => (
              <MenuCard card={card} key={index} />
            ))}
          </GridColumns>
        </WeekSpacialStyled>
      </Content>
    </Container>
  );
}

export default WeekSpecial;
