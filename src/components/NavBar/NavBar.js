import { Container, Navbar } from "react-bootstrap";
import { Brand, Menu } from "../";
import "./NavBar.css";

const expand = "sm";

export default function NavBar() {
  return (
    <Navbar key={expand} expand={expand} className="navbar__main">
      <Container className="navbar__container">
        <Brand />
        <Navbar.Toggle />
        <Menu />
      </Container>
    </Navbar>
  );
}