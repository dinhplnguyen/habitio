import { Offcanvas } from "react-bootstrap";

export default function Title() {
  return (
    <Offcanvas.Title style={styles}>
      <p className="navbar__title">
        Powered by Tristix
      </p>
    </Offcanvas.Title>
  )
}

const styles = {
  fontSize: "var(--medium-font-size)",
  fontWeight: "var(--font-semi-bold)",
  letterSpacing: "var(--letter-spacing-big)",
  color: "var(--first-color-dark)"
}