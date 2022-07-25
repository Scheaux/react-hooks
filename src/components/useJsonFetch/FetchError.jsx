import React from 'react';
import useJsonFetch from './useJsonFetch';

function FetchError() {
  const [data, error, loading] = useJsonFetch(
    'https://reactusejsonfetch.herokuapp.com/error'
  );

  return (
    <div>
      <h3>Fetch Error</h3>
      <div>Data: {`${JSON.stringify(data)}`}</div>
      <div>Error: {`${error}`}</div>
      <div>Loading: {`${loading}`}</div>
    </div>
  );
}

export default FetchError;
