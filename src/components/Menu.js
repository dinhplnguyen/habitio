import { Navbar, Offcanvas, Nav } from "react-bootstrap";
import Button from "./Button";

export default function Menu() {
  return (
    <Navbar.Offcanvas
      // id={`offcanvasNavbar-expand-${expand}`}
      // aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
      placement="end"
      className="navbar__offcanvas__body"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <p className="navbar__title">
            Powered by Tristix
          </p>
        </Offcanvas.Title>
      </Offcanvas.Header>


      <Offcanvas.Body className="d-flex flex-row align-items-start ">
        <Nav className="justify-content-end flex-grow-1 pe-3 navbar__nav">
          <Nav.Link href="#action2">Our Team</Nav.Link>
          {/* <Divider variant="fullWidth" orientation="vertical" flexItem /> */}
          <Button className="mt-2 mt-sm-0 ms-sm-2 navbar__button" variant="outline-dark">
            <a href="/login" className="navbar__a">Get Started</a>
          </Button>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  )
}