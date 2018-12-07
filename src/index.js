import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Spaceship from './components/Spaceship'

Spaceship.propTypes = {
	name: PropTypes.string,
	hasRockets: PropTypes.bool,
	colors: PropTypes.arrayOf(PropTypes.string)
}

ReactDOM.render(
  <Spaceship 
  	name='Millennium Falcon'
  	speed={100}
  	hasRockets='true'
  	colors={['silver', 'black']}
  />,	
  document.getElementById('global')
)
