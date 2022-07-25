import React from 'react';
import ListItem from './ListItem';
import css from './List.module.css';

function List({ list, id, setId }) {
  return (
    <div className={css.list}>
      {list.map((x) => (
        <ListItem key={x.id} uid={x.id} name={x.name} {...{ id, setId }} />
      ))}
    </div>
  );
}

export default List;
