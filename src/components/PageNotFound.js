import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Heading } from "../ui/Heading";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--pureWhite);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
  color: var(--deepGreen);
`;

/* box */
const Box = styled.div`
  background-color: var(--pureWhite);
  border: 1px solid var(--deepGreen);
  border-radius: var(--border-radius-md);
  color: var(--deepGreen);
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  function useMoveBack() {
    const navigate = useNavigate();
    return () => navigate(-1);
  }
  const moveBack = useMoveBack();
  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          <span role="img" aria-label="description of emoji">
            😢
          </span>
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
