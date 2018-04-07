import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship
  name="Millennium Falcon"
  speed="10,000 mph"
  />,
  document.getElementById('global')
);
