import React from 'react'
import Search from '../Search/Search.js'
import toiletPaper from '../../assets/toilet-paper.svg';
import menu from '../../assets/menu-button.svg';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {

  return (
    <div className="nav-bar">
      <ul className='nav-links'>
        <img src={toiletPaper} alt='resources' className='menu-icon' />
        <Search />
        <img src={menu} alt='menu' className='menu-icon' />
        <Link to='/login'>
          <button>Log In</button>
        </Link>
      </ul>
    </div>
  )
}

export default Nav;