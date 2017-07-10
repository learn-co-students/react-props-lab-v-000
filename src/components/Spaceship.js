import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        {this.props.name}
        {this.props.speed}
        {this.props.hasRockets}
        {this.props.colors.join(', ')}   
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

const colors = ['black', 'red']

ReactDOM.render(
  <Spaceship 
    name = "ship"
    speed = "fast"
    hasRockets = "blah"
    colors = {colors} 
  />,
  document.getElementById('root')
);

export default Spaceship;