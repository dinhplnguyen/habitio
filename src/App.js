import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'

import Login from './components/login';
import Token from './components/Token';
import Dashboard from './components/dashboard';

function App() {

  const { token, setToken } = Token();
  // const [token, setToken] = useState();
  console.log(token);


  if (!token || token === undefined) {
    return <Login setToken={setToken} />
  }


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<>Wrong way there, bud<p>sdfa</p></>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
