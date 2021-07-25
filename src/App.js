import Header from "./Header";
import Form from "./Form";
import Container from "./Container";
import { useState } from "react";
import { currencies } from "./currencies";


function App() {
  const [result, setResult] = useState();
  
  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ shortcut }) => shortcut === currency).rate;

    setResult({
      givenAmount: +amount,
      finalAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container>
      <Header
        title="Wolf Kalkulator"
      />
      <Form
        calculateResult={calculateResult}
        result={result}
      />
    </Container>
  );
};

export default App;
