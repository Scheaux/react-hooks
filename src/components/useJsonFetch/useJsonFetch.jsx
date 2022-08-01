import { useEffect } from 'react';
import { useState } from 'react';

function useJsonFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) return res.json();
        setError(true);
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return [data, error, loading];
}

export default useJsonFetch;
