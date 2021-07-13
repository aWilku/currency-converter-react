import "./style.css"

const Result = ({ result }) => (
    <p className="container__result">
        {result !== undefined && (
            <>
                <strong>
                    {result.givenAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
                    {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);

export default Result;