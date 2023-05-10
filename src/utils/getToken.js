import { useState } from 'react'

export default function GetToken() {

  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    if (userToken === undefined) {
      throw Error("Tried to save undefined token");
    }
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  }

  return {
    setToken: saveToken,
    token
  }
}