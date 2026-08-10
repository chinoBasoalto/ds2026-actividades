import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <footer className="bg-dark text-light text-center py-4 mt-auto border-top border-secondary">
            <Container>
                <p className="mb-1 small">&copy; 2026 Ateneo React - Todos los derechos reservados.</p>
                <p className="mb-0 text-muted extra-small">Desarrollado en la materia Laboratorio de Software.</p>
            </Container>
        </footer>
    );
}

export default Footer;