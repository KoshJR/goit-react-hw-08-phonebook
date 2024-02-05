import React from 'react';

const RegisterPage = () => {


  

  return (
    <div>
      <h1>RegisterPage</h1>

      <form>
        <label>
          Name:
          <input
            type="text"
            name="userName"
            placeholder="Rikki"
            minLength={2}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="userEmail"
            placeholder="rikkiGG@gmail.com"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="userPassword"
            placeholder="**********"
            minLength={7}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;