import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { account } from 'lib/appwrite';
import usePromise from 'hooks/usePromise';
import UILoader from 'components/UILoader';

export const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getAccount = async () => {
    try {
      const acc = await account.get();
      setIsLoggedIn(true);
      console.log(isLoggedIn);
      return acc;
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  const [isAccountLoading, isAccountError, callAccountApi] =
    usePromise(getAccount);

  useEffect(() => {
    callAccountApi();
  }, []);

  if (isAccountLoading) return <UILoader />;
  if (isAccountError) return isAccountError;

  return (
    <GlobalStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;

GlobalStateProvider.propTypes = {
  children: PropTypes.any,
};
