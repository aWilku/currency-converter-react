import Header from "./Header";
import Form from "./Form";
import Container from "./Container";
import Result from "./Result";

function App() {
  return (
    <Container>
      <Header
        title="Wolf Kalkulator"
      />
      <Form />
      <Result />
    </Container>
  );
}

export default App;
