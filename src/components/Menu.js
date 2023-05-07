import { Navbar, Offcanvas, Nav } from "react-bootstrap";
import Button from "./Button";
import Title from "./Title";
import Navigation from "./Navigation";

export default function Menu() {
  return (
    <Navbar.Offcanvas
      // id={`offcanvasNavbar-expand-${expand}`}
      // aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
      placement="end"
      className="navbar__offcanvas__body"
    >
      <Offcanvas.Header closeButton>
        <Title />
      </Offcanvas.Header>


      <Offcanvas.Body className="d-flex flex-row align-items-start ">
        <Navigation />
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  )
}