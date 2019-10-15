import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './MovieCard.scss';

const MovieCard = ({movie, goToMovieCharacters}) => {
  return(
    <div className="Movie-Card">
      <h2>{movie.title}</h2>
      <h3>Episode: {movie.episode}</h3>
      <h3>Released in {movie.releaseYear}</h3>
      <Link onClick={goToMovieCharacters}  to={`/movies/${movie.id}`}>
          <button id={movie.id}>Explore Characters</button> 
      </Link>
    </div>
  )
}

export default MovieCard; 

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  goToMovieCharacters: PropTypes.func.isRequired

}

