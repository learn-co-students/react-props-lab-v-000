// Code The Spaceship Component Here
class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h1>Hello, {this.props.speed}</h1>
        <h1>Hello, {this.props.hasRockets}</h1>
      </div>
    );
  }
}

Spaceship.propTypes = {
  name: PropTypes.string,
  speed: "slow",
  hasRockets: true
};

export default Spaceship
