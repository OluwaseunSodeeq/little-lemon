import styled from "styled-components";
import { NavLi } from "../ui/NavLi";

const LiContainer = styled.ul`
  display: flex;
  gap: 20px;
`;
function Nav() {
  return (
    <nav>
      <LiContainer>
        <NavLi>
          <a href="#home">Home</a>
        </NavLi>
        <NavLi>
          <a href="#about">About</a>
        </NavLi>
        <NavLi>
          <a href="#menu">Menu</a>
        </NavLi>
        <NavLi>
          <a href="#reservations">Reservations</a>
        </NavLi>
        <NavLi>
          <a href="#order">Order</a>
        </NavLi>
        <NavLi>
          <a href="#online">Online</a>
        </NavLi>
        <NavLi>
          <a href="#login">Login</a>
        </NavLi>
      </LiContainer>
    </nav>
  );
}

export default Nav;
