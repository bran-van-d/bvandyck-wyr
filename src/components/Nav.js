import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='nav flex-row'>
        <div className="nav-selection">
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </div>

        <div className="nav-selection">
          <NavLink to='/new' exact activeClassName='active'>
            New Question
          </NavLink>
        </div>

        <div className="nav-selection">
          <NavLink to='/leaderboard' exact activeClassName='active'>
            Leaderboard
          </NavLink>
        </div>

    </nav>
  )
}