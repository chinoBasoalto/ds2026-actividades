import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BookHalf } from 'react-bootstrap-icons';

function HeaderLibreria() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow">
            <Container>
                <Navbar.Brand href="#" className="d-flex align-items-center gap-2 fw-bold fs-3 text-warning">
                    <BookHalf /> Ateneo React
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5">
                        <Nav.Link href="#" active>Inicio</Nav.Link>
                        <Nav.Link href="#">Géneros</Nav.Link>
                        <Nav.Link href="#">Novedades</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderLibreria;