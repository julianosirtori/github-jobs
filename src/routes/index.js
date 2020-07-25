import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Job from '../pages/Job';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/job" component={Job} />
    </Switch>
  );
}
