import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
        <Link to="/"><div className="logo">Pokedex</div></Link>
        <div className="user-image">
            {/* <img src={} alt="user" /> */}
        </div>
    </div>
  )
}

export default Header