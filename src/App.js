import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lovely places</h1>
        </header>
        <Travel
          destination="Porto Alegre"
          country="Brasil"
          photo="https://upload.wikimedia.org/wikipedia/commons/8/87/La%C3%A7ador.jpg"
          distance="8.802,71 km from Lisbon"
        />
        <Travel
          destination="Paris"
          country="France"
          photo="https://images.unsplash.com/photo-1501649642741-b90ae46fc747?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
          distance="1.454,54 km from Lisbon"
        />
      </div>
    );
  }
}

export default App;
