import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Images/icon.png';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-transparent">
      <Container>
         <img
            src={logo}
            alt="Oratis Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
            style={{ marginRight: '10px' }}
          />
          <Navbar.Brand href="#home" className='nav'>
 
          ORATIS
        </Navbar.Brand>
        

  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link className='nav' href="#features">Features</Nav.Link>
            <Nav.Link className='nav' href="#pricing">Pricing</Nav.Link>

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