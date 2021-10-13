import { Fragment } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';


const NavBar = () => {
    //logica
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Veterinaria</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#productos">Productos</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;