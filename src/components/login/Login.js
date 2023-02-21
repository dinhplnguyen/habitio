import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
  return await fetch('https://habits-tracker-dinhplnguyen.vercel.app/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(handleError)
    .then(data => data.json())
    .catch(err => { throw Error(err) })
}

async function handleError(response) {
  if (!response.ok) {
    console.log("response: ", response);
    window.alert("Invalid username or password");
    throw Error(response.statusText);
  }
  console.log("response: ", response);
  window.alert("Login successful");
  return response;
}

export default function Login({ setToken }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });

    if (token === undefined) {
      console.log("token is undefined");
      return;
    }
    await setToken(token?.data);
    window.location.href = "/";
  }

  return (
    <>
      <div className="login">
        <div className="login__content">

          <form onSubmit={handleSubmit} className="login__form">
            <h1>Login</h1>

            <div className="input__field">
              <label>
                <input type="email" className="login__input" placeholder="Email" onChange={e => setEmail(e.target.value)} />
              </label>
            </div>

            <div className="input__field">
              <label>
                <input type="password" className="login__input" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              </label>
            </div>

            <a href="/forgot" className="login__forgot">Forgot password?</a>

            <button className="login__button" type="submit">Login</button>


          </form>

        </div>
      </div>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}