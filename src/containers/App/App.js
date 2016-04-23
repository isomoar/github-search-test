import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRepos } from '../../redux/actions/app';
import InputForm from 'components/InputForm/InputForm';

require('./App.css');

class App extends Component {
  onInputChange(e) {
    e.preventDefault();
    this.props.dispatch(getRepos(e.target.value));
  }
  render() {
    return (
      <div className="App ui-width-1-1 uk-width-medium-1-2 uk-width-large-1-3 uk-container-center">
        <InputForm
          placeholderText={this.props.placeholderText}
          value={this.props.value}
          onChange={::this.onInputChange}
          />
      </div>
    );
  }
}

export default connect(state => state.app)(App);