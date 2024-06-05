import styled from "styled-components";
import { Container } from "../ui/Container";
import { Content } from "../ui/Content";

const ConfirmReservationStyled = styled.div`
  background-color: var(--deepGreen);
  padding: 3rem 0.5rem;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
`;
function ConfirmReservation() {
  return (
    <>
      <Container as="section" type="confirmReservation">
        <Content>
          <ConfirmReservationStyled>
            <Form action=""></Form>
          </ConfirmReservationStyled>
        </Content>
      </Container>
    </>
  );
}

export default ConfirmReservation;
