import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({character, toggleFavorite, favorites}) => {
  const { name, homeworld, population, species, films } = character;
  let isFavorite = favorites.map(char => char.name).includes(name) ? 'favorite' : '' ;
  let btnMessage = isFavorite ? 'Remove Favorite' : 'Add Favorite'
  const allFilms = films.map(film => {
  return <li>{film}</li>
  })

  return (
    <div className={`Character-Card ${isFavorite}`} >
      <h2>{name}</h2>
      <h3>Homeworld: {homeworld}</h3>
      <h3>Population: {population}</h3>
      <h3>Species: {species}</h3>
      <ul>Films: {allFilms}</ul>
      <div className='div-favorite'>
        <button id={name} onClick={() => {toggleFavorite(character)}}>{btnMessage} ({favorites.length})</button>
      </div>
    </div>
  )
}

export default CharacterCard;