import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movie, goToMovieCharacters}) => {
  return(
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <h3>{movie.episode}</h3>
      <h3>{movie.releaseYear}</h3>
      <Link onClick={goToMovieCharacters}  to={`/movies/${movie.id}`}>
        <button id={movie.id}>Explore Characters</button> 
      </Link>
    </div>
  )
}

export default MovieCard;