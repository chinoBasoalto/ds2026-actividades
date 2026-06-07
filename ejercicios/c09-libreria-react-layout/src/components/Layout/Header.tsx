import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BookHalf } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                {/* as={Link} para evitar recargas molestas */}
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 fw-bold fs-3 text-warning">
                    <BookHalf /> Ateneo React
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;