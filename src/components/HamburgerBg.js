import styled from "styled-components";
import useToggleContext from "../Contexts/ToggleContext/useToggleContext";

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
    display: block;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    transform: ${({ open }) => (open ? "scale(200)" : "")};
    background-image: ${({ open }) =>
      open
        ? "radial-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))"
        : "transparent"};
  }
`;
function HamburgerBg() {
  const { open } = useToggleContext();
  return (
    <div>
      <HamburgerBgDiv open={open} />
    </div>
  );
}

export default HamburgerBg;
