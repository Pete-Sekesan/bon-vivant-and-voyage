import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing/landing";
import Navbar from "./components/Nav/navbar";
import Login from "./components/Login/login";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Route path="/" component={Navbar} />
        <Route path="/login" component={Login} />

        <Route path="/" exact component={Landing} />
      </div>
    </Fragment>
  );
}

export default App;
