import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Footer } from "./layout";
import { GitHubPage } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <GitHubPage />
        </Route>
        <Route>
          <h3>Path does not exist</h3>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;