import React, { Component } from 'react';
import { getFilms } from '../Util/apiCalls';
import '../App/App.scss';
import Form from '../Form/Form';
import Container from '../Container/Container';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies:[]
    }
  }

  componentDidMount() {
    getFilms().then(data => this.setState({movies: data}))
  }

  render() {
    return (
      <>
        <Form />
        <Container movies={this.state.movies}/>
      </>
    )
  }
}

export default App;
