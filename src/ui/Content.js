import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  max-width: 120rem;
  height: auto;
  padding: 0 10.4rem 2rem;
  margin: 0 auto;
  @media (max-width: 950px) {
    width: 100%;
    margin: 0 auto;
    padding: 2rem 4rem;
  }
  @media (max-width: 450px) {
    padding: 2rem 2rem;
    border: none;
  }
`;
