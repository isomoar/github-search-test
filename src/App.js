import React, { Component } from 'react';

require('./App.css');

export class App extends Component {
  render() {
    return (
      <div className="App ui-width-1-1 uk-width-medium-1-2 uk-width-large-1-3 uk-container-center">
        <form className="uk-form">
          <legend>Search for a GitHub repository</legend>
          <div className="uk-grid">
              <div className="InputContainer uk-width-1-1">
                <span className="Placeholder">some</span>
                <div className="RepoOwnerWrapper">
                  <span className="RepoOwner">React Community</span>
                </div>
                <input  type="text" className="Input uk-width-1-1" />
              </div>
          </div>
        </form>
        {/*<dl className="RepoInfo uk-description-list-horizontal">
          <dt>Full Name</dt>
          <dd>react-router</dd>
          <dt>Description</dt>
          <dd>Description of repository</dd>
          <dt>Language</dt>
          <dd>JavaScript</dd>
          <dt>Link</dt>
          <dd><a href="#" className="uk-text-primary">http://github.com</a></dd>
        </dl>*/}
        {/*<ul className="List uk-list uk-list-line">
          <li className="List-item">
            <p className="List-item-name uk-text-bold">repository-name</p>
            <p className="List-item-desc uk-text-muted">Repository description text</p>
          </li>
          <li className="List-item">
            <p className="List-item-name uk-text-bold">repository-name</p>
            <p className="List-item-desc uk-text-muted">Repository description text</p>
          </li>
          <li className="List-item">
            <p className="List-item-name uk-text-bold">repository-name</p>
            <p className="List-item-desc uk-text-muted">Repository description text</p>
          </li>
        </ul>*/}
      </div>
    );
  }
}