import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
  import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";
import { useGetCategories } from "../../hooks/useProducts";

const NavBarComponent = () => {
  const { categories } = useGetCategories();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav.Link as={Link} to="/">NavBar CoderHouse</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="#action1">Inicio</Nav.Link>
            <Nav.Link as={Link} to="#action2">Contacto</Nav.Link>

            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              {categories.map((category, index) => (
                <NavDropdown.Item key={index} as={Link} to={`/category/${category}`}>
                  {category}
                </NavDropdown.Item>
              ))}
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
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;