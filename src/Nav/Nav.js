import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Nav.scss';

const Nav = ({user, logOut}) => {
  return (
  <nav>
    <div className='user-container'>
      <div className='inner'>
          <span>i</span>
        <p>Name: {user.name}</p>
        <p>Quote: {user.quote}</p>
        <p>Rank: {user.rank}</p>
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

Nav.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired
}