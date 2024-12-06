import { React, useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { UserContext } from "../components/UserContext";

const NavbarApp = () => {
  const { user, setUser } = useContext(UserContext);
  const logOut = () => {
    setUser({
      id: 0,
      name: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      admin: false,
    });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Veterinaria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>Nosotros</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link>Contacto</Nav.Link>
            </LinkContainer>

            {user.admin ? 
              <>
                <LinkContainer to="/admin/managePets">
                  <Nav.Link>Gestionar mascotas</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/admin/manageShifts">
                  <Nav.Link>Gestionar turnos</Nav.Link>
                </LinkContainer>

                <LinkContainer onClick={logOut} to="">
                  <Nav.Link>Salir</Nav.Link>
                </LinkContainer>
              </>
             : 
              <>
                <LinkContainer to="/signIn">
                  <Nav.Link>Sign In</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/login">
                  <Nav.Link>Log in</Nav.Link>
                </LinkContainer>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
