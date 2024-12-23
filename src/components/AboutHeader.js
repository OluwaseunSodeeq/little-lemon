import React from "react";
import styled from "styled-components";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

const AboutHeaderBg = styled.div`
  position: relative;
  height: 25rem;
  background-image: url("icons_assets/restaurant.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    display: none;
  }
`;
const BtnContain = styled.div`
  background-color: var(--pureWhite);
  padding: 0;
  display: inline-block;
  margin-left: 5%;
  border-radius: var(--border-radius-md);

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;
const AboutHeaderButton = styled.div`
  background-color: var(--pureWhite);

  color: var(--pureWhite);
  font-weight: bold;
  text-transform: uppercase;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: url("icons_assets/restaurant.jpg");
  background-size: cover;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--deepGreen);

  font-size: 3.4rem;
  padding: 0.5rem;
`;
const ButtonContainer = styled.div`
  margin-right: 5%;
`;
function AboutHeader() {
  return (
    <AboutHeaderBg>
      <BtnContain>
        <AboutHeaderButton>ABOUT US</AboutHeaderButton>
      </BtnContain>

      <ButtonContainer>
        <Button>
          <Link to="/orderonline"> ORDER ONLINE</Link>
        </Button>
      </ButtonContainer>
    </AboutHeaderBg>
  );
}

export default AboutHeader;
