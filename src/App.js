import React, { Fragment } from "react";
import { Header } from "./entities/Header/Header";
import { CreatePost } from "./entities/CreatePost/CreatePost.jsx";
import { HomePage } from "./entities/HomePage/HomePage";
import { Authors } from "./entities/Authors/Authors";
import { Switch, Route, Redirect } from "react-router-dom";
import { BlogPage } from "./entities/BlogPage/BlogPage";
import { AuthorPage } from "./entities/AuthorPage/AuthorPage";
import { About } from "./entities/About/About";
import { NotFoundPage } from "./entities/NotFoundPage/NotFoundPage";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/post/new" component={CreatePost} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/author/:id" component={AuthorPage} />
        <Route path="/blog/:id" component={BlogPage} />
        <Route path="/about" component={About} /> 
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect from="/" to="/not-found" />
      </Switch>
    </Fragment>
  );
}

export default App;
