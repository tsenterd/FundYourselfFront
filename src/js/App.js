import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

export default class App extends React.Component {
  render = () => {
    return (
      <div>
      <StyledComponent/>
      </div>
    )
  }
}

class StyledComponent extends React.Component {
  render = () => {
    return (
      <div className = 'mystyle' >
      </div>
    )
  }
}
