import { StyledClock } from "./styled";
import { useCurrentDate } from "../../useCurrentDate";

const Clock = () => {
    const date = useCurrentDate();
    return (
        <StyledClock>
            Dziaj jest
            {" "}
            {date.toLocaleString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            })}
        </StyledClock>
    );
};

export default Clock;