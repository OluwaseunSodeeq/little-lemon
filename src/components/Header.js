import styled from "styled-components";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import Logo from "./Logo";
import Nav from "./Nav";

const HeaderContent = styled.div`
  height: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0%;
  box-shadow: var(--backdrop-color);
`;

function Header() {
  return (
    <Container as="header">
      <Content>
        <HeaderContent>
          <Logo />
          <Nav />
        </HeaderContent>
      </Content>
    </Container>
  );
}

export default Header;
