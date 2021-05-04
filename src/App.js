import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing/landing";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Route path="/" exact component={Landing} />
      </div>
    </Fragment>
  );
}

export default App;
