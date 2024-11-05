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
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }
  `,
  pureWhite: css`
    background-color: var(--pureWhite);
  `,
};
export const Button = styled.button`
  position: relative;
  font-family: var(--markazi);
  border-radius: var(--border-radius-md);
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  display: inline-block;

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: var(--border-radius-md);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    border: 1px solid var(--deepGreen);
  }

  ${(props) => fontSize[props.$fontSize || "xlarge"]}
  ${(props) => fontWeight[props.$fontWeight || "bold"]}
  ${(props) => color[props.$textColor || "black"]}
  ${(props) => backgroundColor[props.$backgroundColor || "yellow"]}
  
  @media (max-width: 450px) {
    border-radius: var(--border-radius-xlg);
  }
`;

// import styled, { css } from "styled-components";

// const fontSize = {
//   small: css`
//     font-size: 1.2rem;
//     padding: 0.4rem 0.8rem;
//   `,
//   medium: css`
//     font-size: 1.4rem;
//     padding: 1.2rem 1.6rem;
//   `,
//   large: css`
//     font-size: 1.6rem;
//     padding: 1.2rem 2.4rem;
//   `,
//   xlarge: css`
//     font-size: 1.8rem;
//     padding: 1.2rem 2.4rem;
//   `,
// };

// const fontWeight = {
//   regular: css`
//     font-weight: var(--regular);
//   `,
//   medium: css`
//     font-weight: var(--medium);
//   `,
//   bold: css`
//     font-weight: var(--bold);
//   `,
//   deepBold: css`
//     font-weight: var(--deepBold);
//   `,
// };

// const color = {
//   black: css`
//     color: var(--black);
//     &:hover {
//       color: var(--pureWhite);
//     }
//   `,
//   deepGreen: css`
//     color: var(--deepGreen);
//   `,
//   yellow: css`
//     color: var(--yellow);
//   `,
//   pureWhite: css`
//     color: var(--pureWhite);
//   `,
// };

// const backgroundColor = {
//   black: css`
//     background-color: var(--black);
//   `,
//   deepGreen: css`
//     background-color: var(--deepGreen);
//   `,
//   yellow: css`
//     background-color: var(--yellow);
//     &:hover {
//       background-color: var(--deepGreen);
//       transform: translateY(-3px);
//       box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
//     }
//   `,
//   pureWhite: css`
//     background-color: var(--pureWhite);
//   `,
// };

// export const Button = styled.button`
//   position: relative;
//   font-family: var(--markazi);
//   border-radius: var(--border-radius-md);
//   transition: all 0.2s;
//   border: none;
//   cursor: pointer;
//   display: inline-block;

//   &:active,
//   &:focus {
//     outline: none;
//     transform: translateY(-1px);
//     box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
//   }

//   &::after {
//     content: "";
//     display: inline-block;
//     height: 100%;
//     width: 100%;
//     border-radius: var(--border-radius-md);
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: -1;
//     transition: all 0.4s;
//     border: 1px solid var(--deepGreen);
//   }

//   ${(props) => fontSize[props.$fontSize]}
//   ${(props) => fontWeight[props.$fontWeight]}
//   ${(props) => color[props.$textColor]}
//   ${(props) => backgroundColor[props.$backgroundColor]}

//   @media (max-width: 450px) {
//     border-radius: var(--border-radius-xlg);
//   }
// `;

// Button.defaultProps = {
//   $textColor: "black",
//   $backgroundColor: "yellow",
//   $fontWeight: "bold",
//   $fontSize: "xlarge",
// };

// import styled, { css } from "styled-components";

// const fontSize = {
//   small: css`
//     font-size: 1.2rem;
//     padding: 0.4rem 0.8rem;
//   `,
//   medium: css`
//     font-size: 1.4rem;
//     padding: 1.2rem 1.6rem;
//   `,
//   large: css`
//     font-size: 1.6rem;
//     padding: 1.2rem 2.4rem;
//   `,
//   xlarge: css`
//     font-size: 1.8rem;
//     padding: 1.2rem 2.4rem;
//   `,
// };

// const fontWeight = {
//   regular: css`
//     font-weight: var(--regular);
//   `,
//   medium: css`
//     font-weight: var(--medium);
//   `,
//   bold: css`
//     font-weight: var(--bold);
//   `,
//   deepBold: css`
//     font-weight: var(--deepBold);
//   `,
// };

// const color = {
//   black: css`
//     color: var(--black);
//     &:hover {
//       color: var(--pureWhite);
//     }
//   `,
//   deepGreen: css`
//     color: var(--deepGreen);
//   `,
//   yellow: css`
//     color: var(--yellow);
//   `,
//   pureWhite: css`
//     color: var(--pureWhite);
//   `,
// };

// const backgroundColor = {
//   black: css`
//     background-color: var(--black);
//   `,
//   deepGreen: css`
//     background-color: var(--deepGreen);
//   `,
//   yellow: css`
//     background-color: var(--yellow);
//     &:hover {
//       background-color: var(--deepGreen);
//       transform: translateY(-3px);
//       box-shadow: 0 1rem 2rem rgba(black, 0.2);
//       /* margin-left: 3rem; */

//       &::after {
//         transform: scaleX(1.4) scaleY(1.6);
//         opacity: 0;
//         padding: 0.5rem;
//       }
//     }
//   `,
//   pureWhite: css`
//     background-color: var(--pureWhite);
//   `,
// };

// export const Button = styled.button`
//   position: relative;
//   /* width: 15rem; */
//   font-family: var(--markazi);
//   border-radius: var(--border-radius-md);
//   transition: all 0.2s;
//   border: none;
//   cursor: pointer;
//   display: inline-block;

//   &:active,
//   &:focus {
//     outline: none;
//     transform: translateY(-1px);
//     box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
//   }

//   &::after {
//     content: "";
//     display: inline-block;
//     height: 100%;
//     width: 100%;
//     border-radius: var(--border-radius-md);
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: -1;
//     transition: all 0.4s;
//     border: 1px solid var(--deepGreen);
//   }

//   /*  */
//   ${(props) => fontSize[props.fontSize]}
//   ${(props) => fontWeight[props.fontWeight]}
//   ${(props) => color[props.textColor]}
//   ${(props) => backgroundColor[props.backgroundColor]}

//   @media (max-width: 450px) {
//     border-radius: var(--border-radius-xlg);
//   }
// `;

// Button.defaultProps = {
//   textColor: "black",
//   backgroundColor: "yellow",
//   fontWeight: "bold",
//   fontSize: "xlarge",
// };
