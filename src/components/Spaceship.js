import React from 'react';

export default class Spaceship extends React.Component {
    render () {
        return (
            <div className="spaceship">
                <h2>Name: {this.props.name}</h2>
                <p>Speed: {this.props.speed}</p>
                <p>Does it Have Rockets?: {this.props.hasRockets ? "Yes" : "No"}</p>
                <p>Colors:</p>
                <ul> 
                    {(this.props.colors).map((color, index) => <li key={index}>{color}</li>)}
                </ul>
            </div>
        )
    }
};

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
};

// Spaceship.propTypes = {
//     name: PropTypes.string,
//     speed: PropTypes.number,
//     hasRockets: PropTypes.boolean,
//     colors: PropTypes.string
// };
