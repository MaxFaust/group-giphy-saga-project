import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites'
import InputForm from '../InputForm/InputForm'


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <InputForm/>
      </div>
    );
  }
  
}

export default App;
