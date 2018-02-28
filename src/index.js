import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('global')
);

ReactDOM.render(
  <Spaceship
    name = "The Blue Diver"
    speed = "Polite yet Quick"
    colors = {['Turquoise Blue', 'Royal Blue']}
  />,
  document.getElementById('global')
);
