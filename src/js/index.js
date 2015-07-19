import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import App from './App';
import Project from './Project';
import Listings from './Listings';
//import 'src/css/styles.css';

const routes = (
  <Router history={history}>
    <Route name="app" path="/" component={App}>
    </Route>
      <Route name="project" path="/project/:projectid" component={Project}>
      </Route>
      <Route name="listings" path="/listings" component={Listings}>
    </Route>
  </Router>
)

React.render(
  routes,
  document.getElementById('app')
);
