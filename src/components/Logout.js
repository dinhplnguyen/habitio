


export default function Logout({ setToken }) {

  async function logout() {

    const id = JSON.parse(sessionStorage.getItem("token")).id;

    // delete token from api server
    await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        sessionStorage.removeItem("token");
        window.location.href = "/";
      })
      .catch((err) => console.log(err));

  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>

  )
}
