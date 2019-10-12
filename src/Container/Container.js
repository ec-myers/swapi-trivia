import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import CharacterCard from '../CharacterCard/CharacterCard';
import './Container.scss';

const Container = ({cards, goToMovieCharacters, toggleFavorite, favorites, type}) => {
  console.log('type',type)
  if (type === 'favorites' && favorites.length === 0) {
    return <h3>Add some favorites!</h3>
  }
  let firstTenCards = cards.slice(0, 10)
  let allCards = firstTenCards.map(card => {
    if (card.title) {
      return <MovieCard key={card.episode} movie={card} goToMovieCharacters={goToMovieCharacters}/>
    }
    return <CharacterCard key={card.name} character={card} toggleFavorite={toggleFavorite} favorites={favorites} />
  })

  return(<section className='Container'>
    {allCards}
  </section>)
}

export default Container;