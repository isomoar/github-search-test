import React, { PropTypes } from 'react';

class InputForm extends React.Component {
  render () {
    const { value, placeholderText, onChange } = this.props;
    return (
      <form className="uk-form">
        <legend>Search for a GitHub repository</legend>
        <div className="uk-grid">
          <div className="InputContainer uk-width-1-1">
            <span className="Placeholder">{placeholderText}</span>
            <div className="RepoOwnerWrapper">
              <span className="RepoOwner">React Community</span>
            </div>
            <input 
              className="Input uk-width-1-1" 
              onChange={onChange}
              type="text" 
              value={value}
            />
          </div>
        </div>
      </form>
    )
  }
}

export default InputForm;