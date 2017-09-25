import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.speed}
        {this.props.hasRockets}
        {this.props.colors}
      </div>
    )
  }
};

Spaceship.defaultProps = {
  name: '',
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

Spaceship.PropTypes = {
  name: PropTypes.string,
  speed: PropTypes.number,
  hasRockets: PropTypes.bool,
  colors: PropTypes.array
}

export default Spaceship;
