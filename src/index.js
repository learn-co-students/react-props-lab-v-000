import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const milleniumColors = ['silver, ', 'gray']
ReactDOM.render(
  <table>
    <tr>
      <th>Ship Name</th>
      <th>Speed </th>
      <th>Rockets? </th>
      <th>Colors </th>
    </tr>
    <Spaceship
      name="Milenium Falcon"
      speed="fast"
      hasRockets="true"
      colors={['silver','gray']}/>
  </table>,

  document.getElementById('global')
);
