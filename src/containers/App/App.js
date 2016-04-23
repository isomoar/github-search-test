import React, { Component } from 'react';
import InputForm from 'components/InputForm/InputForm';

require('./App.css');

class App extends Component {
  render() {
    return (
      <div className="App ui-width-1-1 uk-width-medium-1-2 uk-width-large-1-3 uk-container-center">
        <InputForm 
          placeholderText="S"
          value="value"
          />
      </div>
    );
  }
}

export default App;