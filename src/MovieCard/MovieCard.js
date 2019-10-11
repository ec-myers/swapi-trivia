import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({movie}) => {
  return(
    <div className="Movie-Card">
      <h2>{movie.title}</h2>
      <h3>Episode: {movie.episode}</h3>
      <h3>Release in {movie.releaseYear}</h3>
      <Link to={`/movies/${movie.id}`}>
        <button>Explore Characters</button> 
      </Link>
    </div>
  )
}

export default MovieCard;