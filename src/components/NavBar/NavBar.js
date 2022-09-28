import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Images/KWLogoOnly.png';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavbarBrand, NavItem } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Link to='/'>
            <NavbarBrand><img src={logo} alt='logo' className='logo' /></NavbarBrand>
          </Link>
          <Link to='/' className='brand-title'>
            <Navbar.Brand className='brand-title'>Kitchen Warehouse</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link as={Link} to='/' className='navbar-link'>Todos los productos</Nav.Link>
              <NavDropdown title='Categorías' id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to={'/category/cocina'} className='navbar-link'>Cocina</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/category/pasteleria'} className='navbar-link'>
                  Pastelería
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/category/accesorios'} className='navbar-link'>
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/category/utensilios'} className='navbar-link'>
                  Utensilios
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={'/category/electro'} className='navbar-link'>
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
      <Alert variant='secondary'>
        <div className='navbar-alert'>
        <Nav.Link as={Link} to='/' className='register-link'>Creá tu cuenta</Nav.Link>
        <Nav.Link as={Link} to='/' className='sign-in-link'>Iniciá Sesión</Nav.Link>
        </div>
      </Alert>
    </>
  );
}

export default NavBar;