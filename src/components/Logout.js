


export default function Logout({ setToken }) {

  function logout() {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>

  )
}
