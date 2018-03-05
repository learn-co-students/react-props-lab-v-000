import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship
  	name={Spaceship.name}
  	speed={Spaceship.speed}
  	rockets={Spaceship.rockets}
  	colors={Spaceship.colors} 
  />,
  document.getElementById('global')
);
