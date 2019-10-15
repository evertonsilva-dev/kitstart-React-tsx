import React from "react";
import { Router } from "react-router-dom";
import Routes from "./router";
import history from "./router/history";
import GlobalStyle from "./styles";
const App: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
