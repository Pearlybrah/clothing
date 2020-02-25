import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "../src/pages/homepage/Homepage.comnponent";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "../src/components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
