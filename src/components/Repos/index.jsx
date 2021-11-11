import React, { useEffect, useState } from "react";
import { RepoInfo } from "..";
import axios from "axios";
import "./style.css";

export const Repos = ({ username }) => {
    const [displayRepos, setDisplayRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const data = await axios.get(`https://api.github.com/users/${username}/repos`);
                setDisplayRepos(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchRepos();
    }, [username]);

    const currentDate = new Date();

    const renderRepos = () => displayRepos.map((repo, idx) => <RepoInfo key={idx} name={repo.name} description={repo.description} visibility={repo.visibility} language={repo.language} url={repo.clone_url} stargazers={repo.stargazers_count} forks={repo.forks} issues={repo.open_issues} updated={parseInt((currentDate - new Date(repo.updated_at)) / (1000 * 60 * 60 * 24))} />);

    return (
        <div className="repos">
            {renderRepos()}
        </div>
    )
}
