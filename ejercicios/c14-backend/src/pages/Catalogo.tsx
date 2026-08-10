import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import LibroCard from '../components/LibroCard';
import type { Libro } from '../types/libro';
import { useFetch } from '../hooks/useFetch';
import BannerPromo from '../Banner';

function Catalogo() {
    const { data: catálogoLibros, loading, error } = useFetch<Libro[]>('/libros.json');

    return (
        <Container className="mt-4">
            <BannerPromo />
            <h2 className="my-4 text-dark fw-bold position-relative pb-2" style={{ borderBottom: '2px solid #ffc107', width: 'fit-content' }}>
                Nuestro Catálogo
            </h2>

            {/* Spinner mientras carga */}
            {loading && (
                <div className="text-center my-5 py-5">
                    <Spinner animation="border" variant="warning" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Cargando catálogo...</span>
                    </Spinner>
                    <p className="mt-3 text-muted fw-semibold">Cargando catálogo de libros...</p>
                </div>
            )}

            {/* Alert si hay error */}
            {error && (
                <Alert variant="danger" className="my-4 shadow-sm">
                    <Alert.Heading>¡Ocurrió un error al cargar el catálogo!</Alert.Heading>
                    <p className="mb-0">{error}</p>
                </Alert>
            )}

            {/* Renderizado de libros */}
            {!loading && !error && catálogoLibros && (
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {catálogoLibros.map((libro) => (
                        <Col key={libro.id}>
                            <LibroCard {...libro} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default Catalogo;