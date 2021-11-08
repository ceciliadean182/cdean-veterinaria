import { Fragment } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from "../Cart/CartWidget";
import {Link} from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return(
        <>
            <Navbar className="nav">
                <Container>
                    <Navbar.Brand className="mainTitle" to="#home"><img className='navLogo' src="../assets/Chester.svg" alt="logo"/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                    <Navbar><Link className="link" to="/">Home</Link></Navbar>
                    <Navbar><Link className="link" to="/categoria/comida">Comida</Link></Navbar>
                    <Navbar><Link className="link" to="/categoria/juguetes">Juguetes</Link></Navbar>
                    <Navbar><Link className="link" to="/categoria/ropa">Ropa</Link></Navbar>
                    <Navbar.Brand><Link to="./cart"><CartWidget/></Link></Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;