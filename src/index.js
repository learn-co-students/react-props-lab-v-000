import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const millenniumColors = ['blue', 'silver', 'black']

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
    speed="Crazy Fast"
    colors={millenniumColors}
    />,
  document.getElementById('global')
);
