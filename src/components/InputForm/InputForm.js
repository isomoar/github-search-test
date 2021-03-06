import React, { PropTypes } from 'react';
import classNames from 'classnames';

require('./InputForm.css');

class InputForm extends React.Component {
  onKeyDown(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      this.props.onTabPress();
    }
  }
  render () {
    const { value, placeholderText, onChange, error, repoOwnerName } = this.props;
    const inputClassNames = classNames({
      'Input uk-width-1': true,
      'uk-form-danger': error,
    });
    
    return (
      <form className="uk-form">
        <legend>
          {
            error
            ? 'Oops... please try again in a minute'
            : 'Search for a GitHub repository'
          }
        </legend>
        <div className="uk-grid">
          <div className="InputContainer uk-width-1-1">
            <span className="Placeholder">{placeholderText}</span>
            <div className="RepoOwnerWrapper">
              <span className="RepoOwner">{repoOwnerName}</span>
            </div>
            <input
              onKeyDown={::this.onKeyDown} 
              className={inputClassNames}
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

InputForm.propTypes = {
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholderText: PropTypes.string.isRequired,
  repoOwnerName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onTabPress: PropTypes.func.isRequired,
}

export default InputForm;