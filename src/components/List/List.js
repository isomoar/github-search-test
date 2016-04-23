import React, { PropTypes } from 'react';
import { ListItem } from 'components';

const List = ({ items }) => {
  return (
    <ul className="List uk-list uk-list-line">
      {items.map((item, index) => {
        return <ListItem
              key={item.name + item.index}
              item={item}
              onClick={e => e.preventDefault()}
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
}

export default List;