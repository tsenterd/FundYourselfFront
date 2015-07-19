import React from 'react';

export default class App extends React.Component {
  render = () => {
    return (
      <div id ="main">
      <div className = "frontPage"><h1>Welcome to Go Fund Yourself!</h1>
      <h2>The craigslist of equity! </h2>

      </div>
    <a href = "/listings"> <button className = "btn btn-1 btn-1a btn-1ab">Listings</button></a>
        {this.props.children}
      </div>
    )
  }
}
