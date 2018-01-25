import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship name={"Millennium Falcon"} speed={200 + "mph"} hasRockets={true} />,
  document.getElementById('root')
);
