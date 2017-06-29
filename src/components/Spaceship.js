// Code The Spaceship Component Here
import React from 'react';



class Spaceship extends React.Component {
  render(){
    return(
        <div>
          <h1>{this.props.name}</h1>
          <h2>{this.props.speed} </h2>
          <h3>{this.props.hasRockets}</h3>
          <h3>{this.props.colors}</h3>
        </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}



export default Spaceship;
//
//
// class MovieCard extends React.Component {
//   render() {
//     return (
//       <div className="movie-card">
//         <img
//           src={this.props.poster}
//           alt={this.props.title}
//         />
//         <h2>{this.props.title}</h2>
//         <small>Genres: {this.props.genres.join(', ')}</small>
//       </div>
//     );
//   }
// }
