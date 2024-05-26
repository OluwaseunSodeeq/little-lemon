// import styled from "styled-components";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import HeroSectionContent from "./HeroSectionContent";

function HeroSection() {
  return (
    <Container as="section">
      <Content>
        <HeroSectionContent />
      </Content>
    </Container>
  );
}

export default HeroSection;
