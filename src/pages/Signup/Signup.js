import { SignupForm } from "../../features";

import "./Signup.css";

export default function Signup() {
  return (
    <>
      <div className="login">
        <div className="login__content">
          <SignupForm />
        </div>
      </div>

    </>
  );
}