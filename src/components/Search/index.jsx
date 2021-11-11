import React, { useState } from "react";
import { Repos } from "..";
import "./style.css";

export const Search = () => {
    const [username, setUsername] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleInput = (e) => {
        setUsername(e.target.value);
        setSubmit(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };

    return (
        <>
            <form aria-label="form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} placeholder="Search..." onChange={handleInput} />
                <input type="submit" value="Get repos" />
            </form>
            <div id="results">
                {submit && <Repos username={username} />}
            </div>
        </>
    )
}