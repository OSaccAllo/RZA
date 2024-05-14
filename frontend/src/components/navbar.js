//Navbar page when signed ou



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"
import Logo from "../images/Logo.png"

function NavSignedOut() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
        <img className='logo1' alt="RZA's Logo" src={Logo}></img>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="buttons"
            style={{ maxHeight: '100px'  }}
            navbarScroll
          >
            {/* going to home page */}
            <Nav.Link href="/">Home</Nav.Link>
            {/* going to hotel page */}
            {/* <Nav.Link href="/Hotel">Hotel</Nav.Link> */}
            {/* education dropdown */}
            <NavDropdown title="Education" id="navbarScrollingDropdown">
              {/* education pages pages */}
              
              <NavDropdown.Item href="/protection">
                Animal Protection
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/animals">
                Animals
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/programme">
                Programmes
              </NavDropdown.Item>
              
            </NavDropdown>


            <NavDropdown title="Information" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/About-us">Park Information</NavDropdown.Item>
              {/* information pages */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/attractions">
                Attractions
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/directions">
                Directions
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/facilities">
                Zoo Facilities
              </NavDropdown.Item>
              
              
            </NavDropdown>

            {/* login page */}
            <Nav.Link href="/Login">
              Login
            </Nav.Link>
            {/* sign up page */}
            <Nav.Link href="/Signup">
              Sign up
            </Nav.Link>
            <Nav.Link href="/tickets">
              Book your tickets
            </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSignedOut;