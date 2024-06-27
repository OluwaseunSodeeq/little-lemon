import styled from "styled-components";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Button } from "../ui/Button";
import { FlexedDiv } from "../styles/FlexedDiv";

const HeroSectionContentDiv = styled.div`
  padding: 0;
  font-family: var(--karla);
  overflow-y: hidden;

  @media (max-width: 450px) {
    width: 100%;
  }
`;
const HeroSectionContentLeft = styled.div`
  padding: 2rem 0 8rem 0;
  width: 28rem;

  @media (max-width: 450px) {
    width: 90%;
    margin-left: 0px;
    padding-left: 0px;
  }
`;
const HeroSectionContentRight = styled.div`
  padding: 2rem 0 0;
  width: 30rem;
  height: 32rem;
  border-radius: var(--border-radius-lg);

  @media (max-width: 450px) {
    display: none;
  }
`;

const HeroSectionContentBtnContainer = styled.div`
  padding-top: 2rem;
`;
function HeroSectionContent() {
  return (
    <HeroSectionContentDiv>
      <FlexedDiv type="sb">
        <HeroSectionContentLeft>
          <Heading as="h1">Little Lemon</Heading>
          <Heading as="h3">Chicago</Heading>
          <Paragraph>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Paragraph>
          <HeroSectionContentBtnContainer>
            <Button>Reserved Table</Button>
          </HeroSectionContentBtnContainer>
        </HeroSectionContentLeft>
        <HeroSectionContentRight>
          <img src="icons_assets/restauranfood.jpg" alt="restauranfood" />
        </HeroSectionContentRight>
      </FlexedDiv>
    </HeroSectionContentDiv>
  );
}

export default HeroSectionContent;
