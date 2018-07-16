import React from 'react';
import ReactDom from 'react-dom'


export default class Spaceship extends React.Component {
  render() {
  return(
    <div className="spaceship-card">
    <p>{this.props.name}</p>
    <p>{this.props.speed}</p>
    <p>{this.props.hasRockets}</p>
    <p>{this.props.colors}</p>
    </div>
  );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};

// ReactDom.render(
//   <Spaceship name = "Hunk of Junk"
//
//   speed= '12'
//   colors="['red','white','blue']"
//   />,
//   document.getElementById('root')
// );
