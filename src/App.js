import Header from "./Header";
import Form from "./Form";
import Container from "./Container";
import Result from "./Result";
import { useState } from "react";
import { currencies } from "./currencies";
import Clock from "./Clock";

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
      <Clock />
      <Form
        calculateResult={calculateResult}
      />
      <Result
        result={result}
      />
    </Container>
  );
};

export default App;
