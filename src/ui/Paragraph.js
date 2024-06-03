import styled, { css } from "styled-components";

export const fontSize = {
  small: css`
    font-size: 1.2rem;
  `,
  medium: css`
    font-size: 1.4rem;
  `,
  large: css`
    font-size: 1.6rem;
  `,
  xlarge: css`
    font-size: 1.8rem;
  `,
  extraLarge: css`
    font-size: 4rem;

    @media (max-width: 450px) {
      font-size: 3.5rem;
    }
  `,
};

export const fontWeight = {
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

export const fontFamily = {
  karla: css`
    font-family: var(--karla);
    text-decoration: underline;
  `,
  sanSerif: css`
    font-family: "sans-serif";
  `,
  serif: css`
    font-family: "serif";
  `,
  markazi: css`
    font-family: var(--markazi);
  `,
};

export const color = {
  black: css`
    color: var(--black);
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

export const Paragraph = styled.p`
  ${(props) => fontSize[props.fontSize]}
  ${(props) => fontWeight[props.fontWeight]}
  ${(props) => color[props.color]}
`;

Paragraph.defaultProps = {
  color: "pureWhite",
  fontWeight: "regular",
  fontSize: "large",
  fontFamily: "serif",
};
