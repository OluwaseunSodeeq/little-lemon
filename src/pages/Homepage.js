import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import WeekSpecial from "../components/WeekSpecial";

const HomeContainer = styled.section`
  position: relative;
  padding: 0;
`;
function Homepage() {
  return (
    <HomeContainer>
      <HeroSection />
      <WeekSpecial />
    </HomeContainer>
  );
}

export default Homepage;
