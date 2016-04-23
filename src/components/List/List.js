import React, { PropTypes } from 'react';
import { ListItem } from 'components';

require('./List.css');

const List = ({ items, onItemClick }) => {
  return (
    <ul className="List uk-list uk-list-line">
      {items.map((item, index) => {
        return <ListItem
              key={item.name + item.index}
              item={item}
              itemIndex={index}
              onClick={onItemClick}
             />
      })}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
     name: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
   })).isRequired,
   onItemClick: PropTypes.func.isRequired,
}

export default List;