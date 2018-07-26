import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const millenniumFalconColors = ['grey', 'blue'];

ReactDOM.render(
  <Spaceship name="Millennium Falcon",
  speed="really really fast",
  colors={millenniumFalconColors}/>,
  document.getElementById('global')
);
