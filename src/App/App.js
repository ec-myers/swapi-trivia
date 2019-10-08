import React, { Component } from 'react';
import { getFilms } from '../Util/apiCalls';
import '../App/App.scss';
import Form from '../Form/Form';

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
    return(
      <Form />
    )
  }
}

export default App;
