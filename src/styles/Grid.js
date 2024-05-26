import styled from "styled-components";

export const GridColumns = styled.div`
  display: grid;
  /* grid-template-columns:1fr 1fr 1fr; */
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
