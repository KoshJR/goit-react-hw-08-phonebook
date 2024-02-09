import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../redux/auth/authSlice';

import css from "../components/Layout/Layout.module.css"

const RegisterPage = () => {
const dispatch = useDispatch();

const onSubmit = e => {
   e.preventDefault();
   const name = e.currentTarget.elements.userName.value
   const email = e.currentTarget.elements.userEmail.value
   const password = e.currentTarget.elements.userPassword.value

   const formData = {
    name,
    email,
    password,
   }

   dispatch(apiRegisterUser(formData))
}
  

  return (
    <div className={css.userForm}>
      <h1 className={css.mainTitle}>RegisterPage</h1>

      <form className={css.userInputForm} onSubmit={onSubmit}>
        <label className={css.inputItem}>
          Name:
          <input
            className={css.inputLine}
            type="text"
            name="userName"
            placeholder="Your Name"
            minLength={2}
            required
          />
        </label>
        <label className={css.inputItem}>
          Email:
          <input
            className={css.inputLine}
            type="email"
            name="userEmail"
            placeholder="example@gmail.com"
            required
          />
        </label >
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
        <button  className={css.registerBtn} type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;