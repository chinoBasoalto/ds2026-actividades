import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contacto() {
    return (
        <Container className="mt-5" style={{ maxWidth: '600px' }}>
            <h2 className="fw-bold mb-4 text-dark">Contacto de la Librería</h2>
            <Form className="p-4 bg-light rounded shadow-sm">
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" placeholder="Tu nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="¿Qué libro estás buscando?" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Enviar Consulta
                </Button>
            </Form>
        </Container>
    );
}

export default Contacto;