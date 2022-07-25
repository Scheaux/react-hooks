import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Details from './Details';
import List from './List';
import css from './List.module.css';

function ListAndDetails() {
  const [list, setList] = useState([]);
  const [details, setDetails] = useState(null);
  const [id, setId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setList(json);
      });
  }, []);

  useEffect(() => {
    if (id === null) return;
    setIsLoading(true);
    const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setDetails(json);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className='wrap'>
      <div className={css.wrapper}>
        <List list={list} {...{ id, setId }} />
        <Details isLoading={isLoading} details={details} />
      </div>
    </div>
  );
}

export default ListAndDetails;
