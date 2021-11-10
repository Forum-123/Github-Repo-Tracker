import React from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../../components";
import logo from "../../logo.png";
import "./style.css";

export const Header = () => {
    return (
        <nav>
            <img src={logo} alt="Github logo" />
            <div id="right">
                <Link to={{ pathname: "https://github.com/pulls" }} target="_blank">Pull Requests</Link>
                <Link to={{ pathname: "https://github.com/issues" }} target="_blank">Issues</Link>
                <Link to={{ pathname: "https://github.com/marketplace" }} target="_blank">Marketplace</Link>
                <Link to={{ pathname: "https://github.com/explore" }} target="_blank">Explore</Link>
                <BackButton />
            </div>
        </nav>
    )
}
