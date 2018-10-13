import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="starWars-Spaceship">
        <p> name={this.props.name} </p>
        <p> speed={this.props.speed} </p>
        <p> hasRockets={this.props.hasRockets} </p>
        <p> colors={this.props.colors} </p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
    speed={500}
    colors={['green', 'magenta']}
  />,
  document.getElementById('root')
);

export default Spaceship;
