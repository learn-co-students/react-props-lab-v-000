import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship 
    name="Millennium Falcon"
    speed="1000"
    hasRockets={true}
    colors={["black", "gold", "red"]}
  />,
  document.getElementById('global')
);
