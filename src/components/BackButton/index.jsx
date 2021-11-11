import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export const BackButton = () => {
    let history = useHistory();

    return <button onClick={history.goBack}>Back</button>
}