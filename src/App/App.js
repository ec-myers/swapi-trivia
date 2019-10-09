import React, { Component } from 'react';
import { getFilms } from '../Util/apiCalls';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
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
      isFormComplete: false
    }
  }

  componentDidMount() {
    getFilms().then(data => this.setState({movies: data}))
  }

  getFormData = (userInfo) => {
    this.setState({userInfo: userInfo, isFormComplete:true})
  }

  render() {
    const{movies, isFormComplete, userInfo} = this.state
    return (
      <>
        {!isFormComplete && <Form getFormData={this.getFormData}/>}
        {isFormComplete && <Nav user={userInfo}/>}
        {isFormComplete && <Container movies={movies}/>}
      </>
    )
  }
}

export default App;
