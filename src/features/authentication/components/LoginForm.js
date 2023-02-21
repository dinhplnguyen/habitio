import {
  InputField,
  Button,
} from "../../../components/index";

export default function LoginForm({
  handleSubmit, setEmail, setPassword, loading, loadingMessage
}) {

  return (
    <>
      <form onSubmit={handleSubmit} className="login__form">
        <h1>Login</h1>

        <InputField
          type="email"
          className="login__input"
          placeholder="Email"
          onChange={setEmail}
        />

        <InputField
          type="password"
          className="login__input"
          placeholder="Password"
          onChange={setPassword}
        />

        <a href="/forgot" className="login__forgot">Forgot password?</a>

        <Button className="login__button" type="submit">Login</Button>

        <p className="login__loading">{loading ? loadingMessage : null}</p>

        <a href="/signup" className="login__signup">Create new account</a>


      </form>
    </>
  );
}