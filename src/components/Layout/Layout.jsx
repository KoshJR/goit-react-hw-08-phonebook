import Navigation from 'components/Navigation/Navigation'
import UserMenu from 'components/UserMenu/UserMenu'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors'

const Layout = ({children}) => {

  const isLoggedIn = useSelector(selectAuthIsLoggedIn)


  return (
    <div>
      <header>
        <Navigation />
        {isLoggedIn && < UserMenu />}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout