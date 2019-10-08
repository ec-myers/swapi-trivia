import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const Container = ({movies}) => {
  let allMovies = movies.map(movie => {
    return <MovieCard key={movie.episode} movie={movie}/>
  })
  return(<section>
    {allMovies}
  </section>)
}

export default Container;