import React, { PropTypes } from 'react';

const ListItem = ({ name, description, onClick }) => {
  return (
    <li className="List-item" onClick={onClick}>
      <p className="List-item-name uk-text-bold">{name}</p>
      <p className="List-item-desc uk-text-muted">{description}</p>
    </li>
  )
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ListItem;