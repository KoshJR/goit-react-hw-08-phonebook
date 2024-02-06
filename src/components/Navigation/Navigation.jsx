import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors'

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn)
  
  return (
    <div>
    <NavLink
      
      to="/"
    >
      Home
    </NavLink>
    {isLoggedIn ? (
      <>
        
        
        <NavLink
          
          to="/contacts"
        >
          Contacts
        </NavLink>
      </>
    ) : (
      <>
        <NavLink
          
          to="/register"
        >
          Register
        </NavLink>

        <NavLink
          
          to="/login"
        >
          Login
        </NavLink>
      </>
    )}
  </div>
  )
}

export default Navigation

// className={({ isActive }) =>
//           `${css.navLink} ${isActive ? css.active : ''}`
//         }