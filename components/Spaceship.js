import React from 'react'

export default class Spaceship extends React.Component {
    render() {
        return(
            <div>
                {this.props.name}
                Speed: {this.props.speed}
                Has rockets: {this.props.hasRockets ? 'Yes' : 'No'}
                Colors: {this.props.colors.join(', ')}
            </div>
        )
    }   
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};