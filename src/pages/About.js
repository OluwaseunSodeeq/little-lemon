import AboutFooter from "../components/AboutFooter";
import AboutHeader from "../components/AboutHeader";
// import AboutMain from "../components/AboutMain";
import BookedSummary from "../components/BookedSummary";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";

function About() {
  return (
    <Container as="section" type="about">
      <Content>
        <AboutHeader />
        {/* <AboutMain /> */}
        <BookedSummary />
        <AboutFooter />
      </Content>
    </Container>
  );
}

export default About;
