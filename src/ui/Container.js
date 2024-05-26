import styled, { css } from "styled-components";

const headerBg = css`
  position: fixed;
  top: 0;
  background-color: var(--white);
  z-index: 99;
`;
const weekSpecialBg = css`
  position: relative;
  top: 20rem;
  background-color: var(--pureWhite);
  padding-bottom: 3rem;
`;

const herosectionBg = css`
  position: relative;
  top: 9rem;
  height: 27rem;
  background-color: var(--deepGreen);
`;
export const Container = styled.div`
  width: 100%;

  ${(props) =>
    props.as === "header" &&
    css`
      ${headerBg}
    `}

  ${(props) =>
    props.as === "section" &&
    css`
      ${herosectionBg}
    `}
    ${(props) =>
    props.as === "aside" &&
    css`
      ${weekSpecialBg}
    `}
`;
