import React, { PropTypes } from 'react';

const ListItem = ({ itemIndex, item, onClick }) => {
  return (
    <li className="List-item" onClick={onClick.bind(null, itemIndex)}>
      <p className="List-item-name uk-text-bold">{item.name}</p>
      <p className="List-item-desc uk-text-muted">{item.description}</p>
    </li>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
}

export default ListItem;