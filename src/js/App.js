import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

const info = [
  {
    name: 'Google',
    desc: 'just a test',
    image: 'https://www.google.ca/images/google_favicon_128.png'
  },
  {
    name: 'Apple',
    desc: 'hey',
    image: 'http://www.milident.com/wp-content/uploads/2012/10/icon_apple.jpg'
  },
  {
    name: 'Facebook',
    desc: 'A cool company',
    image: 'http://analyticphilosophy.eu/wp-content/plugins/social-media-feather/synved-social/image/social/regular/96x96/facebook.png?b694a8'
  }
];


export default class App extends React.Component {
  render = () => {

    const items = info.map((object, i) => {
      const string = 'project/' + object.name;

      return <Listing key={i} name={object.name} href={string} desc={object.desc} image = {object.image}/>
    })

    return (
      <div>
        {items}
      </div>
    )
  }
}

class Listing extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired
  // }
  render = () => {
    return (
      <div className="listing">
        <img src={this.props.image}/>

        <div className="content">
          <a href={this.props.href}>{this.props.name}</a> <p>{this.props.desc}</p>
        </div>
      </div>
    )
  }
}
