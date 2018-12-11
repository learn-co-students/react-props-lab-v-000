import React from 'react'
import ReactDOM from 'react-dom'

import Spaceship from './components/Spaceship'

ReactDOM.render(
  <Spaceship 
  	name='Millennium Falcon'
  	speed={100}
  	hasRockets='yes'
  	colors={['silver', 'black']}
  />,	
  document.getElementById('global')
)
