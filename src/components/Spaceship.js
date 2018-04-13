import React from 'react'

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.name}
        </h1>
        <div>
          Speed: {this.props.speed}
        </div>
        <div>
          Has rockets? {this.props.hasRockets}
        </div>
        <div>
          Colors: {this.props.colors.join(', ')}
        </div>
      </div>
    )
  }

  static get defaultProps() {
    return {
      speed: 'slow',
      hasRockets: false,
      colors: ['black', 'red']
    }
  }
}

export default Spaceship