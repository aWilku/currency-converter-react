import { useState, useEffect } from "react";
import "./style.css"

const Clock = () => {
    const formatDate = (date) => {
        return date.toLocaleDateString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
    };

    const [date, setDate] = useState(formatDate(new Date()));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(formatDate(new Date()));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <p className="clock">
            Dziaj jest {date}
        </p>
    );
};

export default Clock;