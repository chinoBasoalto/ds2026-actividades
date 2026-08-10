import Alert from 'react-bootstrap/Alert';
import { Percent } from 'react-bootstrap-icons';

function BannerPromo() {
    return (
        <Alert variant="warning" className="d-flex align-items-center gap-3 py-3 border-0 shadow-sm rounded-3">
            <div className="bg-warning text-dark rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                <Percent className="fs-4" />
            </div>
            <div>
                <Alert.Heading className="fs-5 fw-bold mb-0 text-dark">¡Semana de la Lectura en React!</Alert.Heading>
                <p className="mb-0 text-secondary small">Aprovechá un 20% de descuento en todos los libros de programación y ciencia ficción abonando con transferencia.</p>
            </div>
        </Alert>
    );
}

export default BannerPromo;