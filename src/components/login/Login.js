import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function LoginUser(credentials, setLoadingMessage) {

  return await fetch('https://habits-tracker-dinhplnguyen.vercel.app/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(response => checkRepsonse(response, setLoadingMessage))
    .then(data => data.json())
    .catch(err =>
      setLoadingMessage("Invalid username or password")
    )
}

async function checkRepsonse(response, setLoadingMessage) {
  if (!response.ok) {
    setLoadingMessage("Invalid username or password");
    throw Error(response.statusText);
  }
  window.alert("Login successful");
  return response;
}

export default function Login({ setToken }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setLoadingMessage("Loading...");

    const token = await LoginUser({
      email,
      password
    }, setLoadingMessage);

    try {
      if (token === undefined) {
        throw Error("Invalid username or password");
      }
      await setToken(token?.data);
    } catch (err) {
      setLoadingMessage("Invalid username or password");
    }
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

            <p className="login__loading">{loading ? loadingMessage : null}</p>

          </form>
        </div>
      </div>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}