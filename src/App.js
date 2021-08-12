import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout from './views/Routes';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Layout />
    </Router>
  );
};

export default App;
