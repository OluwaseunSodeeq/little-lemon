import styled, { css } from "styled-components";

// HEADER
const headerBg = css`
  position: fixed;
  top: 0;
  background-color: var(--white);
  z-index: 99;
`;

//WEEK SPECIAL
const weekSpecialBg = css`
  position: relative;
  top: 20rem;
  background-color: var(--pureWhite);
  padding-bottom: 3rem;

  @media (max-width: 450px) {
    top: 10rem;
  }
`;

// HOMEPAGE
const herosectionBg = css`
  position: relative;
  top: 9rem;
  height: 27rem;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    top: 7rem;
  }
`;

//MAKE RESERVATION
const makeReservationBg = css`
  position: relative;
  top: 9rem;
  height: auto;
  background-color: var(--pureWhite);

  /*  */
  /* display: flex;
  flex-direction: column;
  row-gap: 5rem; */

  @media (max-width: 450px) {
    top: 7rem;
  }
`;
const makeReservationBgTop = css`
  /* font-family: var(--karla); */
  position: relative;
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
  }
`;
const makeReservationBgBottom = css`
  position: relative;
  top: 5rem;
  /* height: 27rem; */
  background-color: var(--pureWhite);

  @media (max-width: 450px) {
    top: 4rem;
  }
`;

//CONFIRM RESERVATION
const confirmReservationBg = css`
  position: relative;
  top: 9rem;
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    top: 7rem;
  }
`;
// Menu
const menuBg = css`
  position: relative;
  top: 9rem;
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    top: 7rem;
  }
`;

const footerBg = css`
  position: relative;
  top: 20rem;
  background-color: var(--black);
  height: auto;
  /* background-color: var(--deepGreen); */
  padding: 4rem 0;
`;
export const Container = styled.div`
  width: 100%;

  /* HEADER */
  ${(props) =>
    props.as === "header" &&
    css`
      ${headerBg}
    `}
  /* HOMEPAGE */
  ${(props) =>
    props.as === "section" &&
    props.type === "homepage" &&
    css`
      ${herosectionBg}
    `}


    /* Make RESERVATION */
    ${(props) =>
    props.as === "section" &&
    props.type === "makeReservation" &&
    css`
      ${makeReservationBg}
    `}
    /* TOP */
    ${(props) =>
    props.as === "div" &&
    props.type === "makeReservationTop" &&
    css`
      ${makeReservationBgTop}
    `}
/* BOTTOM */
    ${(props) =>
    props.as === "div" &&
    props.type === "makeReservationBottom" &&
    css`
      ${makeReservationBgBottom}
    `}

    /* Confirm RESERVATION */
    ${(props) =>
    props.as === "section" &&
    props.type === "confirmReservation" &&
    css`
      ${confirmReservationBg}
    `}

     /* Menu */
     ${(props) =>
    props.as === "section" &&
    props.type === "menu" &&
    css`
      ${menuBg}
    `}

/* WEEK SPECIAL */
    ${(props) =>
    props.as === "aside" &&
    css`
      ${weekSpecialBg}
    `}
/* FOOTER */
    ${(props) =>
    props.as === "footer" &&
    css`
      ${footerBg}
    `}
`;
