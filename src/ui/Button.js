import styled, { css } from "styled-components";

const fontSize = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
  `,
  xlarge: css`
    font-size: 1.8rem;
    padding: 1.2rem 2.4rem;
  `,
};

const fontWeight = {
  regular: css`
    font-weight: var(--regular);
  `,
  medium: css`
    font-weight: var(--medium);
  `,
  bold: css`
    font-weight: var(--bold);
  `,
  deepBold: css`
    font-weight: var(--deepBold);
  `,
};

const color = {
  black: css`
    color: var(--black);
    &:hover {
      color: var(--pureWhite);
    }
  `,
  deepGreen: css`
    color: var(--deepGreen);
  `,
  yellow: css`
    color: var(--yellow);
  `,
  pureWhite: css`
    color: var(--pureWhite);
  `,
};

const backgroundColor = {
  black: css`
    background-color: var(--black);
  `,
  deepGreen: css`
    background-color: var(--deepGreen);
  `,
  yellow: css`
    background-color: var(--yellow);
    &:hover {
      background-color: var(--deepGreen);
      border: 1px double var(--pureWhite);
    }
  `,
  pureWhite: css`
    background-color: var(--pureWhite);
  `,
};

export const Button = styled.button`
  font-family: var(--markazi);
  box-shadow: var(--shadow-sm);
  border: none;
  border-radius: var(--border-radius-md);
  ${(props) => fontSize[props.fontSize]}
  ${(props) => fontWeight[props.fontWeight]}
  ${(props) => color[props.textColor]}
  ${(props) => backgroundColor[props.backgroundColor]}

  @media (max-width: 450px) {
    border-radius: var(--border-radius-xlg);
    /* border: 2px solid black; */
  }
`;

Button.defaultProps = {
  textColor: "black",
  backgroundColor: "yellow",
  fontWeight: "bold",
  fontSize: "xlarge",
};
