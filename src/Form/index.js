import {
    StyledForm,
    StyledFieldset,
    StyledText,
    StyledField,
    Styledlabel,
    StyledButtonContainer,
    StyledButton
} from "./styled";
import { useState } from "react";
import { currencies } from "../currencies"
import Result from "./Result";
import Clock from "./Clock";



const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].shortcut);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Clock />
            <StyledFieldset>
                <Styledlabel>
                    <StyledText>
                        Kwota w PLN:
                    </StyledText>
                    <StyledField
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        name="amount"
                        type="number"
                        min="0.01"
                        max="999999999"
                        step="0.01"
                        placeholder="Wpisz kwotę"
                        autoFocus
                        required />
                </Styledlabel>
                <Styledlabel>
                    <StyledText>
                        Waluta:
                    </StyledText>
                    <StyledField as="select"
                        name="requestedCurrency"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        required
                    >
                        {currencies.map(currency => (
                            <option
                                key={currency.shortcut}
                                value={currency.shortcut}
                            >
                                {currency.name}
                            </option>
                        ))};
                    </StyledField>
                </Styledlabel>
            </StyledFieldset>
            <StyledButtonContainer>
                <StyledButton>Przelicz</StyledButton>
            </StyledButtonContainer>
            <Result result={result} />
        </StyledForm>
    );
};

export default Form;