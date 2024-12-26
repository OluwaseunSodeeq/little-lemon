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
