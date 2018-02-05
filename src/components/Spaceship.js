// Code The Spaceship Component Here
import React from 'react';
 import ReactDOM from 'react-dom';

 export default class Spaceship extends React.Component {
   render(){
     return (
       <div>
         <title>{this.props.name}</title>
         {this.props.speed}
         {this.props.colors}
       </div>
     )
   }
 }
 Spaceship.defaultProps = {
   speed: 'slow',
   hasRockets: false,
   colors: ['black', 'red']
 }
