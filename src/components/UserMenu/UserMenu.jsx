import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiLogoutUser } from '../../redux/auth/authSlice'
import { selectAuthIsLoading, selectAuthUserData } from '../../redux/auth/authSlice.selectors'
import css from './UserMenu.module.css'


const UserMenu = () => {
  const dispatch = useDispatch()
  const userData = useSelector(selectAuthUserData)
  const isLoading = useSelector(selectAuthIsLoading)
  const userEmail = userData?.email ?? 'Couldn`t get user email'

  const handleLogOut = () => dispatch(apiLogoutUser());

  return (
    <div className={css.userMenu}>
    <p>{userEmail}</p>
    <button onClick={handleLogOut} disabled={isLoading} type="button" className={css.logOutBtn}>
      Logout
    </button>
  </div>
  )
}

export default UserMenu