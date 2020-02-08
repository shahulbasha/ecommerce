import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/Homepage.components";
import ShopPage from "./pages/shop/ShopPage.component";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
