import React, { Component } from 'react';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Day from '../src/pages/Day';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/day" component={Day} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
