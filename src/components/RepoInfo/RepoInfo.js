import React, { PropTypes } from 'react';

const RepoInfo = ({ name, description, language, url }) => {
  return (
    <dl className="RepoInfo uk-description-list-horizontal">
      <dt>Full Name</dt>
      <dd>{name}</dd>
      <dt>Description</dt>
      <dd>{description}</dd>
      <dt>Language</dt>
      <dd>{language}</dd>
      <dt>Link</dt>
      <dd><a href={url} className="uk-text-primary" target="_blank">{url}</a></dd>
    </dl>
  )
}

RepoInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string,
  url: PropTypes.string.isRequired,
}

export default RepoInfo;