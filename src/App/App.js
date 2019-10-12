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
      haveCharacters: false, 
      isFormComplete: false
    }
  }

  componentDidMount() {
    getFilms().then(data => this.setState({movies: data, haveMovies: true}))
  }

  goToMovieCharacters = (e) => {
    let id = parseInt(e.target.id)
    let targetMovie = this.state.movies[id-1];
    this.setState({selectedMovie: targetMovie, haveCharacters: false, characters: []})
    getCharacters(id).then(data => this.setState({characters: data, haveCharacters: true}))
  }

  getFormData = (userInfo) => {
    this.setState({userInfo: userInfo, isFormComplete:true})
  }

  render() {
    const{movies, characters, isFormComplete, userInfo, haveCharacters, selectedMovie} = this.state

    return (
      <main className="App">
        <Route exact path='/' render={() => <Form getFormData={this.getFormData} />} />
        {isFormComplete && <Nav user={userInfo} />}
        <Route exact path='/movies' render={() => <Container cards={movies} goToMovieCharacters={this.goToMovieCharacters} />} />
        {haveCharacters && <Route exact path='/movies/:id' render={() => <Container cards={characters} /> } />}
        {!haveCharacters && <Scroll selectedMovie={selectedMovie}/>}
        <Route exact path='/favorites' render={() => <Container movies={movies} />} />
      </main>
  
    )

  }
}

export default App;
