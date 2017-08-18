import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return React.createElement('div', {},
      React.createElement('h3', {}, this.props.name),
      React.createElement('p',  {}, 'Speed:    ' + this.props.speed),
      React.createElement('p',  {}, 'Rockets?: ' + (this.props.hasRockets ? 'yes' : 'no')),
      React.createElement('p',  {}, 'Colors:   ' + this.props.colors)
    );
  }
};

Spaceship.defaultProps = {
  colors:     ['black', 'red'],
  hasRockets: false,
  speed:      'slow'
};
