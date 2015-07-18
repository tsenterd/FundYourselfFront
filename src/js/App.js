import React from 'react';

export default class App extends React.Component {
  render = () => {
    return (
      <div>
        <h1>Hello There</h1>
        <StyledComponent/>
      </div>
    )
  }
}

class StyledComponent extends React.Component {
  render = () => {
    const object = {
      backgroundColor: 'red',
      width: 50,
      height: 50
    }

    return (
      <div style={object}>
      </div>
    )
  }
}
