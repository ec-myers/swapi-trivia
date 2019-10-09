import React from 'react';
import './Nav.scss'

const Nav = ({user}) => {
  return (
  <nav>
    <div>
    <h1>{user.name}</h1>
    <p>"{user.quote}"</p>
    <h2>Rank: {user.rank}</h2>
    </div>
    <p>Movies</p>
    <p>Favs</p>
    <button>Logout</button>
  </nav>
  )
}

export default Nav