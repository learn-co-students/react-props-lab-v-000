import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <div>
    <Spaceship name="Millennium Falcon" />
    <Spaceship name={'teribble ship'.toUpperCase()}/>
  </div>,
  document.getElementById('global')
);
