import React from 'react';


export default class Spaceship extends React.Component {
  // your code here


  static defaultProps = {
   speed: 'slow',
   hasRockets: false,
   colors:['black','red']
 };

  render() {
    const { name, speed, hasRockets, colors } = this.props;
    return (
      <div>
        {name}
        {speed}
        {hasRockets}
        {colors}
      </div>

   )
 }
}
