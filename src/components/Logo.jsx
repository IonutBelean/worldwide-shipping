import { Container, Navbar } from "react-bootstrap";
import Logopic from "../pics/Logo/Logo.png";
const Logo = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center">
        <Navbar.Brand>
          <img
            alt=""
            src={Logopic}
            width="250"
            height="200"
            className={` d-inline-block align-top me-3`}
          />
        </Navbar.Brand>
      </Container>
    </div>
  );
};

export default Logo;
