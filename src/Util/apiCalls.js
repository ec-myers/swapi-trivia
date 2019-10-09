export const getFilms = () => {
  return fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(data => sortFilmsByReleaseDate(data))
    .catch(error => console.log(error));
}

const sortFilmsByReleaseDate = (data) => {
  return data.results.sort((a, b) => {
    let yearA = parseInt(a.release_date.slice(0, 4));
    let yearB = parseInt(b.release_date.slice(0, 4));
    return yearA - yearB
  }).map((movie,i) => {
    return {
      title: movie.title,
      id: i + 1,
      episode: movie.episode_id,
      releaseYear: movie.release_date.slice(0, 4)
    }
  })
}

export const getCharacters = (id) => {
  let url = `https://swapi.co/api/films/${id}`
  return fetch(url).then(res => res.json())
  .then(data => data.characters)
  .then(data => cleanCharacterData(data))
  .then(chars => getSpeciesDataForCharacter(chars))
  .then(chars => getHomeWorldDataForCharacter(chars))

}

const cleanCharacterData = (characterUrls) => {
  let charactersData = characterUrls.map(charUrl => {
    return fetch(charUrl).then(res => res.json()).then(data => {
      return {
        name:data.name,
        homeworld: data.homeworld,
        species: data.species,
        films: data.films,
      }
    })
  })
  console.log(charactersData)
  return Promise.all(charactersData)
}

const getSpeciesDataForCharacter = (chars) => {
  let speciesData = chars.map( char => {
    return fetch(char.species).then(res => res.json()).then(species => {
      return {
        ...char,
        species: species.name
        }
      })
    }
  )
  return Promise.all(speciesData)
}

const getHomeWorldDataForCharacter = (chars) => {
  let homeworldData = chars.map(char => {
    return fetch(char.homeworld).then(res => res.json()).then(homeworld => {
      return {
        ...char,
        homeworld: homeworld.name,
        population: homeworld.population
      }
    })
  })
  return Promise.all(homeworldData)
}

