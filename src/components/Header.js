import React from "react";
import styled from "styled-components";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import Logo from "./Logo";
import Nav from "./Nav";
import useCombinedContexts from "../Contexts/CombinedContexts/useCombinedContexts";

const HeaderContent = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--backdrop-color);
  margin-top: 2rem;

  @media (max-width: 450px) {
    margin-top: 0;
  }
`;

const HeaderIcon = styled.span`
  font-size: 1.8rem;
  cursor: pointer;
`;
const Hamburger = styled.div`
  position: relative;
  z-index: 90;
  color: var(--deepGreen);
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
`;

// function Header({ setHamburger, hamburger }) {
function Header() {
  const { open, closeHamburger, toggleHamburger } = useCombinedContexts();
  // const { open, toggleHamburger } = useToggleContext();
  return (
    <Container as="header">
      <Content>
        <HeaderContent>
          <div onClick={closeHamburger}>
            <Logo />
          </div>
          <Hamburger onClick={toggleHamburger}>
            {open ? (
              <HeaderIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 12 12"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </HeaderIcon>
            ) : (
              <HeaderIcon>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 35 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.34615 0C0.6027 0 0 0.621833 0 1.38889C0 2.15594 0.6027 2.77778 1.34615 2.77778H33.6538C34.3972 2.77778 35 2.15594 35 1.38889C35 0.621833 34.3972 0 33.6538 0H1.34615ZM0 12.5C0 11.7329 0.6027 11.1111 1.34615 11.1111H33.6538C34.3972 11.1111 35 11.7329 35 12.5C35 13.2671 34.3972 13.8889 33.6538 13.8889H1.34615C0.6027 13.8889 0 13.2671 0 12.5ZM0 23.6111C0 22.8442 0.6027 22.2222 1.34615 22.2222H33.6538C34.3972 22.2222 35 22.8442 35 23.6111C35 24.3781 34.3972 25 33.6538 25H1.34615C0.6027 25 0 24.3781 0 23.6111Z"
                    fill="currentColor"
                  />
                </svg>
              </HeaderIcon>
            )}
          </Hamburger>
          <Nav openHamburger={open} onToggleHamburger={toggleHamburger} />
        </HeaderContent>
      </Content>
    </Container>
  );
}

export default Header;
