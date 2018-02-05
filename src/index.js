import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship name="Millennium Falcon",
  speed="10",
   hasRockets={true},
   colors={['blue', 'green']} />,
  document.getElementById('global')
);
