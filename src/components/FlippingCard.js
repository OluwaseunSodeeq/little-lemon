import styled from "styled-components";

// Base style for CardFace
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

// Extend CardFace for different card sides
export const FrontCardLeft = styled(CardFace)``;
export const FrontCardRight = styled(CardFace)``;
export const BackCardLeft = styled(CardFace)``;
export const BackCardRight = styled(CardFace)``;

// ReservationCard with conditional transform logic
export const ReservationCard = styled.div.withConfig({
  shouldForwardProp: (prop) => !["turn"].includes(prop),
})`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 45rem;
  perspective: 150rem;
  overflow: hidden;

  // Front Card Left transformation
  & ${FrontCardLeft} {
    transform: ${({ turn }) => (turn ? "rotateY(180deg)" : "rotateY(0deg)")};
  }
  // Front Card Right transformation
  & ${FrontCardRight} {
    transform: ${({ turn }) => (turn ? "rotateY(-180deg)" : "rotateY(0deg)")};
  }
  // Back Card Left transformation
  & ${BackCardLeft} {
    transform: ${({ turn }) => (turn ? "rotateY(0deg)" : "rotateY(180deg)")};
  }
  // Back Card Right transformation
  & ${BackCardRight} {
    transform: ${({ turn }) => (turn ? "rotateY(0deg)" : "rotateY(-180deg)")};
  }
`;

// Style for left card container
export const CardLeft = styled.div`
  width: 50%;

  @media (max-width: 760px) {
    width: 100%;
  }
`;

// Style for right card container
export const CardRight = styled.div`
  width: 50%;

  @media (max-width: 760px) {
    width: 100%;
  }
`;

// Flex container for cards
export const FlexedCard = styled.div`
  display: flex;
  column-gap: 5rem;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
