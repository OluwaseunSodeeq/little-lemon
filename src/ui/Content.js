import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  max-width: 120rem;
  height: auto;
  padding: 0 10.4rem;
  margin: 0 auto;
  overflow-x: hidden;

  @media (max-width: 950px) {
    width: 100%;
    margin: 0 auto;
    /* border: 2px solid red; */
    padding: 0 4rem;
  }
  @media (max-width: 450px) {
    padding: 0 2rem;
    /* border: 2px solid green; */
  }
`;
