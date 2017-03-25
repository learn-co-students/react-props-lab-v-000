const React = require('react');

class MovieTest extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img src={this.props.poster} alt={this.props.title} />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres}</small>
      </div>
    );
  }
}

MovieTest.defaultProps = {
  title: 'Mystery Movie',
  poster: 'http://i.imgur.com/bJw8ndW.png',
  genres: ['Action', 'Adventure', 'Science Fiction', 'Thriller']
};

module.exports =  MovieTest