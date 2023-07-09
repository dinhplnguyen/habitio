import React, { useState } from "react";

import { SignupForm } from "../../features";

import "./Signup.css";

async function SignupUser(credentials, setLoadingMessage) {

  return await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => checkRepsonse(response, setLoadingMessage))
    .then((data) => data.json())
    .catch((err) => {
      setLoadingMessage("Invalid username or password");
    });
}

async function checkRepsonse(response, setLoadingMessage) {
  if (!response.ok) {
    setLoadingMessage("Invalid username or password");
    throw Error(response.statusText);
  }
  window.alert("Signup successful");
  return response;
}



export default function Signup() {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");


  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setLoadingMessage("Signing you up...");

    const user = await SignupUser({
      firstName,
      lastName,
      email,
      password
    }, setLoadingMessage);

    try {
      if (user === undefined) {
        throw Error("Invalid username or password");
      }
      setLoading(false);
      window.location.href = "/login";
    } catch (err) {
      setLoadingMessage("Invalid username or password");
    }
  }

  return (
    <>
      <div className="signup">
        <div className="signup__content">
          <SignupForm
            handleSubmit={handleSubmit}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        </div>
      </div>

    </>
  );
}