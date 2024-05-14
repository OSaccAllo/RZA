import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./navbar.css"


function Footer() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
        
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="buttons"
            style={{ maxHeight: '100px'  }}
            navbarScroll
          >

            {/* login page */}
            <Nav.Link href="/pp">
              Privacy policy
            </Nav.Link>
            {/* sign up page */}
            <Nav.Link href="/cookie">
              cookie policy
            </Nav.Link>
            <Nav.Link href="/cod">
              Code of conduct
            </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;