import React from "react";
import { Redirect, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Route from "./Route";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} title="Home" />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
