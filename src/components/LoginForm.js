import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../ui/Button";
import useAuthContext from "../Contexts/Authenticate/useAuthContext";
// import { useNavigate } from "react-router-dom";

const LoginFormDiv = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 450px) {
    width: 80%;
  }
`;

const InputContainer = styled.div`
  width: 90%;
  padding: 1.5rem 0px;

  @media (max-width: 450px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const InputLabel = styled.label`
  font-size: 1.8rem;
  color: var(--pureWhite);
  font-weight: var(--bold);
`;

const Input = styled.input`
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  margin-top: 1rem;
  border-radius: var(--border-radius-md);
  color: var(--deepGreen);
  background-color: var(--pureWhite);
  border: none;
  outline: none;
  border-bottom: 5px solid transparent;
  transition: border-color 0.3s ease;

  &:focus {
    border-bottom-color: var(--yellow);
  }
`;

const InputErrorMsg = styled.p`
  font-size: 1.6rem;
  color: red;
`;

function LoginForm() {
  const {
    userPassword: password,
    userName: name,
    setUserName: setName,
    setUserPassword: setPassword,
    defaultPassword,
    loginHandler,
    auth,
  } = useAuthContext();

  const [error, setError] = useState({ name: "", password: password });

  console.log(auth);
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !password || password !== defaultPassword) {
      setError({ name, password });
    }
    console.log("User has Log in", auth);
    loginHandler();

    // onLogin();
    // navigate("/home");
  }
  const atleastThree = 3;
  return (
    <LoginFormDiv onSubmit={handleSubmit}>
      <InputContainer>
        <InputLabel htmlFor="username">Your Name</InputLabel>
        <Input
          error={
            error.name === "" ||
            error.name === " " ||
            name.length < atleastThree
          }
          type="text"
          id="username"
          placeholder="Your Name"
          //   autoComplete="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          //   disabled={isLoading}
        />
        {error && <InputErrorMsg>Pls Enter Your name</InputErrorMsg>}
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="name">Your Password</InputLabel>

        <Input
          error={error.password !== password}
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //   disabled={isLoading}
        />
        {error && <InputErrorMsg>Pls Enter the right Password</InputErrorMsg>}
      </InputContainer>
      <InputContainer>
        <Button>Log in</Button>
      </InputContainer>
    </LoginFormDiv>
  );
}

export default LoginForm;
