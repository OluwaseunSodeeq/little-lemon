import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: inline-block;
`;

function Logo() {
  return (
    <LogoContainer>
      <Link to="/home">
        <img src="icons_assets/Logo.svg" alt="Logo" />
      </Link>
    </LogoContainer>
  );
}

export default Logo;
