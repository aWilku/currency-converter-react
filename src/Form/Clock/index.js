import { useCurrentDate } from "../../useCurrentDate";
import "./style.css"

const Clock = () => {
    const date = useCurrentDate();
    return (
        <p className="clock">
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
        </p>
    );
};

export default Clock;