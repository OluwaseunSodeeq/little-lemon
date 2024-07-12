import styled from "styled-components";
import { Paragraph } from "../ui/Paragraph";
import { Heading } from "../ui/Heading";

const AboutFooterContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  height: auto;
  padding: 7rem 0 0;

  @media (max-width: 450px) {
    /* flex-direction: column;
    justify-content: center; */
  }
`;
const AboutFooterTop = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 450px) {
    display: block;
  }
`;
const AboutFooterBottom = styled.div`
  margin-left: 3%;
  @media (max-width: 450px) {
    margin-left: 0;
  }
`;

const TopTextDiv = styled.div`
  width: 70%;
  margin-top: 2rem;

  @media (max-width: 950px) {
    margin-top: 0;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
const TopImageDiv = styled.div`
  width: 15rem;
  height: 15rem;

  /* border-radius: 50%; */

  & > img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
  @media (max-width: 950px) {
    width: 10rem;
    height: 10rem;
  }
  @media (max-width: 450px) {
    width: 9rem;
    height: 9rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    float: left;
  }
`;

function AboutFooter() {
  return (
    <AboutFooterContainer>
      <AboutFooterTop>
        <TopImageDiv>
          <img src="icons_assets/Mario&Adrian.png" alt="CEOS" />
        </TopImageDiv>
        <TopTextDiv>
          <Paragraph color="deepGreen">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            esse nihil mollitia, excepturi, qui sed fuga in minus quis
            obcaecati, illo est laborum iusto et.excepturi, qui sed fuga in
            minus quis obcaecati, illo est laborum iusto et.
          </Paragraph>
        </TopTextDiv>
      </AboutFooterTop>
      <AboutFooterBottom>
        <Paragraph color="yellow" fontSize="nameSize">
          Oluwaseun Sodeeq
        </Paragraph>
        <Heading as="h5">SIGNED!</Heading>
      </AboutFooterBottom>
    </AboutFooterContainer>
  );
}

export default AboutFooter;
