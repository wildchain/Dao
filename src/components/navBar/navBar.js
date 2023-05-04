import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import algogreen from "../../images/algo.png";
import "./navBar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="nav-bar">
        <Navbar.Brand href="/" className="nav-bar-title">
          <Logo />
          <p className="nav-bar-title-text">Wildchain</p>
        </Navbar.Brand>
        <Nav className="nav-bar-mid">
          <Nav.Link href="/" className="item">
            Home
          </Nav.Link>
          <Nav.Link href="#link" className="item">
            Causes
          </Nav.Link>
          <Nav.Link href="#link" className="item">
            Create
          </Nav.Link>
          <Nav.Link href="#link" className="item">
            Dev
          </Nav.Link>
          <Nav.Link href="#link" className="item">
            Contact Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
