import styled from "styled-components";

export const NavLi = styled.li`
  font-size: 1.6rem;
  color: var(--deepGreen);
  font-weight: 700;
  cursor: pointer;
  /* font-family: var(--markazi); */
  font-family: var(--karla);

  &:hover {
    color: var(--yellow);
    /* text-decoration: underline; */
    border-bottom: 2px solid var(--yellow);
  }
`;
