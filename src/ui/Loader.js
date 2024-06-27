import styled from "styled-components";
import { Container } from "./Container";
import { Content } from "./Content";

const LoaderDIv = styled.div`
  position: relative;
  /* top: 9rem; */
  left: 50%;
  top: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loader() {
  return (
    <Container>
      <Content>
        <LoaderDIv>Loading</LoaderDIv>
      </Content>
    </Container>
  );
}

export default Loader;
