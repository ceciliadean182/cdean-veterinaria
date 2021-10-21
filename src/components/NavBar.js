import { Fragment } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from "./CartWidget";


const NavBar = () => {
    //logica
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Pet Store</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#productos">Productos</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    <Navbar.Brand href="#home"><CartWidget/></Navbar.Brand>
                    </Nav>
                    
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;