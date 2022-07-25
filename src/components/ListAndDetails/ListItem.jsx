import React from 'react';
import css from './List.module.css';

function ListItem({ name, uid, id, setId }) {
  function handleClick() {
    setId(uid);
  }

  const klass = id === uid ? `${css.item} ${css.selected}` : css.item;

  return (
    <div className={klass} onClick={handleClick}>
      <span>{name}</span>
    </div>
  );
}

export default ListItem;
