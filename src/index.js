import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const milleniumColors = ['silver', 'gray']
ReactDOM.render(
  <div>
    <Spaceship
      name="Millennium Falcon"
      speed="used to be fast"
      hasRockets= "something"
      colors={milleniumColors}
    />
    <Spaceship
      name="Bismark"
      colors={['black','white']}
    />
  </div>,

  document.getElementById('global')
);
