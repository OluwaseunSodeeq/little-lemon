// import styled from "styled-components";
// import useToggleContext from "../Contexts/ToggleContext/useToggleContext";
// import useAuthContext from "../Contexts/Authenticate/useAuthContext";

// export const HamburgerBgDiv = styled.div`
//   display: none;
//   @media (max-width: 950px) {
//     position: fixed;
//     z-index: 80;
//     height: 1rem;
//     width: 1rem;
//     background-color: rgba(0, 0, 0, 0.9);
//     top: 2.5rem;
//     right: 6%;
//     display: ${({ auth }) => (auth ? "block" : "none")};
//     transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
//     transform: ${({ open }) => (open ? "scale(200)" : "")};
//     background-image: ${({ open }) =>
//       open ? "radial-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))" : ""};
//   }
// `;
// function HamburgerBg() {
//   const { open } = useToggleContext();
//   const { auth } = useAuthContext();
//   const show = auth;
//   return (
//     <div>
//       <HamburgerBgDiv auth={show} open={open} />
//     </div>
//   );
// }

// export default HamburgerBg;

import styled from "styled-components";
import useToggleContext from "../Contexts/ToggleContext/useToggleContext";
import useAuthContext from "../Contexts/Authenticate/useAuthContext";

export const HamburgerBgDiv = styled.div`
  display: none;
  @media (max-width: 950px) {
    position: fixed;
    z-index: 80;
    height: 1rem;
    width: 1rem;
    background-color: rgba(0, 0, 0, 0.9);
    top: 2.5rem;
    right: 6%;
    display: ${({ auth }) => (auth ? "block" : "none")};
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    transform: ${({ open }) => (open ? "scale(200)" : "")};
    background-image: ${({ open }) =>
      open ? "radial-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))" : ""};
  }
`;

function HamburgerBg() {
  const { open } = useToggleContext();
  const { auth } = useAuthContext();
  const show = auth;
  return (
    <div>
      <HamburgerBgDiv auth={show} open={open} />
    </div>
  );
}

export default HamburgerBg;
