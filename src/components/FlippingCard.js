import styled from "styled-components";

export const CardFace = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.8s ease;
  overflow: hidden;
`;

export const FrontCard = styled(CardFace)`
  background-color: var(--deepGreen);
  /* transform: rotateY(0deg); */
`;

export const BackCard = styled(CardFace)`
  background-color: var(--deepGreen);
  /* transform: rotateY(180deg); */
`;

export const ReservationCard = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  perspective: 150rem;
  overflow: "hidden";

  & ${FrontCard} {
    transform: ${({ turn }) => (turn ? " rotateY(180deg)" : " rotateY(0deg);")};
    /*  rotateY(180deg); */
  }

  & ${BackCard} {
    transform: ${({ turn }) => (turn ? " rotateY(0deg)" : "rotateY(180deg);")};
    /* transform: rotateY(0deg); */
  }
`;
