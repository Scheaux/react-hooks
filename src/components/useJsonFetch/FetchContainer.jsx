import React from 'react';
import FetchData from './FetchData';
import FetchError from './FetchError';
import FetchLoading from './FetchLoading';

function FetchContainer() {
  return (
    <div className='wrap'>
      <FetchData />
      <FetchError />
      <FetchLoading />
    </div>
  );
}

export default FetchContainer;
