import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.scss';

const Nav = ({user, logOut}) => {
  return (
  <nav>
    <div className='user-container'>
      <div className='inner'>
        <span>i</span>
        <h1>{user.name}</h1>
        <p>"{user.quote}"</p>
        <h2>Rank: {user.rank}</h2>
      </div>
    </div>
      <NavLink to='/movies' className='nav-link' activeStyle={{ color: 'coral' }}>Movies</NavLink>
      <NavLink to='/favorites' className='nav-link' activeStyle={{ color: 'coral' }}>Favorites</NavLink>
    <Link onClick={logOut} to='/'>
      <button>Logout</button>
    </Link>
  </nav>
  )
}

export default Nav;