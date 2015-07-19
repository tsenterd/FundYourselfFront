import React from 'react';

const info = [
  {
    name: 'Google',
    desc: 'just a test',
    image: 'http://dummyimage.com/110',
    price: '$100,000 For 10%',
    pos_id: 0
  },
  {
    name: 'Apple',
    desc: 'hey',
    image: 'http://dummyimage.com/110',
    price: '$10 For 50%',
    pos_id: 1
  },
  {
    name: 'Facebook',
    desc: 'A cool company',
    image: 'http://dummyimage.com/110',
    price: '$50 For 2%',
    pos_id: 2
  }
];

export default class Listings extends React.Component {
  render = () => {

    const items = info.map((object, i) => {
      const string = 'project/' + object.name;

      return <Listing key={i} name={object.name} href={string} desc={object.desc} image = {object.image} price = {object.price} pos_id = {object.pos_id}/>
    })

//    var layout = getOrGenerateLayout();
    return (
      <div id="main">
        {items}
      </div>
    )

    // return (
    //   <div id='main'>
    //     <div>
    //       {items}
    //     </div>
    //   </div>
    // )
  }
}

class Listing extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired
  // }

  render = () => {

    var pos = this.props.pos_id;

    return (
      <div key={pos} _grid={{x: pos, y: 0, w: 1, h: 2}} className="listing">
        <img src={this.props.image}/>

        <div className="title">
          <h2><a className = "link" href={this.props.href}>{this.props.name}</a></h2>
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
