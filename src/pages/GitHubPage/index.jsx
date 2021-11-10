import React, { useState } from "react";
import { Form, RepoInfo } from "../../components";

export const GitHubPage = () => {
    const [search, setSearch] = useState("");

    const getInput = (input) => {
        setSearch(input)
    }

    return (
        <Form getInput={getInput} />
    )
}