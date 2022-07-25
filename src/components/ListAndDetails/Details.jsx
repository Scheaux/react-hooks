import React from 'react';
import css from './List.module.css';

function Details(props) {
  const { details, isLoading } = props;

  if (details === null) return;

  if (isLoading === true) return <div>Loading...</div>;

  return (
    <div className={css.detailsWrapper}>
      <img src={details.avatar} alt='avatar' />
      <div className={css.details}>
        <h3>{details.name}</h3>
        <span>City: {details.details.city}</span>
        <span>Company: {details.details.company}</span>
        <span>Position: {details.details.position}</span>
      </div>
    </div>
  );
}

export default Details;
