//Navbar page when signed in


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import Logo from "../images/Logo.png"


function NavSignedIn() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <img className='logo1'alt="RZA's Logo" src={Logo}></img>
        {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="buttons"
            style={{ maxHeight: '100px'  }}
            navbarScroll
          >
            {/* going to home page */}
            <Nav.Link href="/home">Home</Nav.Link>
            {/* going to hotel page */}
            <Nav.Link href="/check">Hotel</Nav.Link>
            {/* education dropdown */}
            
            <Nav.Link href="/signed_in_tickets">
              Book your tickets
            </Nav.Link>
            <Nav.Link href="/membership">
              Memberships
            </Nav.Link>
            <Nav.Link href="/sign-out">
              Sign Out
            </Nav.Link>
            <Nav.Link href="/Account">
              My Account
            </Nav.Link>
            <Nav.Link href="/Login">
              Login
            </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSignedIn;