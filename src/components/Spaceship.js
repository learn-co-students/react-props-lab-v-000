import React from 'react';
import ReactDOM from 'react-dom';



 class Spaceship extends React.Component {
     render() {
     return(
       <div className="spaceShip">
       <h1> {this.props.name} </h1>
        <h2> {this.props.speed} </h2>
        <h2> {this.props.colors} </h2>
       </div>
     );
   }
 }




Spaceship.defaultProps ={
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}


ReactDOM.render(
  <Spaceship name="Millennium Falcon"
            
             

/>,
document.getElementById('global')
);


export default Spaceship;