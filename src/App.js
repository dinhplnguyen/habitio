import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'

import { Landing, Login, Signup } from './pages';
import Logout from './components/Logout';

import getToken from './utils/getToken';

import { Today, UserNavBar } from './components';

function App() {

  const { token, setToken } = getToken();

  if (token) {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={
              <>
                <Logout setToken={setToken} />
                <UserNavBar />
              </>

            } />
            <Route path="*" element={<>Wrong way there, bud<p>sdfa</p></>} />
          </Routes>
        </Router>
      </>
    );
  }



  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login setToken={setToken} />} /> */}
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="*" element={<>Wrong way there, bud<p>sdfa</p></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
