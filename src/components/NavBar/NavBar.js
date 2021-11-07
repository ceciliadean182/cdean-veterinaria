import { Fragment } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from "../Cart/CartWidget";
import {Link} from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="#home">Pet Store</Navbar.Brand>
                    <Nav className="me-auto">
                    <Navbar><Link className="link" to="/">Home</Link></Navbar>
                    <Navbar><Link className="link" to="/categoria/comida">Comida</Link></Navbar>
                    <Navbar><Link className="link" to="/categoria/juguetes">Juguetes</Link></Navbar>
                    <Navbar.Brand to="#home"><CartWidget/></Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;