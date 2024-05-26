import styled from "styled-components";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Button } from "../ui/Button";

const HeroSectionContentDiv = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  font-family: var(--karla);
  /* align-items: center; */
`;
const HeroSectionContentLeft = styled.div`
  padding: 2rem 0 8rem 0;
  width: 28rem;
`;
const HeroSectionContentRight = styled.div`
  padding: 2rem 0 0;
  width: 30rem;
  height: 32rem;
  border-radius: var(--border-radius-lg);
`;

const HeroSectionContentBtnContainer = styled.div`
  padding-top: 1rem;
`;
function HeroSectionContent() {
  return (
    <HeroSectionContentDiv>
      <HeroSectionContentLeft>
        <Heading as="h1">Little Lemon</Heading>
        <Heading as="h3">Chicago</Heading>
        <Paragraph>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
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
