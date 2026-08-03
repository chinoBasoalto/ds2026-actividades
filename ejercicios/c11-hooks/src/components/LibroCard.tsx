import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'; // Importamos Link
import type { Libro } from '../types/libro';

function LibroCard({ id, titulo, autor, precio, genero, imagen }: Libro) {
    const [meGusta, setMeGusta] = useState(false);

    return (
        <Card className="h-100 shadow-sm border-0 bg-light position-relative">
            <button 
                className="position-absolute top-0 end-0 m-2 border-0 bg-transparent text-danger fs-4"
                onClick={() => setMeGusta(!meGusta)}
                style={{ cursor: 'pointer', zIndex: 10 }}
            >
                {meGusta ? <HeartFill /> : <Heart />}
            </button>

            <Card.Img 
                variant="top" 
                src={imagen} 
                style={{ height: '280px', objectFit: 'cover' }} 
                alt={titulo}
            />
            
            <Card.Body className="d-flex flex-column">
                <span className="badge bg-secondary align-self-start mb-2">{genero}</span>
                <Card.Title className="fs-5 fw-bold text-dark text-truncate mb-1">{titulo}</Card.Title>
                <Card.Text className="text-muted small mb-3">Por: {autor}</Card.Text>
                
                <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="fs-4 fw-bold text-primary">${precio}</span>
                    </div>
                    {/* Botón dinámico exigido por la pauta del Hito 3 */}

                    {/* El Link maneja la navegación */}
                    <Link to={`/libros/${id}`} className="text-decoration-none">
                        {/* El Botón adentro maneja el diseño visual */}
                        <Button variant="outline-warning" className="w-100 fw-semibold text-dark">
                            Ver más
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default LibroCard;