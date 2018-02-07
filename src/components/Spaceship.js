import React from 'react';
import PropTypes from 'prop-types';

export default class Spaceship extends React.Component {
  render() {
    let colorString;
    if(this.props.colors.length === 1) {
        colorString = this.props.colors.toString() + '.'
      } else if (this.props.colors.length === 2) {
        colorString = this.props.colors.join(' and ')
      } else {
        colorString = this.props.colors.slice(0,-1).join(', ') + ", and " + this.props.colors.slice(-1) + "."
      }
    return(
      <div>
        <h1><u>{this.props.name}</u></h1>
        <p>This thing is {colorString}</p>
        <p>It goes {typeof this.props.speed !== 'number' ?
            "slow" :
            `${this.props.speed} m.p.h.`
        }</p>
        <p>{this.props.hasRockets ?
          "AND you better believe this thing has rockets to boo(s)t!" :
          null
        }</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ["black", "red"]
}

Spaceship.propTypes = {
  name: PropTypes.string.isRequired,
  hasRockets: PropTypes.bool,
  colors: PropTypes.arrayOf(PropTypes.string)
}
