import styled from "styled-components";
import { NavLi } from "../ui/NavLi";
import { NavLink } from "react-router-dom";

const NavStyled = styled.nav`
  display: block;

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
    display: none;
  }
`;
const LiContainer = styled.ul`
  display: flex;
  gap: 10px;
`;
function Nav() {
  return (
    <NavStyled>
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
          <NavLink to="orderonlne">Order Online</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="login">Login</NavLink>
        </NavLi>
      </LiContainer>
    </NavStyled>
  );
}

export default Nav;
