import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Form.scss';

class Form extends Component {
  constructor(getFormData) {
    super(getFormData);
    this.state = {
      name: "",
      quote: "",
      rank:"Padawan",
      nameErr: false,
      quoteErr: false,
      isComplete: false
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.name) {
      this.setState({nameErr: true})
    } else { this.setState({ nameErr: false }) }

    if (!this.state.quote) {
      this.setState({quoteErr: true})
    } else { this.setState({ quoteErr: false })}

    if(this.state.name && this.state.quote) {
      let user = {name:this.state.name, 
        quote:this.state.quote, 
        rank: this.state.rank}
      this.props.getFormData(user)
      this.setState({isComplete: true})
    }
  }

  render() {
    if (this.state.isComplete) {
      return <Redirect to='/movies' />
    }

    const { name, quote, rank, nameErr, quoteErr } = this.state
    let nameClass = nameErr ? "error" : "";
    let quoteClass = quoteErr ? "error" : "";


    return (
      <form>
        <div className="form-background">
          <label htmlFor="name">Name</label>
          <input autoFocus value={name} id="name" 
          placeholder="Enter a name"
          className={nameClass}
          onChange={this.handleChange}/>
          <div>
          {nameErr && <p>Please enter a name</p>}
          </div>
          <label htmlFor="quote">Favorite Star Wars Quote</label>
          <input value={quote} id="quote"
          className={quoteClass} 
            placeholder="Enter your favorite Quote"  
          onChange={this.handleChange}/>
          <div>
          {quoteErr && <p>Please enter a quote</p>}
          </div>
          <label htmlFor="rank">Rank</label>
          <select value={rank} 
          onChange={this.handleChange} id="rank">
            <option value="Padawan" selected>Padawan</option>
            <option value="Jedi Knight">Jedi Knight</option>
            <option value="Jedi Master">Jedi Master</option>
          </select>
            <button type="button" onClick={this.handleSubmit}>May The Force Be With You</button>
        </div>
      </form>
    )
  }
}

export default Form;

Form.propTypes = {
  getFormData: PropTypes.func.isRequired
}