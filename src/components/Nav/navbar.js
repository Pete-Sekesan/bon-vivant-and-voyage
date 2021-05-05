import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
//import TokenService from "../../services/token-service";
import "./navbar.css";
//import Context from "../../Context";

class Navbar extends Component {
  //clears bearer token on logout

  render() {
    return (
      <nav className="navbar">
        <div className="nav__logo">
          <Link to="/">Home</Link>
        </div>

        <div>
          <ul>
            <Fragment>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Link to="/add">Add A Trip</Link>
              </li>

              <li>
                <Link to="/" onClick={() => this.logout()}>
                  Logout
                </Link>
              </li>
            </Fragment>

            <Fragment>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </Fragment>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
