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
  background-color: var(--pureWhite);
  padding-bottom: 3rem;
  margin-top: 20rem;

  @media (max-width: 450px) {
    margin-top: 10rem;
  }
`;

// HOMEPAGE
const herosectionBg = css`
  position: relative;
  top: 8rem;
  height: auto;
  background-color: var(--deepGreen);
  /* height: 27rem; */

  @media (max-width: 450px) {
    top: 7rem;
  }
`;
//About
const aboutBg = css`
  position: relative;
  width: 100%;
  top: 10rem;
  background-color: var(--pureWhite);
  @media (max-width: 950px) {
    top: 8rem;
  }

  @media (max-width: 450px) {
    top: 7rem;
  }
`;
const headingSectionBg = css`
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    margin-top: 3rem;
  }
`;

//MAKE RESERVATION
const makeReservationBg = css`
  position: relative;
  height: auto;
  top: 10rem;
  background-color: var(--pureWhite);
  padding-bottom: 5rem;

  @media (max-width: 450px) {
    top: 7rem;
  }
`;
const makeReservationBgTop = css`
  position: relative;
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
  }
`;
const makeReservationBgBottom = css`
  position: relative;
  height: auto;
  margin-top: 5rem;
  background-color: var(--pureWhite);
  margin-bottom: 5rem;

  @media (max-width: 450px) {
    margin-top: 4rem;
  }
`;

//CONFIRM RESERVATION
const confirmReservationBg = css`
  position: relative;
  /* top: 8rem; */
  height: auto;
  background-color: var(--deepGreen);

  @media (max-width: 450px) {
    /* top: 7rem; */
  }
`;
// Menu
const menuBg = css`
  position: relative;
  top: 8rem;
  padding-top: 4rem;
  height: auto;
  background-color: var(--deepGreen);
  padding-bottom: 10rem;

  @media (max-width: 450px) {
    top: 10rem;
    padding-bottom: 10rem;
  }
`;
// HELPER
const helperBg = css`
  position: relative;
  background-color: var(--pureWhite);
  bottom: 0;
  /* top: 3rem; */
  padding-top: 3rem;
`;
// Footer
const footerBg = css`
  position: relative;
  bottom: 0;
  /* top: 10rem; */
  background-color: var(--black);
  height: auto;
  padding: 4rem 0;
`;

// Login
const loginBg = css`
  position: relative;
  background-color: var(--pureWhite);
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

     /* ABOUT */
  ${(props) =>
    props.as === "section" &&
    props.type === "about" &&
    css`
      ${aboutBg}
    `}

/* ReservationText */
${(props) =>
    props.as === "div" &&
    props.type === "reservationHeading" &&
    css`
      ${headingSectionBg}
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

    /* HElper */
    ${(props) =>
    props.as === "div" &&
    props.type === "helper" &&
    css`
      ${helperBg}
    `}
/* WEEK SPECIAL */
    ${(props) =>
    props.as === "section" &&
    props.type === "week" &&
    css`
      ${weekSpecialBg}
    `}
/* FOOTER */
    ${(props) =>
    props.as === "footer" &&
    css`
      ${footerBg}
    `}

    /* Login */
    ${(props) =>
    props.as === "section" &&
    props.type === "login" &&
    css`
      ${loginBg}
    `}
`;
