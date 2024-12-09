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

export const FrontCardLeft = styled(CardFace)``;

export const FrontCardRight = styled(CardFace)``;

export const BackCardLeft = styled(CardFace)``;

export const BackCardRight = styled(CardFace)``;

export const ReservationCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "turn",
})`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 45rem;
  perspective: 150rem;
  overflow: hidden;

  & ${FrontCardLeft} {
    transform: ${({ $turn }) => {
      return $turn ? "rotateY(180deg)" : "rotateY(0deg)";
    }};
  }
  & ${FrontCardRight} {
    transform: ${({ $turn }) => {
      return $turn ? "rotateY(-180deg)" : "rotateY(0deg)";
    }};
  }

  & ${BackCardLeft} {
    transform: ${({ $turn }) => {
      return $turn ? "rotateY(0deg)" : "rotateY(180deg)";
    }};
  }
  & ${BackCardRight} {
    transform: ${({ $turn }) => {
      return $turn ? "rotateY(0deg)" : "rotateY(-180deg)";
    }};
  }
`;

// export const ReservationCard = styled.div`
//   position: relative;
//   z-index: 10;
//   width: 100%;
//   height: 45rem;
//   perspective: 150rem;
//   overflow: hidden;

//   /* Apply transform with $turn as transient prop */
//   & ${FrontCardLeft} {
//     transform: ${({ $turn }) => ($turn ? "rotateY(180deg)" : "rotateY(0deg)")};
//   }
//   & ${FrontCardRight} {
//     transform: ${({ $turn }) => ($turn ? "rotateY(-180deg)" : "rotateY(0deg)")};
//   }

//   & ${BackCardLeft} {
//     transform: ${({ $turn }) => ($turn ? "rotateY(0deg)" : "rotateY(180deg)")};
//   }
//   & ${BackCardRight} {
//     transform: ${({ $turn }) => ($turn ? "rotateY(0deg)" : "rotateY(-180deg)")};
//   }
// `;

export const CardLeft = styled.div`
  width: 50%;
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const CardRight = styled.div`
  width: 50%;
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const FlexedCard = styled.div`
  display: flex;
  column-gap: 5rem;

  @media (max-width: 760px) {
    flex-direction: column;
    /* row-gap: 3rem; */
  }
`;

// import styled from "styled-components";

// export const CardFace = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
//   transition: transform 0.8s ease;
//   overflow: hidden;
// `;

// export const FrontCardLeft = styled(CardFace)``;

// export const FrontCardRight = styled(CardFace)`
//   /* border: 2px solid red; */
// `;

// export const BackCardLeft = styled(CardFace)``;
// export const BackCardRight = styled(CardFace)``;

// export const ReservationCard = styled.div`
//   position: relative;
//   z-index: 10;
//   width: 100%;
//   height: 45rem;
//   perspective: 150rem;
//   overflow: hidden;

//   & ${FrontCardLeft} {
//     transform: ${({ $turn }) => ($turn ? "rotateY(180deg)" : "rotateY(0deg)")};
//   }
//   & ${FrontCardRight} {
//     transform: ${({ $turn }) => ($turn ? "rotateY(-180deg)" : "rotateY(0deg)")};
//   }

//   & ${BackCardLeft} {
//     transform: ${({ $turn }) => ($turn ? "rotateY(0deg)" : "rotateY(180deg)")};
//   }
//   & ${BackCardRight} {
//     transform: ${({ $turn }) => ($turn ? "rotateY(0deg)" : "rotateY(-180deg)")};
//   }
// `;
// export const CardLeft = styled.div`
//   width: 50%;
//   @media (max-width: 760px) {
//     width: 100%;
//   }
// `;
// export const CardRight = styled.div`
//   width: 50%;

//   @media (max-width: 760px) {
//     width: 100%;
//   }
// `;
// export const FlexedCard = styled.div`
//   display: flex;
//   column-gap: 5rem;

//   @media (max-width: 760px) {
//     flex-direction: column;
//     /* row-gap: 3rem; */
//   }
// `;
