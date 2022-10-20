import { Link } from "react-router-dom";
import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-wrap'>
        <div className='header-left-wrap'>
          <Link style={{display: "flex", alignItems: "center"}} to="/">로고임</Link>
          <ul>
            <li>
              <Link className="header-nav-item" to="/movie">영화</Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/tv">TV 프로그램</Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/list">일정</Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/not">nope</Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/login">Log-in</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header