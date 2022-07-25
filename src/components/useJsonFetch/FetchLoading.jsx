import React from 'react';
import useJsonFetch from './useJsonFetch';

function FetchLoading() {
  const [data, error, loading] = useJsonFetch(
    'https://reactusejsonfetch.herokuapp.com/loading'
  );

  return (
    <div>
      <h3>Fetch Loading</h3>
      <div>Data: {`${JSON.stringify(data)}`}</div>
      <div>Error: {`${error}`}</div>
      <div>Loading: {`${loading}`}</div>
    </div>
  );
}

export default FetchLoading;
