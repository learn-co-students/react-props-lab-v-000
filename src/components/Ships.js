import React from 'react';
import Spaceship from './Spaceship';

class Ships extends React.Component {
	render() {

		const renderedShips = this.props.ships.map((ship, index) => {
			return (
				<Spaceship
					name={ship.name}
					speed={ship.speed}
					hasRockets={ship.hasRockets}
					colors={ship.colors}
					key={index} />
			)
		})

		return (
			<div>
				{renderedShips}
			</div>
		);
	};
}

export default Ships;
