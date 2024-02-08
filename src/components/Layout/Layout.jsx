import Navigation from 'components/Navigation/Navigation'
import UserMenu from 'components/UserMenu/UserMenu'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors'
import css from './Layout.module.css'

const Layout = ({children}) => {

  const isLoggedIn = useSelector(selectAuthIsLoggedIn)


  return (
    <div className={css.container}>
      <header>
        <div className={css.navbar}>
        <Navigation />
        {isLoggedIn && < UserMenu />}
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout