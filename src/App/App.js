import React, { Component } from 'react';
import { getFilms, getCharacters } from '../Util/apiCalls';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App/App.scss';
import Form from '../Form/Form';
import Container from '../Container/Container';
import Nav from '../Nav/Nav';
import Scroll from '../Scroll/Scroll'


class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      movies:[],
      characters: [],
      selectedMovie: {},
      haveMovies: false,
      haveCharacters: true, 
      isFormComplete: false,
      favorites: [],
      error: ''
    }
  }

  componentDidMount() {

    getFilms().then(data => this.setState({movies: data, haveMovies: true}))
    .catch(error => this.setState({error: error}))

    if(localStorage.getItem('favorites')) {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'))
      this.setState({favorites: storedFavorites})
    }

    if(localStorage.getItem('userInfo')) {
      const storedUser = JSON.parse(localStorage.getItem('userInfo'))
      this.setState({ userInfo: storedUser, isFormComplete: true })
    }
  }

  goToMovieCharacters = (e) => {
    let id = parseInt(e.target.id)
    let targetMovie = this.state.movies[id-1];
    this.setState({selectedMovie: targetMovie, haveCharacters: false, characters: []})
    getCharacters(id).then(data => this.setState({characters: data, haveCharacters: true}))
  }

  getFormData = (userInfo) => {
    this.setState({userInfo: userInfo, isFormComplete:true})
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }

  toggleFavorite = (character) => {
    const { favorites } = this.state;
    favorites.map(favorite => favorite.name).includes(character.name) ? this.removeFavorite(character) : this.addFavorite(character);
  }

  addFavorite = (character) => {
    const { favorites } = this.state;
    let newFavorites = [...favorites, character];
    this.setState({favorites: newFavorites });
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  removeFavorite = (character) => {
    const { favorites } = this.state;
    let newFavorites = favorites.filter(favorite => favorite.name !== character.name);
    this.setState({favorites: newFavorites});
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  logOut = () => {
    localStorage.clear()
    this.setState({ isFormComplete: false, userInfo: {} })
  }

  render() {
    const{movies, characters, isFormComplete, userInfo, haveCharacters, selectedMovie, haveMovies, favorites, error} = this.state

    return (
      <main className="App">
        <Route exact path='/' render={() => <Form getFormData={this.getFormData} />} />
        {isFormComplete && <Nav logOut={this.logOut} user={userInfo} />}
        {!haveMovies && <div className='loading-img'></div>}
        {error && <div className="error-div">{error}</div>}
        <Route exact path='/movies' render={() => <Container cards={movies} goToMovieCharacters={this.goToMovieCharacters} />} />
        {haveCharacters && <Route exact path='/movies/:id' render={() => <Container type="characters" cards={characters} toggleFavorite={this.toggleFavorite} favorites={favorites} /> } />}
        <Route exact path='/favorites' render={() => <Container type='favorites' cards={favorites} favorites={favorites} toggleFavorite={this.toggleFavorite} />} />
        {haveMovies && !haveCharacters && <Scroll selectedMovie={selectedMovie} />}
      </main>
  
    )

  }
}

export default App;
