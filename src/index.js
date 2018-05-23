import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const mfColors = ['grey', 'darker drey']
ReactDOM.render(
  <Spaceship speed="Lightspeed" colors={mfColors} hasRockets={true} name="Millennium Falcon" />,
  document.getElementById('global')
);
