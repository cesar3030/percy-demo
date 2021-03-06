import React from "react";
import logo from "./logo.svg";
import Header from "./Header";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React again and again???
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
