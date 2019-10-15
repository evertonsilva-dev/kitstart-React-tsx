import React, { FunctionComponent, useEffect } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import config from "../config";

interface Props extends RouteProps {
  logged?: Boolean;
  title?: String;
  component?: FunctionComponent;
}

export default function RouteWrapper(props: Props) {
  useEffect(() => {
    if (props.title && props.title.trim()) {
      document.title = `${props.title} - ${config.title}`;
    }
  }, [props.title]);

  if (props.logged) return <Redirect to="/" />;
  return <Route {...props} />;
}
