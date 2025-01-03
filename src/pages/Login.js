import React from "react";
import styled from "styled-components";

import LoginForm from "../components/LoginForm";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Heading } from "../ui/Heading";
import useCombinedContexts from "../Contexts/CombinedContexts/useCombinedContexts";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 3.2rem;
  align-content: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  @media (max-width: 450px) {
    height: 100vh;
    gap: 2.5rem;
    /* grid-template-columns: 30rem; */
  }
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
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
  }
`;
const HeadingContainer = styled.div`
  white-space: nowrap;
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
  const { auth } = useCombinedContexts();

  return (
    <Container as="section" type="login">
      <Content>
        <LoginLayout>
          <LogoContainer>
            <img src="icons_assets/Logo.svg" alt="Logo" />
          </LogoContainer>
          <FormContent>
            <HeadingContainer>
              <Heading as="h1">Log into your account</Heading>
            </HeadingContainer>
            <LoginForm auth={auth} />
          </FormContent>
        </LoginLayout>
      </Content>
    </Container>
    // }
  );
}

export default Login;
