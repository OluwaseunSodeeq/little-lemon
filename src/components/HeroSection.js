import React from "react";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import HeroSectionContent from "./HeroSectionContent";

function HeroSection() {
  return (
    <Container as="section" type="homepage">
      <Content>
        <HeroSectionContent />
      </Content>
    </Container>
  );
}

export default HeroSection;
