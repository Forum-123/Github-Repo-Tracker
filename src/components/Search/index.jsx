import React, { useState } from "react";

import "./style.css";

export const Search = ({ getInput }) => {
    const [username, setUsername] = useState("");
    const [formAlert, setFormAlert] = useState("Enter a username");

    const reset = () => {
        setUsername("");
        setFormAlert("Enter a username");
    };

    const handleInput = (e) => {
        console.log(e.target.value)
        if (e.target.value) {
            setUsername(e.target.value);
            setFormAlert("");
        } else {
            setUsername("");
            setFormAlert("Please enter a username");
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getInput(username);
        setUsername("");
        setFormAlert("");
    };

    return (
        <form aria-label="form" onSubmit={handleSubmit, reset}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={handleInput} />
            <input type="submit" disabled={formAlert} value={formAlert ? formAlert : "Search"} />
        </form>
    )
}