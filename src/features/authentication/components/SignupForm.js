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
      <form onSubmit={handleSubmit} className="login__form">
        <h1>Login</h1>

        <InputField
          type="text"
          className="login__input"
          placeholder="First Name"
          onChange={setFirstName}
        />

        <InputField
          type="email"
          className="login__input"
          placeholder="Last Name"
          onChange={setEmail}
        />

        <InputField
          type="text"
          className="login__input"
          placeholder="Last Name"
          onChange={setLastName}
        />

        <InputField
          type="password"
          className="login__input"
          placeholder="Password"
          onChange={setPassword}
        />

        <Button className="login__button" type="submit">Login</Button>

        <p className="login__loading">{loading ? loadingMessage : null}</p>
      </form>
    </>
  );
}