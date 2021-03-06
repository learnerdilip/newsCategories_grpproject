import React, { Component } from "react";
import "./App.css";
import SelectCategory from "./components/SelectCategory";
import NewsPage from "./components/NewsPage";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={SelectCategory} />
        <Route exact path="/:category" component={NewsPage} />
      </div>
    );
  }
}

// HELLO DILIP
export default App;
