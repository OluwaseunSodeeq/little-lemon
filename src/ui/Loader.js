import styled from "styled-components";

const LoaderDIv = styled.div`
  position: relative;
  top: 9rem;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loader() {
  return <LoaderDIv>Loading</LoaderDIv>;
}

export default Loader;
