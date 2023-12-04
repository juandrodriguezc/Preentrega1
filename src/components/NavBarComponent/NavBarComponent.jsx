import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">NavBar CoderHouse</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Inicio</Nav.Link>
          <Nav.Link href="#action2">Contacto</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Accion</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Otra accion
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Algo mas aqui
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Productos
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscador"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
      <CartWidgetComponent/>
    </Container>
  </Navbar>
);
}

export default NavBarComponent