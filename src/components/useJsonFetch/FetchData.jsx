import React from 'react';
import useJsonFetch from './useJsonFetch';

function FetchData() {
  const [data, error, loading] = useJsonFetch(
    'https://reactusejsonfetch.herokuapp.com/data'
  );

  return (
    <div>
      <h3>Fetch Data</h3>
      <div>Data: {`${JSON.stringify(data)}`}</div>
      <div>Error: {`${error}`}</div>
      <div>Loading: {`${loading}`}</div>
    </div>
  );
}

export default FetchData;
