import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderCircle = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: transparent;
  border: 0.25rem dashed
    ${({ theme }) => theme.contentColor || "var(--deepGreen)"};
  animation: ${spin} 5s linear infinite;
`;

function Loader() {
  return (
    <LoaderContainer>
      <LoaderCircle />
    </LoaderContainer>
  );
}

export default Loader;
