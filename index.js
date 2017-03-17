const React = require('react');
const ReactDOM = require('react-dom');

const Spaceship = require('./components/Spaceship');
const MovieTest = require('./components/MovieTest');
const LessonMovie = require('./components/LessonMovie');

const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
 
ReactDOM.render(
  <div>
  <Spaceship name="Millenium Falcon!"/>
  <LessonMovie
    title="Jurassic World"
    poster="http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
    genres={jurassicWorldGenres} />
  <MovieTest/>
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
