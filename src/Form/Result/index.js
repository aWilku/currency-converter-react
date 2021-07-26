import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        {result !== undefined && (
            <>
                <strong>
                    {result.givenAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                    {" "}
                    {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </StyledResult>
);

export default Result;