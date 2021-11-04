import { Fragment } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from "./CartWidget";
//import {Link} from 'react-router-dom';


const NavBar = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="#home">Pet Store</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link to="#home">Home</Nav.Link>
                    <Nav.Link to="#productos">Productos</Nav.Link>
                    <Nav.Link to="#contacto">Contacto</Nav.Link>
                    <Navbar.Brand to="#home"><CartWidget/></Navbar.Brand>
                    </Nav>
                    
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;