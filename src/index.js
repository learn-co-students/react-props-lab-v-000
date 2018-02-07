import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship name="Millennium Falcon" colors={['green', 'blue', 'black']} speed={2000} hasRockets={true} />,
  document.getElementById('root')
);
