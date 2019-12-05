import * as React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { Router } from 'react-router-dom';

import History from 'src/app/app/history';
import Store from 'src/app/app/store';
import Theme from 'src/app/app/theme';

import Routes from 'src/app/app/routes';

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <MuiThemeProvider theme={Theme}>
          <CssBaseline />
          <Router history={History}>
            <Routes />
          </Router>
        </MuiThemeProvider>
      </Provider>
    </>
  );
};

export default App;
