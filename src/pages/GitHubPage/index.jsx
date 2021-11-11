import React from "react";
import { Search } from "../../components";
import "./style.css";

export const GitHubPage = () => {
    return (
        <section id="main">
            <p>Search for a Github username and view their public repositories and their stats.</p>
            <Search />
        </section>
    )
}