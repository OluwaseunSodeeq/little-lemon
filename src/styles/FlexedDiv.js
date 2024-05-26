import styled, { css } from "styled-components";

export const FlexedDiv = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.type === "sb" &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === "gap" &&
    css`
      gap: 2rem;
    `}
  ${(props) =>
    props.type === "center" &&
    css`
      justify-content: center;
    `}
    ${(props) =>
    props.type === "column" &&
    css`
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
    `}
`;
