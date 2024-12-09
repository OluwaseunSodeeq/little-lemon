import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import useCombinedContexts from "../Contexts/CombinedContexts/useCombinedContexts";
// import useAuthContext from "../Contexts/Authenticate/useAuthContext";

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

function LoginForm({ auth }) {
  const navigate = useNavigate();

  const {
    userPassword: password,
    userName: name,
    setUserName: setName,
    setUserPassword: setPassword,
    defaultPassword,
    loginHandler,
  } = useCombinedContexts();

  // const {
  //   userPassword: password,
  //   userName: name,
  //   setUserName: setName,
  //   setUserPassword: setPassword,
  //   defaultPassword,
  //   loginHandler,
  // } = useAuthContext();

  const [error, setError] = useState({ name: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !password.trim() || password !== defaultPassword) {
      setError({
        name: !name.trim() ? "Please enter your name" : "",
        password: password !== defaultPassword ? "Incorrect password" : "",
      });
      return;
    }

    navigate("/home");
    loginHandler();
  }
  return (
    <LoginFormDiv onSubmit={handleSubmit}>
      <InputContainer>
        <InputLabel htmlFor="username">Your Name</InputLabel>
        <Input
          type="text"
          id="username"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error.name && <InputErrorMsg>{error.name}</InputErrorMsg>}
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">Your Password</InputLabel>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <InputErrorMsg>{error.password}</InputErrorMsg>}
      </InputContainer>
      <InputContainer>
        <Button $textColor="black" $backgroundColor="yellow" type="submit">
          Log in
        </Button>
      </InputContainer>
    </LoginFormDiv>
  );
}

export default LoginForm;

// function LoginForm() {
//   const {
//     userPassword: password,
//     userName: name,
//     setUserName: setName,
//     setUserPassword: setPassword,
//     defaultPassword,
//     loginHandler,
//     auth,
//   } = useAuthContext();

//   const [error, setError] = useState({ name: "", password: password });

//   console.log("Login form");
//   console.log(auth);

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!name || !password || password !== defaultPassword) {
//       setError({ name, password });
//     }
//     loginHandler();
//     console.log("User has Log in", auth);

//     // onLogin();
//     // navigate("/home");
//   }
//   const atleastThree = 3;
//   return (
//     <LoginFormDiv onSubmit={handleSubmit}>
//       <InputContainer>
//         <InputLabel htmlFor="username">Your Name</InputLabel>
//         <Input
//           error={
//             error.name === "" ||
//             error.name === " " ||
//             name.length < atleastThree
//           }
//           type="text"
//           id="username"
//           placeholder="Your Name"
//           //   autoComplete="username"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           //   disabled={isLoading}
//         />
//         {error && <InputErrorMsg>Pls Enter Your name</InputErrorMsg>}
//       </InputContainer>
//       <InputContainer>
//         <InputLabel htmlFor="name">Your Password</InputLabel>

//         <Input
//           error={error.password !== password}
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           //   disabled={isLoading}
//         />
//         {error && <InputErrorMsg>Pls Enter the right Password</InputErrorMsg>}
//       </InputContainer>
//       <InputContainer>
//         <Button>Log in</Button>
//       </InputContainer>
//     </LoginFormDiv>
//   );
// }

// export default LoginForm;
