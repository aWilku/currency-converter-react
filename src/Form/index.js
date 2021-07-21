import "./style.css"
import { useState } from "react";
import { currencies } from "../currencies"

const Form = ({ calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].shortcut);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota w PLN:
                        </span>
                        <input
                            className="form__field"
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
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Waluta:
                        </span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
        </form>
    );
};

export default Form;