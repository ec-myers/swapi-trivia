import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

  }
  render() {
    return(
      <form>
        <label htmlFor="name">Name</label>
        <input id="name"/>
        <p></p>
        <label htmlFor="quote">Favorite Quote</label>
        <input id="quote" />
        <p></p>
        <label htmlFor="rank">Rank</label>
        <select id="rank">
          <option value="Padawan">Padawan</option>
          <option value="Jedi Knight">Jedi Knight</option>
          <option value="Jedi Master">Jedi Master</option>
        </select>
        <p></p>
        <button type="button">May The Force Be With You</button>
      </form>
    )
  }

}

export default Form;