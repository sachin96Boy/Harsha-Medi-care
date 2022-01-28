import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import ProductScreen from "./components/pages/ProductsScreen";
import ProductOverviewScreen from "./components/pages/Prod_overview_screen";
import LoginPage from "./components/pages/loginPage-reg/LoginPage";
import CartScreen from "./components/pages/CartScreen";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={ProductScreen} />
          <Route path="/product/:id" component={ProductOverviewScreen} />
          <Route path="/sign-up" component={LoginPage} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
