import styled, { css } from "styled-components";

export const FlexedDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${(props) =>
    props.type === "flexMenu" &&
    css`
      justify-content: space-between;

      @media (max-width: 950px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        column-gap: 10%;
      }

      @media (max-width: 450px) {
        padding: 0 1rem;
      }
    `}
  ${(props) =>
    props.type === "sb" &&
    css`
      justify-content: space-between;

      @media (max-width: 950px) {
        flex-wrap: wrap;
      }

      @media (max-width: 450px) {
        /* flex-direction: column; */
        justify-content: start;
        /* border: 2px solid blue; */
      }
    `}
  ${(props) =>
    props.type === "sbt" &&
    css`
      justify-content: space-between;

      @media (max-width: 950px) {
        flex-wrap: wrap;
      }

      @media (max-width: 450px) {
        flex-direction: column;
        justify-content: center;

        /* border: 2px solid blue; */
      }
    `}
  ${(props) =>
    props.type === "grid" &&
    css`
      justify-content: space-between;
    `}


  ${(props) =>
    props.type === "gap" &&
    css`
      gap: 2rem;
    `}

  ${(props) =>
    props.type === "doubleGap" &&
    css`
      gap: 8rem;

      @media (max-width: 450px) {
        flex-direction: column;
        justify-content: flex-start;
        gap: 2rem;
      }
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
    @media (max-width: 768px) {
    gap: 2rem;
  }
`;
