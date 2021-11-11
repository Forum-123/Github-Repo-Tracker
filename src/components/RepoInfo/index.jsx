import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./style.css";

export const RepoInfo = ({ name, description, visibility, language, url, stargazers, forks, issues, updated }) => {
    const [showInfo, setShowInfo] = useState(false);

    const show = () => {
        setShowInfo((state) => !state);
    };

    const buttonText = () => {
        if (showInfo) {
            return "Hide Statistics"
        } else {
            return "Show Statistics"
        }
    }

    return (
        <section className="repoDetails">
            <a id="repoURL" href={url} target="_blank">{name}</a>
            <span className="visibility">{visibility}</span>
            <div id="right">
                <button className="statsBtn" onClick={show}>{buttonText()}</button>
            </div>
            <p className="description">{description}</p>
            {showInfo && <>
                <p id="left">{language}</p>
                <p id="right">Last updated: {updated} day(s) ago</p>
                <p id="stats"><Icon icon="akar-icons:star" /> {stargazers} <Icon icon="eos-icons:fork-outlined" /> {forks} <Icon icon="octicon:issue-opened-24" /> {issues}</p>
            </>}
        </section>
    )
}