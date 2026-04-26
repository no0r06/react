
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function MyNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#f8c8dc', padding: '15px' }}>
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontWeight: 'bold',
            fontSize: '28px',
            color: '#8b4513'
          }}
        >
          Bloom Bakery
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: '#8b4513', fontWeight: '500' }}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/menu" style={{ color: '#8b4513', fontWeight: '500' }}>
              Menu
            </Nav.Link>

            <Nav.Link as={Link} to="/products" style={{ color: '#8b4513', fontWeight: '500' }}>
              Products
            </Nav.Link>


            <Nav.Link as={Link} to="/contact" style={{ color: '#8b4513', fontWeight: '500' }}>
              Contact Us
            </Nav.Link>

            <Button
              style={{
                marginLeft: '15px',
                backgroundColor: '#d87093',
                border: 'none'
              }}
            >
              Order Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar; 