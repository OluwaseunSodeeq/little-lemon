import { Container } from "../ui/Container";
import { Content } from "../ui/Content";
import CustomSelect from "../components/Test2";

function Login() {
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
  ];
  return (
    <Container>
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <CustomSelect options={options} />
        </div>
      </Content>
    </Container>
  );
}

export default Login;
