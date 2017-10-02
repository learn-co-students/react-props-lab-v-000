import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship name="Millennium Falcon" speed="lightspeed" hasRockets={true} colors={["silver", "white"]}/>,
  document.getElementById('root')
);
