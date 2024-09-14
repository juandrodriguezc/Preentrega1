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
<<<<<<< HEAD
  const { categories, loading, error } = useGetCategories();

  if (loading) {
    return <p>Cargando categorías...</p>; // Mientras carga, mostramos un mensaje
  }

  if (error) {
    return <p>Error al cargar categorías: {error.message}</p>; // Mostramos un mensaje de error si ocurre
  }
=======
  const { categories } = useGetCategories();
>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">NavBar CoderHouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
<<<<<<< HEAD
            <NavDropdown title="categories" id="basic-nav-dropdown">
              {Array.isArray(categories) && categories.map((category) => (
                <NavDropdown.Item key={category.id} as={Link} to={`/category/${category.slug}`}>
                  {category.name} {/* Mostrar el nombre de la categoría */}
=======
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {Array.isArray(categories) && categories.map((category, index) => (
                <NavDropdown.Item key={index} as={Link} to={`/category/${category}`}>
                  {category}
>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3
                </NavDropdown.Item>
              ))}
            </NavDropdown>
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