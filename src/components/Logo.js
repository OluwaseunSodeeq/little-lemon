import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useCombinedContexts from "../Contexts/CombinedContexts/useCombinedContexts";

const LogoContainer = styled.div`
  display: inline-block;
`;

function Logo() {
  const { toggleHamburger } = useCombinedContexts();

  return (
    <LogoContainer>
      <div onClick={toggleHamburger}>
        <Link to="/home">
          <img src="icons_assets/Logo.svg" alt="Logo" />
        </Link>
      </div>
    </LogoContainer>
  );
}

export default Logo;
