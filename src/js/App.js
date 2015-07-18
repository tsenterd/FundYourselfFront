import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

const info = [
  {
    name: 'Google',
    desc: 'just a test',
    image: 'http://dummyimage.com/110',
    price: '$100,000 For 10%'
  },
  {
    name: 'Apple',
    desc: 'hey',
    image: 'http://dummyimage.com/110',
    price: '$10 For 50%'
  },
  {
    name: 'Facebook',
    desc: 'A cool company',
    image: 'http://dummyimage.com/110',
    price: '$50 For 2%'
  }
];


export default class App extends React.Component {
  render = () => {

    const items = info.map((object, i) => {
      const string = 'project/' + object.name;

      return <Listing key={i} name={object.name} href={string} desc={object.desc} image = {object.image} price = {object.price}/>
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

        <div className="title">
          <h2><a href={this.props.href}>{this.props.name}</a></h2>
        </div>
        <div className="price">
         <h2>{this.props.price} </h2>
        </div>
        <div className = "description">
          {this.props.desc}
        </div>

      </div>
    )
  }
}
