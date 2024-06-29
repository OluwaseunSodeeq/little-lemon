import { useState } from "react";
import styled from "styled-components";
import { Button } from "../ui/Button";
import useAuthContext from "../Contexts/Authenticate/useAuthContext";
// import { useNavigate } from "react-router-dom";

const LoginFormDiv = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 450px) {
    width: 100%;
    border: 2px solid blue;
  }
`;

const InputContainer = styled.div`
  width: 90%;
  padding: 1.5rem 0px;

  @media (max-width: 450px) {
    border: 2px solid green;
    width: 100%;
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

  @media (max-width: 450px) {
    width: 90%;
    padding: 0px;
    margin: 1rem auto;
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
  const [error] = useState("");

  console.log(auth);
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !password || password !== defaultPassword) return;
    console.log("User has Log in", auth);
    loginHandler();
    // onLogin();
    // navigate("/home");
  }

  return (
    <LoginFormDiv onSubmit={handleSubmit}>
      <InputContainer>
        <InputLabel htmlFor="username">Your Name</InputLabel>
        <Input
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
