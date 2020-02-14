import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/Homepage.components";
import ShopPage from "./pages/shop/ShopPage.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/signinsignup/signin-signup.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
