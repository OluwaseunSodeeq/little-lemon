import React from "react";
import styled from "styled-components";

import LoginForm from "../components/LoginForm";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import { Heading } from "../ui/Heading";
import useAuthContext from "../Contexts/Authenticate/useAuthContext";

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
    width: 90%;
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
  const { auth } = useAuthContext();

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

// import React from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// // import { useAuthContext } from "./Contexts/Authenticate/AuthContext";
// // import LoginForm from "./components/LoginForm";

// import LoginForm from "../components/LoginForm";
// import { Container } from "../ui/Container";
// import { Content } from "../ui/Content";
// import { Heading } from "../ui/Heading";
// import useAuthContext from "../Contexts/Authenticate/useAuthContext";

// const LoginLayout = styled.main`
//   min-height: 100vh;
//   display: grid;
//   grid-template-columns: 48rem;
//   align-content: center;
//   justify-content: center;
//   gap: 3.2rem;
// `;
// const FormContent = styled.div`
//   background-color: var(--deepGreen);
//   border-radius: var(--border-radius-md);
//   padding: 2rem;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   width: 45rem;
//   margin: 0 auto;

//   @media (max-width: 450px) {
//     width: 90%;
//     margin: 0 auto;
//     padding: 2rem 0;
//   }
// `;
// const LogoContainer = styled.div`
//   width: 25rem;
//   padding: 0 2rem;
//   margin: 0 auto;

//   & > img {
//     /* width: 100%; */
//     object-fit: contain;
//   }
// `;

// function Login() {
//   const navigate = useNavigate();
//   const { auth: isAuthenticated, login } = useAuthContext(); // Make sure `login` function is available

//   // Redirect to home if already authenticated
//   if (isAuthenticated) {
//     navigate("/home");
//     return null;
//   }

//   const handleLogin = (event) => {
//     event.preventDefault();
//     // Assume `login` function takes care of authentication and then redirects
//     login().then(() => {
//       navigate("/home");
//     });
//   };

//   return (
//     <Container as="section" type="login">
//       <Content>
//         <LoginLayout>
//           <LogoContainer>
//             <img src="icons_assets/Logo.svg" alt="Logo" />
//           </LogoContainer>
//           <FormContent>
//             <Heading as="h1">Log into your account</Heading>
//             <LoginForm onSubmit={handleLogin} />
//           </FormContent>
//         </LoginLayout>
//       </Content>
//     </Container>
//   );
// }

// export default Login;

// import styled from "styled-components";
// import LoginForm from "../components/LoginForm";
// import { Container } from "../ui/Container";
// import { Content } from "../ui/Content";
// import { Heading } from "../ui/Heading";
// import useAuthContext from "../Contexts/Authenticate/useAuthContext";

// const LoginLayout = styled.main`
//   min-height: 100vh;
//   display: grid;
//   grid-template-columns: 48rem;
//   align-content: center;
//   justify-content: center;
//   gap: 3.2rem;
// `;
// const FormContent = styled.div`
//   background-color: var(--deepGreen);
//   border-radius: var(--border-radius-md);
//   padding: 2rem;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   width: 45rem;
//   margin: 0 auto;

//   @media (max-width: 450px) {
//     width: 90%;
//     margin: 0 auto;
//     padding: 2rem 0;
//   }
// `;

// const LogoContainer = styled.div`
//   width: 25rem;
//   padding: 0 2rem;
//   margin: 0 auto;

//   & > img {
//     /* width: 100%; */
//     object-fit: contain;
//   }
// `;

// ================
// function Login() {
//   const { auth: isAuthenticated } = useAuthContext();
//   console.log(isAuthenticated);

//   return (
//     <>
//       {!isAuthenticated && (
//         <Container as="section" type="login">
//           <Content>
//             <LoginLayout>
//               <LogoContainer>
//                 <img src="icons_assets/Logo.svg" alt="Logo" />
//               </LogoContainer>
//               <FormContent>
//                 <Heading as="h1">Log into your account</Heading>
//                 <LoginForm />
//               </FormContent>
//             </LoginLayout>
//           </Content>
//         </Container>
//       )}
//     </>
// =========================
// <>
//   <Container as="section" type="login">
//     <Content>
//       <LoginLayout>
//         <LogoContainer>
//           <img src="icons_assets/Logo.svg" alt="Logo" />
//         </LogoContainer>
//         <FormContent>
//           <Heading as="h1">Log into your account</Heading>
//           <LoginForm />
//         </FormContent>
//       </LoginLayout>
//     </Content>
//   </Container>
// </>
//   );
// }

// export default Login;
