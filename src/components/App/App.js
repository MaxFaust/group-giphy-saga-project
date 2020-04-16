import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import HomePage from '../HomePage/HomePage';

import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Giphy Search!</h1>
        <Router>
          <Route exact path='/' component={HomePage} />
          <Route path='/favorites' component={Favorites} />
        </Router>
      </div>
    );
  }
  
}

export default App;
