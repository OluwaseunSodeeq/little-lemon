import styled from "styled-components";

export const NavLi = styled.li`
  position: relative;
  font-size: 1.6rem;
  color: var(--deepGreen);
  font-weight: 700;
  padding: 0 0.5rem;
  cursor: pointer;
  display: inline-block;
  /* font-family: var(--markazi); */
  font-family: var(--karla);
  &::before {
    content: "";
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    width: 1px;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1s, width 0.2s cubic-bezier(1, 0, 0, 1) 0.2s;
  }
  & > a {
    /* width: 100%; */

    &:active {
      border: 2px solid blue;
    }
  }
  &:hover {
    color: var(--yellow);
  }

  &:hover::before {
    border: 2px solid var(--yellow);
    transform: scaleX(1);
    color: var(--yellow);
    width: 100%;
  }
`;
