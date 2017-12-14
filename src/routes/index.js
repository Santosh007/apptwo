import React from 'react';
import {Route,IndexRoute} from 'react-router';
import Template from '../containers/Template';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import Play from '../containers/Play';
import Music from '../containers/Music';

const createRoutes = function(){
  return (
    <Route
    path = '/'
    component = {Template}>
      <IndexRoute component={Home}>
      </IndexRoute>
      <Route path = {'/play'} component={Play}></Route>
      <Route path = {'/music'} component={Music}></Route>
      <Route path = {'/profile'} component={Profile}></Route>
    </Route>
  );
}

const Routes = createRoutes();

export default Routes;
