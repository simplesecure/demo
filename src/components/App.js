/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import AboutPage from "./AboutPage";
import FuelSavingsPage from "./containers/FuelSavingsPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

import logo from './../images/white-logo.png';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  signOut() {
    console.log('TODO')
  }

  renderBanner() {
    const signOutButton = (
      <button

          className="on-white"
          onClick={this.signOut}>Sign Out</button>
    )

    return (
      <div className="banner">
        <div className="banner-content">
          <img
            className="banner-logo"
            src={logo}
            alt="Simple ID" />
          {signOutButton}

        {/*<NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
        {' | '}
        <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
        {' | '}
        <NavLink to="/about" activeStyle={activeStyle}>About</NavLink> */}
        </div>
      </div>
    )
  }

  renderWelcome() {
    return (
      <div className="content">
      </div>
    )
  }

  render() {
    // const activeStyle = { color: 'blue' };
    return (
      <div className="page">
        {this.renderBanner()}
        {this.renderWelcome()}

        {/*<Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch> */}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
