import React from 'react';

const CharacterCard = ({character}) => {
  const { name, homeworld, population, species, films} = character;

  const allFilms = films.map(film => {
   return <p>{film}</p>
  })
  return (
    <div className="character-card">
      <h2>{name}</h2>
      <h3>{homeworld}</h3>
      <h3>{population}</h3>
      <h3>{species}</h3>
      <div>{allFilms}</div>
       <button>Favorite</button>
    </div>
  )
}

export default CharacterCard;