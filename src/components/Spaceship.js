import React from 'react';
import PropTypes from 'prop-types';

class Spaceship extends React.Component {
	render(){ 
		const { name, colors, speed, hasRockets, speedLevels } = this.props;

		return(
			<div>
		        <form>
					<h1>Spaceship Nem: {name}</h1>	
					<h4>Spaceship Colors:</h4>
					<ul>
						{ colors.map((color, index) => <li key={index}>{color}</li>) }
					</ul>
					<label htmlFor="HRCheckbox">Has Rockets</label>
					{ hasRockets ? <input id="HRCheckbox" type="checkbox" checked></input> : <input id="HRCheckbox" type="checkbox"></input> }
                    
					<p>Speed: { speed }</p>	
					<input type="submit"></input>
				</form>	
			</div>
		);
	}
};

Spaceship.propTypes = {
	speedLevels: PropTypes.array,
	name: PropTypes.string,
	speed: PropTypes.string,
	hasRackets: PropTypes.bool,
	colors: PropTypes.array
};


Spaceship.defaultProps = {
	speedLevels: ['slow', 'noraml', 'fast'],
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
};

export default Spaceship;