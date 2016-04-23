import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRepos } from '../../redux/actions/app';
import { List, InputForm } from 'components';

require('./App.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }
  onInputChange(e) {
    e.preventDefault();
    const value = e.target.value;
    this.props.dispatch(getRepos(value));
    this.setState({
      value,
    });
  }
  render() {
    return (
      <div className="App ui-width-1-1 uk-width-medium-1-2 uk-width-large-1-3 uk-container-center">
        <InputForm
          error={this.props.error}
          placeholderText={this.props.placeholderText}
          value={this.state.value}
          onChange={::this.onInputChange}
          />
        <List
          items={this.props.items}
        />
      </div>
    );
  }
}

export default connect(state => state.app)(App);