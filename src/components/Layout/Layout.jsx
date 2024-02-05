import Navigation from 'components/Navigation/Navigation'
import UserMenu from 'components/UserMenu/UserMenu'
import React from 'react'
import { Children } from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Navigation />
        <UserMenu />
      </header>

      <main>{children}</main>
      <footer>Copyright</footer>
    </div>
  )
}

export default Layout