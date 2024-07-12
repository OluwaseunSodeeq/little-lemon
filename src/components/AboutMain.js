import styled from "styled-components";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";

const AboutmainContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10rem;

  display: flex;
  justify-content: space-between;
  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 5rem;
  }
`;
const AboutmainContent = styled.div`
  width: 50%;
  padding: 0 5%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 950px) {
    padding: 0;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
const AboutmainImageDiv = styled.div`
  width: 45%;
  height: 30rem;

  & > img {
    width: 100%;
  }
  @media (max-width: 950px) {
    height: 23rem;
  }
  @media (max-width: 450px) {
    width: 100%;
    margin-top: 5rem;
  }
`;
const Est = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Dash = styled.div`
  width: 2.5rem;
  height: 0.2rem;
  background-color: var(--yellow);
`;

function AboutMain() {
  return (
    <AboutmainContainer>
      <AboutmainContent>
        <Heading as="h6">Fill the Belly First</Heading>
        <Est>
          <Dash /> <Heading as="h5">EST.1998</Heading>
          <Dash />
        </Est>
        <Heading as="h1">Best Meal in Town</Heading>
        <Paragraph color="deepGreen">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, quos
          porro? Voluptate et facilis eos explicabo illum omnis numquam quaerat
          facere exercitationem blanditiis? Officiis aut unde voluptatem
        </Paragraph>
      </AboutmainContent>
      <AboutmainImageDiv>
        <img src="icons_assets/restaurantchef.jpg" alt="Chef" />
      </AboutmainImageDiv>
    </AboutmainContainer>
  );
}

export default AboutMain;
