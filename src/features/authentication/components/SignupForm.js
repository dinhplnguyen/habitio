import {
  InputField,
  Button,
} from "../../../components/index";

export default function Signup({
  handleSubmit,
  setFirstName, setLastName,
  setEmail, setPassword,
  loading, loadingMessage
}) {

  return (
    <>
      <form onSubmit={handleSubmit} className="signup__form">
        <h1>Welcome!</h1>

        <InputField
          type="text"
          label="signup__label"
          className="signup__input"
          placeholder="First Name"
          onChange={setFirstName}
          required={true}
        />

        <InputField
          type="text"
          label="signup__label"
          className="signup__input"
          placeholder="Last Name"
          onChange={setLastName}
          required={true}
        />

        <InputField
          type="email"
          label="signup__label"
          className="signup__input"
          placeholder="Email"
          onChange={setEmail}
          required={true}
        />

        <InputField
          type="password"
          label="signup__label"
          className="signup__input"
          placeholder="Password"
          onChange={setPassword}
          required={true}
        />

        <Button className="signup__button" type="submit">Sign Up</Button>

        <p className="signup__loading">{loading ? loadingMessage : null}</p>
        <hr className="signup__line"></hr>

        <a href="/login" className="signup__login">Login to existing account</a>
      </form>
    </>
  );
}