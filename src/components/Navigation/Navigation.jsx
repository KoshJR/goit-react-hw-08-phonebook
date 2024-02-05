import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <NavLink
        
        to="/"
      >
        Home
      </NavLink>
      
        <>
          <NavLink
            
            to="/contacts"
          >
            Contacts
          </NavLink>
        </>
      
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
      
    </div>
  )
}

export default Navigation

// className={({ isActive }) =>
//           `${css.navLink} ${isActive ? css.active : ''}`
//         }