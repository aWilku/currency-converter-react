import "./style.css"
import { useState } from "react";

const Form = () => {
    const [amount, setAmount] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
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
                            name="requestedCurrency" required>
                            <option value="" disabled selected>Wybierz walutę</option>
                            <option value="EUR">EUR</option>
                            <option value="CHF">CHF</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
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