import React, { PropTypes } from 'react';

const RepoInfo = ({ name, description, language = 'Javascript', link }) => {
  return (
    <dl className="RepoInfo uk-description-list-horizontal">
      <dt>Full Name</dt>
      <dd>{name}</dd>
      <dt>Description</dt>
      <dd>{description}/dd>
      <dt>Language</dt>
      <dd>{language}</dd>
      <dt>Link</dt>
      <dd><a href={link} className="uk-text-primary">{link}</a></dd>
    </dl>
  )
}

RepoInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string,
  link: PropTypes.string.isRequired,
}

export default RepoInfo;