import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './homePage';
import WorkHistory from './workHistory';
import Education from './education';

export default function () {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/workHistory" component={WorkHistory} />
            <Route exact path="/education" component={Education} />
        </Switch>
    </div>
  );
}