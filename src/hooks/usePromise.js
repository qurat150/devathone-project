import { useState } from 'react';

const usePromise = (promiseFunc) => {
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const callPromise = async (...args) => {
    try {
      setIsLoading(true);
      const res = await promiseFunc(...args);
      setIsLoading(false);
      return res;
    } catch (error) {
      console.error(error);
      const errorMsg =
        typeof error.message === 'string'
          ? error.message
          : 'An Error Occured !';
      setError(errorMsg);
      setIsLoading(false);
      return Promise.reject({ error, message: errorMsg });
    }
  };

  return [isloading, error, callPromise];
};

export default usePromise;
