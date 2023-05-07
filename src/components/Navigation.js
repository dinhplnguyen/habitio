import { Nav, Button } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Nav style={styles.navbar__nav} className="justify-content-end flex-grow-1">
      <Nav.Link href="#action2" style={styles.navbar__link}>Our Team</Nav.Link>
      {/* <Divider variant="fullWidth" orientation="vertical" flexItem /> */}
      <a href="/login" style={styles.navbar__a} className="align-self-center">
        <Button style={styles.navbar__button} className="">
          Get Started
        </Button>
      </a>
    </Nav>
  )
}

const styles = {
  navbar__nav: {
    // padding: "0 !important",
    boxSizing: "border-box",
    padding: "10p"
  },
  navbar__a: {
    fontSize: "var(--normal-font-size)",
    letterSpacing: "var(--letter-spacing-small)",
    color: "white",
    textDecoration: "none",
    // width: "100%",
  },
  navbar__button: {
    backgroundColor: "var(--first-color-dark)",
    fontSize: "var(--normal-font-size)",
    borderRadius: "var(--border-radius-button)",
    // width: "100%",
  },
  navbar__link: {
    // fontSize: "var(--normal-font-size)",
    // backgroundColor: "var(--first-color-dark)",
    // borderRadius: "var(--border-radius-button)",
    // letterSpacing: "var(--letter-spacing-small)",
    // textDecoration: "none",
    // width: "100%",
  }
}