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
      @media (max-width: 450px) {
        font-size: 24px;
      }
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

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 20px;
      color: var(--pureWhite);
      font-weight: var(--bold);
      font-family: var(--karla);
    `} 

  ${additionalStyles}
`;
