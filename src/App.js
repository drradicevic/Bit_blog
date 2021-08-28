import React, { Fragment, useEffect } from "react";
import { Header } from "./entities/Header/Header";
import { getUsers } from "./services/fetchAPI";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

function App() {
  useEffect(() => {
    getUsers();
  });
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/authors" component={Authors} />
        {/* <Route path="/blog/:id" component={SingleBlogPage} /> */}
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect from="/" to="/not-found" />
      </Switch>
    </Fragment>
  );
}

export default App;
