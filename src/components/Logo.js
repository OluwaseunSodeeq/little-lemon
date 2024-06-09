import styled from "styled-components";

const LogoContainer = styled.div`
  /* position: relative; */
  display: inline-block;
  /* z-index: 90; */
`;

function Logo() {
  return (
    <LogoContainer>
      <a href="#home">
        <img src="icons_assets/Logo.svg" alt="Logo" />
      </a>
    </LogoContainer>
  );
}

export default Logo;
