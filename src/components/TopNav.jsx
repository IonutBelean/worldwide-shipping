import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <Nav className="d-flex justify-content-evenly bg-dark text-white">
      <Nav.Item>Whatsapp: 123456789</Nav.Item>
      <Nav.Item>email: marishca@yahoo.com</Nav.Item>
      <Nav.Item>Worldwide Shipping</Nav.Item>
    </Nav>
  );
}

export default TopNav;
