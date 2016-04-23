import React, { PropTypes } from 'react';
import { ListItem } from 'components';

const List = () => {
  return (
    <ul className="List uk-list uk-list-line">
      <ListItem
        name="Repo name"
        description="Repo description"
        onClick={e => e.preventDefault()}
       />
    </ul>
  )
}

export default List;