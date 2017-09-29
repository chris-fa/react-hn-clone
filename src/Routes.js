import React from 'react';
import { Switch, Route } from 'react-router';

import NewsPage from './views/NewsPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ NewsPage } />
  </Switch>
);

export default Routes;
