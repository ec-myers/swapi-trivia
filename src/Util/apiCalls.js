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
  }).map(movie => {
    return {
      title: movie.title,
      episode: movie.episode_id,
      releaseYear: movie.release_date.slice(0, 4)
    }
  })
}