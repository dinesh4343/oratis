import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";
import logo from '../Images/icon.png';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className='navheader'
      
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: "#FBF8EF"
      }}
    >
      <Container>
        <img
          src={logo}
          alt="Oratis Logo"
          width="50"
          height="50"
          className="d-inline-block align-top"
          style={{ marginRight: '10px' }}
        />
        <Navbar.Brand href="#home" className='nav' as={Link} to="text-to-audio" smooth={true} duration={100}>
          ORATIS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link as={Link} to="hero-section" smooth={true} duration={100} className='nav' href='#'>Features
            
            </Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#">
              <ThemeToggle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;