import React from 'react';

const LoginPage = () => {


  return (
    <div>
      <h1>LoginPage</h1>

      <form>
        <label>
          Email:
          <input
            type="email"
            name="userEmail"
            placeholder="example@anymail.com"
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;