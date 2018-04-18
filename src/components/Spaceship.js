// Code The Spaceship Component Here
class Spaceship extends React.Component {

  render () {
    return (
      <div>
        this.props.name
        this.props.speed
        this.props.hasRockets
        this.props.colors
      <div>
    )
  }
}

Spaceship.propTypes = {
  name:PropTypes.string,
  speed:PropTypes.number,
  country:PropTypes.bool,
  colors: PropTypes.array
};

Spaceship.getDefaultProps() {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
