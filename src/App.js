import React, { Component } from 'react';
import Dashboard from './modules/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Food Ordering</h1>
          <p>Tasty Food just clicks away.</p>
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
