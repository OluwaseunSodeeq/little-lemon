import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import useAuthContext from "../Contexts/Authenticate/useAuthContext";

const NavStyled = styled.nav`
  display: block;
  transition: all 2s;

  .active::before {
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

  @media (max-width: 950px) {
    padding: 3rem 0;
    width: 90%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 90;
    display: ${({ hamburger }) => (hamburger ? "block" : "none")};
    transition: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    top: ${({ hamburger }) => (hamburger ? "25rem" : "0")};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &.active {
    color: var(--yellow);
  }
`;

const LiContainer = styled.ul`
  display: flex;
  gap: 1rem;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

function Nav({ openHamburger, onToggleHamburger }) {
  const { logoutHandler } = useAuthContext();

  const mainLogoutHandler = () => {
    logoutHandler();
    onToggleHamburger();
  };

  return (
    <NavStyled hamburger={openHamburger}>
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
          <StyledNavLink to="/">Logout</StyledNavLink>
        </li>
      </LiContainer>
    </NavStyled>
  );
}

export default Nav;

// import React from "react";
// import styled from "styled-components";
// import { NavLi } from "../ui/NavLi";
// import { NavLink } from "react-router-dom";
// import useAuthContext from "../Contexts/Authenticate/useAuthContext";

// const NavStyled = styled.nav`
//   display: block;
//   transition: all 2s;

//   &:global(.active) {
//     &::before {
//       content: "";
//       position: absolute;
//       bottom: -0.3rem;
//       color: var(--yellow);
//       left: 0;
//       width: 1px;
//       height: 1px;
//       transform: scaleX(0);
//       transform-origin: left;
//       transition: transform 1s, width 0.2s cubic-bezier(1, 0, 0, 1) 0.2s;
//     }
//   }

//   @media (max-width: 950px) {
//     padding: 3rem 0;
//     width: 90%;
//     position: absolute;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     text-align: center;
//     z-index: 90;
//     display: ${({ hamburger }) => (hamburger ? "block" : "none")};

//     // Transition properties
//     transition: top 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

//     top: ${({ hamburger }) => (hamburger ? "25rem" : "0")};
//   }
// `;
// // const NavMenuStyled = styled(NavLink)`
// //   &:hover,
// //   :active,
// //   :visited {
// //     color: var(--yellow);
// //   }
// // `;

// const LiContainer = styled.ul`
//   display: flex;
//   gap: 1rem;

//   @media (max-width: 950px) {
//     /* display: ${({ hamburger }) => (hamburger ? "flex" : "none")}; */
//     flex-direction: column;
//     gap: 2.5rem;
//   }
// `;
// function Nav({ openHamburger, onToggleHamburger }) {
//   const { logoutHandler } = useAuthContext();

//   // LogoutHandler
//   const mainLogoutHandler = () => {
//     logoutHandler();
//     onToggleHamburger();
//   };

//   return (
//     <NavStyled hamburger={openHamburger}>
//       <LiContainer>
//         <NavLi onClick={onToggleHamburger}>
//           <NavLink to="/home">Home</NavLink>
//         </NavLi>
//         <NavLi onClick={onToggleHamburger}>
//           <NavLink to="/about">About</NavLink>
//         </NavLi>
//         {/* <NavLi onClick={onToggleHamburger}>
//           <NavLink to="/menu">Menu</NavLink>
//         </NavLi> */}
//         <NavLi onClick={onToggleHamburger}>
//           <NavLink to="/reservations">Reservations</NavLink>
//         </NavLi>
//         <NavLi onClick={onToggleHamburger}>
//           <NavLink to="/orderonline">Order Online</NavLink>
//         </NavLi>
//         <NavLi onClick={mainLogoutHandler}>
//           <NavLink to="/">Logout</NavLink>
//         </NavLi>
//       </LiContainer>
//     </NavStyled>
//   );
// }

// export default Nav;
