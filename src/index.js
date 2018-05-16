import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
    speed={100000}
  />,
  document.getElementById('global')
);
