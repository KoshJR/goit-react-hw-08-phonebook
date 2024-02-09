import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../redux/auth/authSlice';

import css from "../components/Layout/Layout.module.css"


const LoginPage = () => {
  const dispatch = useDispatch()
  
  const onSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    }
    dispatch(apiLoginUser(formData))
  }

  return (
    <div className={css.userForm}>
      <h1 className={css.mainTitle}>Welcome, Sign In please!</h1>

      <form className={css.userInputForm} onSubmit={onSubmit}>
        <label className={css.inputItem}>
          Email:
          <input
            className={css.inputLine}
            type="email"
            name="userEmail"
            placeholder="example@anymail.com"
            required
          />
        </label>
        <label className={css.inputItem}>
          Password:
          <input
            
            className={css.inputLine}
            type="password"
            name="userPassword"
            placeholder="**********"
            minLength={7}
            required
          />
        </label>
        <button className={css.registerBtn}  type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;