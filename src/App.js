import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import { Homepage } from "./pages/homepage.component";

const HatsPage = () => {
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
