import styled from "styled-components";

import AboutFooter from "../components/AboutFooter";
import AboutHeader from "../components/AboutHeader";
import AboutMain from "../components/AboutMain";
// import BookedSummary from "../components/BookedSummary";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";

const AboutContainer = styled.section`
  position: relative;
  padding: 0;
  padding-bottom: 10rem;
`;
function About() {
  return (
    <Container as="section" type="about">
      <Content>
        <AboutContainer>
          <AboutHeader />
          <AboutMain />
          {/* <BookedSummary /> */}
          <AboutFooter />
        </AboutContainer>
      </Content>
    </Container>
  );
}

export default About;
