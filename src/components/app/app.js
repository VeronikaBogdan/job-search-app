import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { MantineProvider } from '@mantine/core';

import { getAuth } from '@/store/reducers/auth';

import store from '@/store/configureStore';

import { theme } from '@/styles/theme';

export const AppComponent = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Component {...pageProps} token={authData} />
      </MantineProvider>
    </Provider>
  );
};
