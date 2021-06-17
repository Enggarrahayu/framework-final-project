import logo from './logo.svg';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './containers/Header';
import userData, { ProductData } from './components/ProductData';
import coba from './components/coba';
import AddProducts from './components/addProducts';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Header/>
          <Switch>
                <Route exact path="/" component={coba} /> 
                <Route path="/productdata" component={ProductData} />   
                <Route path="/addproducts" component={AddProducts} />   
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
