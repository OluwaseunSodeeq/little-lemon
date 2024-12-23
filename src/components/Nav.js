import React from "react";
import styled from "styled-components";
import useCombinedContexts from "../Contexts/CombinedContexts/useCombinedContexts";
import { NavLink } from "react-router-dom";

const NavStyled = styled.nav`
  color: var(--deepGreen);
  display: block;
  transition: all 2s;

  @media (max-width: 950px) {
    padding: 3rem 0;
    width: 99%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 90;
    background-color: var(--white);
    transition: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    display: ${({ $hamburger }) => ($hamburger ? "block" : "none")};
    top: ${({ $hamburger }) => ($hamburger ? "25rem" : "0")};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  padding: 0.5rem;

  &.active {
    /* color: var(--yellow); */
    color: var(--pureWhite);
    background-color: var(--deepGreen);
    border-radius: 5px;
    font-weight: 500;
  }
`;

const LiContainer = styled.ul`
  display: flex;
  gap: 1rem;
  & > li {
    cursor: pointer;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;
function Nav({ openHamburger, onToggleHamburger }) {
  const { logoutHandler } = useCombinedContexts();

  const mainLogoutHandler = () => {
    logoutHandler();
    onToggleHamburger();
  };

  return (
    <NavStyled $hamburger={openHamburger}>
      <LiContainer>
        <li onClick={onToggleHamburger}>
          <StyledNavLink to="/home">Home</StyledNavLink>
        </li>
        <li onClick={onToggleHamburger}>
          <StyledNavLink to="/about">About</StyledNavLink>
        </li>
        <li onClick={onToggleHamburger}>
          <StyledNavLink to="/reservations">Reservations</StyledNavLink>
        </li>
        <li onClick={onToggleHamburger}>
          <StyledNavLink to="/orderonline">Order Online</StyledNavLink>
        </li>
        <li onClick={mainLogoutHandler}>
          <StyledNavLink to="/login">Logout</StyledNavLink>
        </li>
      </LiContainer>
    </NavStyled>
  );
}
export default Nav;
