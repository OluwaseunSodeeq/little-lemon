import React from "react";
import styled from "styled-components";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Button } from "../ui/Button";

const HeroSectionContentDiv = styled.div`
  width: 100%;
  position: relative;
  top: 2rem;
  padding: 0px;
  font-family: var(--karla);

  @media (max-width: 450px) {
    /* width: 100%; */
  }
`;
const HeroSectionContentLeft = styled.div`
  position: relative;
  left: 0;
  padding: 2rem 0 2rem 0;
  width: 40rem;

  @media (max-width: 950px) {
    width: 30rem;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 90%;
    padding: 3rem 0 3rem 0;
  }
`;
const HeroSectionContentRight = styled.div`
  position: absolute;
  /* right: 1.5rem; */
  right: 0%;
  top: 5rem;
  /* z-index: 10; */
  /* padding: 2rem 0 0; */
  width: 32rem;
  height: 35rem;
  /* border: 2px solid red; */
  border-radius: var(--border-radius-lg);
  @media (max-width: 950px) {
    top: 7rem;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;

const HeroSectionContentBtnContainer = styled.div`
  padding-top: 2rem;
`;
function HeroSectionContent() {
  return (
    <HeroSectionContentDiv>
      <HeroSectionContentLeft>
        <Heading as="h1">Little Lemon</Heading>
        <Heading as="h3">Chicago</Heading>
        <Paragraph fontSize="xlarge">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist. Come experience the warmth of our
          hospitality and the vibrant flavors of the Mediterranean, crafted with
          love and served with a modern twist.
        </Paragraph>
        <HeroSectionContentBtnContainer>
          <Button>Reserved Table</Button>
        </HeroSectionContentBtnContainer>
      </HeroSectionContentLeft>
      <HeroSectionContentRight>
        <img src="icons_assets/restauranfood.jpg" alt="restauranfood" />
      </HeroSectionContentRight>
    </HeroSectionContentDiv>
  );
}

export default HeroSectionContent;
