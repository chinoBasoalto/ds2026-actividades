import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Heart, HeartFill, CartPlus } from 'react-bootstrap-icons';

// Definimos qué datos necesita recibir cada tarjeta de libro
interface LibroProps {
    titulo: string;
    autor: string;
    precio: number;
    genero: string;
    imagen: string;
}

function LibroCard({ titulo, autor, precio, genero, imagen }: LibroProps) {
    // Paso 6: Estado para manejar el botón de "Me gusta"
    const [meGusta, setMeGusta] = useState(false);

    return (
        <Card className="h-100 shadow-sm border-0 bg-light position-relative">
            {/* Botón flotante de Me Gusta */}
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
                <Card.Title className="fs-5 fw-bold text-dark text-truncate">{titulo}</Card.Title>
                <Card.Text className="text-muted small mb-3">Por: {autor}</Card.Text>
                
                <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fs-4 fw-bold text-primary">${precio}</span>
                    <Button variant="outline-primary" size="sm" className="d-flex align-items-center gap-1">
                        <CartPlus /> Agregar
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default LibroCard;