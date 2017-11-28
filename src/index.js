import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const spaceshipColors = ['gray', 'red']

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
    speed="10"
    // hasRockets="true"
    colors={spaceshipColors}
  />,
  document.getElementById('global')
);
