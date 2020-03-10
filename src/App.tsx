import React from "react";
import { Router } from "react-router-dom";
import { withTheme } from "styled-components";
import Routes from "./router";
import history from "./router/history";
import GlobalStyle from "./styles";

interface Props {
  theme: {
    mode: String;
  };
}
const App = (props: Props) => {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  );
};

export default withTheme(App);
