import logo from "./logo.svg";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import Products from "./components/Products";
import Footer from "./containers/Footer";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
