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
          label="login__label"
          className="login__input"
          placeholder="Email"
          onChange={setEmail}
          required={true}
        />

        <InputField
          type="password"
          label="login__label"
          className="login__input"
          placeholder="Password"
          onChange={setPassword}
          required={true}
        />

        <a href="/forgot" className="login__forgot">Forgot password?</a>

        <Button className="login__button" type="submit">Login</Button>

        <p className="login__loading">{loading ? loadingMessage : null}</p>
        <hr className="login__line"></hr>

        <a href="/signup" className="login__signup">Create new account</a>
        {/* <a href="https://habitio-api-server.vercel.app/login" className="login__signup">Create new account</a> */}

      </form>

    </>
  );
}