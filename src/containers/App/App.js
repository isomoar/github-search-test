import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getRepos, searchInputValueChange, getRepoOwnerName } from 'redux/actions/app';
import { List, InputForm, RepoInfo } from 'components';

require('./App.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: 0,
      showRepoInfo: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(getRepoOwnerName());
  }
  onItemClick(itemIndex = 0) {
    const itemName = this.props.items[itemIndex].name;
    this.props.dispatch(searchInputValueChange(itemName));
    this.setState({
      showRepoInfo: true,
      itemIndex,
    })
  }
  onInputChange(e) {
    e.preventDefault();
    this.setState({
      showRepoInfo: false,
    });
    this.props.dispatch(getRepos(e.target.value));
  }
  render() {
    const { error, placeholderText, items, searchInputValue, repoOwnerName, showNothingFound } = this.props;
    return (
      <div className="App ui-width-1-1 uk-width-medium-1-2 uk-width-large-1-3 uk-container-center">
        <InputForm
          onTabPress={::this.onItemClick}
          error={this.props.error}
          placeholderText={this.props.placeholderText}
          onChange={::this.onInputChange}
          value={searchInputValue}
          repoOwnerName={repoOwnerName}
          />
        {
          this.state.showRepoInfo
          ? <RepoInfo {...items[this.state.itemIndex]}  />
          : null
        }
        {
          !this.state.showRepoInfo && searchInputValue.length > 0 && !error && !showNothingFound
          ? <List
            items={items
              .filter(item => item.name.toLowerCase().includes(searchInputValue.toLowerCase()))
              .slice(0, 3)}
            onItemClick={::this.onItemClick}
          />
          : null
        }
        {
          showNothingFound
          ? <p className="uk-text-muted">Nothing found ¯\_(ツ)_/¯</p>
          : null
        }
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
     name: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired,
   })).isRequired,
  error: PropTypes.bool.isRequired,
  pending: PropTypes.bool.isRequired,
  placeholderText: PropTypes.string.isRequired,
  repoOwnerName: PropTypes.string.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  showNothingFound: PropTypes.bool.isRequired,
}

export default connect(state => state.app)(App);