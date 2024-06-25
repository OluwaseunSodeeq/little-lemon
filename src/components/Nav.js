import styled from "styled-components";
import { NavLi } from "../ui/NavLi";
import { NavLink } from "react-router-dom";

const NavStyled = styled.nav`
  display: block;
  transition: all 2s;

  &:global(.active) {
    &::before {
      content: "";
      position: absolute;
      bottom: -0.3rem;
      color: var(--yellow);
      left: 0;
      width: 1px;
      height: 1px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 1s, width 0.2s cubic-bezier(1, 0, 0, 1) 0.2s;
    }
  }

  @media (max-width: 950px) {
    padding: 3rem 0;
    width: 90%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 90;
    display: ${({ hamburger }) => (hamburger ? "block" : "none")};

    // Transition properties
    transition: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    top: ${({ hamburger }) => (hamburger ? "25rem" : "0")};
  }
`;
const LiContainer = styled.ul`
  display: flex;
  gap: 1rem;

  @media (max-width: 950px) {
    /* display: ${({ hamburger }) => (hamburger ? "flex" : "none")}; */
    flex-direction: column;
    gap: 2.5rem;
  }
`;
function Nav({ hamburger }) {
  return (
    <NavStyled hamburger={hamburger}>
      <LiContainer>
        <NavLi>
          <NavLink to="/">Home</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/about">About</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/menu">Menu</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/reservations">Reservations</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/orderonline">Order Online</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/login">Login</NavLink>
        </NavLi>
      </LiContainer>
    </NavStyled>
  );
}

export default Nav;
