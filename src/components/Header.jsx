import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <Link to={'/'} className='text-decoration-none'>
                        <img
                            src="https://sribruhathitraders.com/wp-content/uploads/2024/02/Bruthati-Traders-Logo-Broucher.png"
                            width="200"
                            height="53"
                            className="d-inline-block align-top"
                            alt="Sri Bruhathi Traders logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className='me-3' id='navlink' to="/" href="#home">HOME</Nav.Link>
                        <Nav.Link as={Link} className='me-3' id='navlink' to="/about" href="#about">ABOUT</Nav.Link>
                        <NavDropdown title="PRODUCTS" className='me-3' id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} className='me-3' id='navlink' to="/products" href="#products"> PRODUCTS</NavDropdown.Item>
                            <NavDropdown.Item as={Link} className='me-3' id='navlink' to="/customizedproducts" href="#customizedproducts">CUSTOMIZED PRODUCTS</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} className='me-3' id='navlink' to="/productsoverview" href="#productsoverview">PRODUCT OVERVIEW</Nav.Link>
                        <Nav.Link as={Link} className='' id='navlink' to="/contact" href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;