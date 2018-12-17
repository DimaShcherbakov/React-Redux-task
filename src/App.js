import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.jsx"
import Task1 from "./components/Task1.js"
import Task2 from "./components/Task2.js"

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Task1/>
        <Task2/>
      </div>
    );
  }
}

export default App;
