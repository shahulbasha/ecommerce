import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/Homepage.components";
import { Route } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
