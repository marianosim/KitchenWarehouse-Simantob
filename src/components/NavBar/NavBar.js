import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Images/KWLogoOnly.png';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavbarBrand } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <NavbarBrand href='#'><img src={logo} alt='logo' className='logo'/></NavbarBrand>
        <Navbar.Brand href="#">Kitchen Warehouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Todos los productos</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Cocina</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Pastelería
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Electro
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscá tu producto..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
          </Form>
        </Navbar.Collapse>
        <Nav.Link href='#action4' className='p-4'><CartWidget /></Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;