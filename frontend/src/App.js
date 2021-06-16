import logo from "./logo.svg";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import Products from "./components/Products";
import Footer from "./containers/Footer";
import Cart from "./components/Cart";
import Login from "./components/Login";
import ProtectedRoute from "./components/PrivateRoute";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <ProtectedRoute
          exact
          path="/cart"
          component={Cart}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}
export default connect(mapStateToProps)(App);
