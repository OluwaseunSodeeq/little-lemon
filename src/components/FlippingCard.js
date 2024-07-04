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
  background-color: var(--deepGreen);
`;

export const FrontCardLeft = styled(CardFace)``;

export const FrontCardRight = styled(CardFace)``;

export const BackCardLeft = styled(CardFace)``;
export const BackCardRight = styled(CardFace)``;

export const ReservationCard = styled.div`
  position: relative;
  width: 100%;
  height: 43rem;
  perspective: 150rem;
  overflow: "hidden";

  & ${FrontCardLeft} {
    transform: ${({ turn }) => (turn ? " rotateY(180deg)" : " rotateY(0deg);")};
  }
  & ${FrontCardRight} {
    transform: ${({ turn }) =>
      turn ? " rotateY(-180deg)" : " rotateY(0deg);"};
  }

  & ${BackCardLeft} {
    transform: ${({ turn }) => (turn ? " rotateY(0deg)" : "rotateY(180deg);")};
  }
  & ${BackCardRight} {
    transform: ${({ turn }) => (turn ? " rotateY(0deg)" : "rotateY(-180deg);")};
  }
`;
