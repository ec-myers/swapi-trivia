import React from 'react';

const MovieCard = ({movie}) => {
  return(
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <h3>{movie.episode}</h3>
      <h3>{movie.releaseYear}</h3>
      <button>Explore Characters</button> 
    </div>
  )
}

export default MovieCard;