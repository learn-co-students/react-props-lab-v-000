import React from 'react';
import ReactDOM from 'react-dom';
import Ships from './components/Ships';

const ships = [
  { name: "Nina",
    colors: ['black', 'red'],
    hasRockets: true,
    speed: 'really fast'
  },

  { name: "Pinta",
    colors: ['blue'],
    hasRockets: true,
    speed: 'medium'
  },

  { name: "Santa Maria",
    colors: ['yellow'],
    hasRockets: false,
    speed: 'fast'
  },

  { name: "Betsy the Boat",
    colors: [],
    hasRockets: true,
    speed: 'slow'
  }
]

ReactDOM.render(
  <Ships 
    ships={ships}
  />,
  document.getElementById('global')
);
