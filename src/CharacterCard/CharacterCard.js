import React from 'react';

const CharacterCard = ({character, toggleFavorite, favorites}) => {
  const { name, homeworld, population, species, films } = character;

  // if (favorites.some(favorite => favorite.name === name)) {
  //  character.isFavorite = true
  // }

  const allFilms = films.map(film => {
   return <li>{film}</li>
  })

  return (
    <div className="character-card">
      <h2>{name}</h2>
      <h3>Homeworld:{homeworld}</h3>
      <h3>Population:{population}</h3>
      <h3>Species:{species}</h3>
      <ul>Films:{allFilms}</ul>
       <button id={name} onClick={() => {toggleFavorite(character)}}>Favorite ({favorites.length})</button>
    </div>
  )
}

export default CharacterCard;