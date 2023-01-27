import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.scss";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/main" render={() => <Main />} />
        <Route path="/" render={() => <Redirect to="/main" />} />
      </Switch>
    </div>
  );
};

export default App;
