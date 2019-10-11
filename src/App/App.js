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
      haveCharacters: false, 
      isFormComplete: false
    }
  }

  componentDidMount() {
    getFilms().then(data => this.setState({movies: data}))
    // getCharacters(2).then(data => this.setState({characters: data}))
  }

  getFormData = (userInfo) => {
    this.setState({userInfo: userInfo, isFormComplete:true})
  }

  render() {
    const{movies, characters, isFormComplete, userInfo,} = this.state
    return (
      <main className="App">
        {/* <Nav user={userInfo} /> */}
        <Route exact path='/' render={() => <Form getFormData={this.getFormData} />} />
        {isFormComplete && <Nav user={userInfo} />}
        {movies.length > 0 && characters.length === 0 && <Scroll movie={movies[0]}/>}
        <Route exact path='/movies' render={() => <Container cards={movies} />} />
        <Route exact path='/movies/:id' render={() => <Container cards={characters} /> } />
        <Route exact path='/favorites' render={() => <Container movies={movies} />} />
      </main>
  
    )

  }
}

export default App;
