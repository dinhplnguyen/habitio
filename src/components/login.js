import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}