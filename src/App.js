import React, { Fragment, useEffect } from "react";
import { Header } from "./entities/Header/Header";
import { getBlogs } from "./services/fetchAPI";
import { CreatePost } from "./entities/CreatePost/CreatePost.jsx";
import { HomePage } from "./entities/HomePage/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

function App() {
  useEffect(() => {
    getBlogs();
  });
  return (
    <Fragment>
      <Header />
      <CreatePost />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/about" component={AboutPage} />
        <Route exact path="/authors" component={Authors} />
        <Route path="/blog/:id" component={SingleBlogPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect from="/" to="/not-found" /> */}
      </Switch>
    </Fragment>
  );
}

export default App;
