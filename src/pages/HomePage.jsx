import React from 'react'

import css from '../components/Layout/Layout.module.css'

const HomePage = () => {
  return (
    <div className={css.homeMessage}>
      <h1 className={css.mainTitle}>Welcome to Phonebook</h1>
      <p className={css.welcomeText}><span> <a className={css.pLink} href="/goit-react-hw-08-phonebook/register">Register</a></span> in our application, or <span><a className={css.pLink}  href="/goit-react-hw-08-phonebook/login">Sign In</a></span> if you are already a member</p>
      
    </div>
    
  )
}

export default HomePage