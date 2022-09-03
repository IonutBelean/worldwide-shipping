import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderCSS from "./Header.module.css";

const Header = () => {
  return (
    <Container className={`${HeaderCSS.nav} d-flex justify-content-center`}>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-center">
          <Nav className={`d-flex justify-content-center`}>
            <Nav.Link className={`${HeaderCSS.items}`} as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className={`${HeaderCSS.items}`} href="#">
              Dress ideas and prices
            </Nav.Link>
            <Nav.Link className={`${HeaderCSS.items}`} href="#">
              Our Brides
            </Nav.Link>
            <Nav.Link className={`${HeaderCSS.items}`} href="#">
              Customize your wedding dress
            </Nav.Link>
            <Nav.Link className={`${HeaderCSS.items}`} href="#">
              How it works
            </Nav.Link>
            <Nav.Link className={`${HeaderCSS.items}`} href="#">
              Our fabrics
            </Nav.Link>
            <Nav.Link className={`${HeaderCSS.items}`} href="#">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
