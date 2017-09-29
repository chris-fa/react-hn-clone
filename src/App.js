import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './NavBar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <br />
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
