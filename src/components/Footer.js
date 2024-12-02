import React from "react";
import styled from "styled-components";
import { FlexedDiv } from "../styles/FlexedDiv";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import FooterContent from "./FooterContent";

const footerContent = [
  {
    heading: "Doormat Navigation",
    contentArray: [
      "Home",
      "About",
      "Menu",
      "Reservation",
      "Order Online",
      "Login",
    ],
  },
  { heading: "Contact Us", contentArray: ["Address", "Phone", "Email"] },
  {
    heading: "Social Media",
    contentArray: ["Facebook", "Twitter", "Instagram"],
  },
];

const FooterLeftStyled = styled.div`
  width: 25rem;
  img {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 70%;
  }
`;
const FooterRightStyled = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  /*  */
  @media (max-width: 450px) {
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
    /* flex-wrap: wrap; */
    column-gap: 4rem;
  }
`;
function Footer() {
  return (
    <Container as="footer">
      <Content>
        <div>
          <FlexedDiv type="doubleGap">
            <FooterLeftStyled>
              <img src="icons_assets/Logo.svg" alt="Footer Logo" />
            </FooterLeftStyled>
            <FooterRightStyled>
              {footerContent.map((item, index) => (
                <FooterContent content={item} key={index} />
              ))}
            </FooterRightStyled>
          </FlexedDiv>
        </div>
      </Content>
    </Container>
  );
}

export default Footer;
