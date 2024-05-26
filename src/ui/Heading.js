import styled, { css } from "styled-components";
const additionalStyles = css`
  text-align: left;
`;

export const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 38px;
      color: var(--yellow);
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 32px;
      color: var(--black);
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 28px;
      color: var(--pure-white);
      margin-top: -1rem;
    `}
  ${additionalStyles}
`;
