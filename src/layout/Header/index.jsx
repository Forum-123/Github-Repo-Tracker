import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BackButton, Search } from "../../components";
import "./style.css";

export const Header = () => {
    const [search, setSearch] = useState("");

    const getInput = (search) => {
        setSearch(search)
    }

    return (
        <nav>
            <Search getInput={getInput} />
            <Link to={{ pathname: "https://github.com/pulls" }} target="_blank">Pull Requests</Link>
            <Link to={{ pathname: "https://github.com/issues" }} target="_blank">Issues</Link>
            <Link to={{ pathname: "https://github.com/marketplace" }} target="_blank">Marketplace</Link>
            <Link to={{ pathname: "https://github.com/explore" }} target="_blank">Explore</Link>
            <BackButton />
        </nav>
    )
}
