import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import ProductScreen from "./components/pages/ProductsScreen";
import SignUp from "./components/pages/SignUp";
import ProductOverviewScreen from "./components/pages/Prod_overview_screen";

import "./App.css";
import LoginPage from "./components/pages/loginPage-reg/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />

          <Route path="/products" component={ProductScreen} />
          <Route path="/product/:id" component={ProductOverviewScreen} />
          <Route path="/sign-up" component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
