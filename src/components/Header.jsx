import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderCSS from "./Header.module.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-center">
          <Nav className={`${HeaderCSS.nav} d-flex justify-content-center`}>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className={`${HeaderCSS.items}`} href="#">
              Dress ideas and prices
            </Nav.Link>
            <Nav.Link href="#">Our Brides</Nav.Link>
            <Nav.Link href="#">Customize your wedding dress</Nav.Link>
            <Nav.Link href="#">How it works</Nav.Link>
            <Nav.Link href="#">Our fabrics</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
