import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './layouts/home';
import Login from './layouts/login';
import Nav from './components/nav';

const App = () => (
  <HashRouter>
    <Nav />
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Home} />
    </Switch>
  </HashRouter>
);

export default App;
