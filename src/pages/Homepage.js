import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import WeekSpecial from "../components/WeekSpecial";
import Main from "../components/Main";

const HomeContainer = styled.section`
  position: relative;
  padding: 0;
`;
function Homepage() {
  return (
    <Main>
      <HomeContainer>
        <HeroSection />
        <WeekSpecial />
      </HomeContainer>
    </Main>
  );
}

export default Homepage;
