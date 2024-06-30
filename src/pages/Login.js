import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Heading } from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
`;
const FormContent = styled.div`
  background-color: var(--deepGreen);
  border-radius: var(--border-radius-md);
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45rem;
  margin: 0 auto;

  @media (max-width: 450px) {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
  }
`;

const LogoContainer = styled.div`
  width: 25rem;
  padding: 0 2rem;
  margin: 0 auto;

  & > img {
    /* width: 100%; */
    object-fit: contain;
  }
`;
function Login() {
  return (
    <Container as="section" type="login">
      <Content>
        <LoginLayout>
          <LogoContainer>
            <img src="icons_assets/Logo.svg" alt="Logo" />
          </LogoContainer>
          <FormContent>
            <Heading as="h1">Log into your account</Heading>
            <LoginForm />
          </FormContent>
        </LoginLayout>
      </Content>
    </Container>
  );
}

export default Login;
