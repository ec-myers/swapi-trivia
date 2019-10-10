import React, { Component } from 'react';
import { getFilms, getCharacters } from '../Util/apiCalls';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App/App.scss';
import Form from '../Form/Form';
import Container from '../Container/Container';
import Nav from '../Nav/Nav';


class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      movies:[],
      characters: [],
      isFormComplete: false
    }
  }

  componentDidMount() {
    getFilms().then(data => this.setState({movies: data}))
    getCharacters(2).then(data => this.setState({characters: data}))
  }

  getFormData = (userInfo) => {
    this.setState({userInfo: userInfo, isFormComplete:true})
  }

  render() {
    const{movies, characters, isFormComplete, userInfo} = this.state
    return (
      <main className="App">
        {/* <Nav user={userInfo} /> */}
        <Route exact path='/' component={() => <Form getFormData={this.getFormData} />} />
        {isFormComplete && <Nav user={userInfo} />}
        <Route exact path='/movies' component={() => <Container cards={movies} />} />
        <Route exact path='/movies/:id' component={() => <Container cards={characters} /> } />
        <Route exact path='/favorites' component={() => <Container movies={movies} />} />
      </main>
  
    )
  }
}

export default App;
