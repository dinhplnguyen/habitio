import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';
import { LoginForm } from '../../features';

async function LoginUser(credentials, setLoadingMessage) {

  return await fetch(`${process.env.REACT_APP_API_URL}/login`, {
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

          <LoginForm
            handleSubmit={handleSubmit}
            setEmail={setEmail}
            setPassword={setPassword}
            loading={loading}
            loadingMessage={loadingMessage}
          />

        </div>
      </div>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}