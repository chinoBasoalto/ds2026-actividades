import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ArrowLeft, CartPlus } from 'react-bootstrap-icons';

function LibroDetalle() {
    // Capturamos el id de la URL como un string original
    const { id } = useParams<{ id: string }>();
    console.log("El ID que viene de la URL es:", id);
    console.log("El tipo de datos de ese ID es:", typeof id);
    // Simulamos la base de datos para mostrar la info del libro seleccionado
    const librosDB = [
        { id: 1, titulo: "Clean Code", autor: "Robert C. Martin", precio: 45000, genero: "Programación", descripcion: "Un manual fundamental para ingenieros de software que deseen escribir código limpio, legible y mantenible utilizando las mejores prácticas de la industria.", imagen: "https://images-na.ssl-images-amazon.com/images/I/41xSh4314sL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" },
        { id: 2, titulo: "Dune", autor: "Frank Herbert", precio: 32000, genero: "Ciencia Ficción", descripcion: "La obra cumbre de la ciencia ficción de todos los tiempos. Ambientada en un desértico planeta donde la lealtad, la especia y el destino del universo colisionan.", imagen: "https://images-na.ssl-images-amazon.com/images/I/41U6v00mEBL._SX322_BO1,204,203,200_QL40_FMwebp_.jpg" },
        { id: 3, titulo: "El Psicoanalista", autor: "John Katzenbach", precio: 28500, genero: "Thriller", descripcion: "Un thriller psicológico brillante e hipnótico donde un psicoanalista recibe un perturbador mensaje el día de su cumpleaños: tiene 15 días para suicidarse o ver morir a su familia.", imagen: "https://images-na.ssl-images-amazon.com/images/I/51AEXq56SlL._SX331_BO1,204,203,200_QL40_FMwebp_.jpg" },
        { id: 4, titulo: "Eloquent JavaScript", autor: "Marijn Haverbeke", precio: 39000, genero: "Programación", descripcion: "Una guía profunda e interactiva para aprender a programar usando JavaScript moderno de una forma elegante y eficiente.", imagen: "https://images-na.ssl-images-amazon.com/images/I/51I9gZ77VDL._SX381_BO1,204,203,200_QL40_FMwebp_.jpg" },
        { id: 5, titulo: "Fundación", autor: "Isaac Asimov", precio: 26000, genero: "Ciencia Ficción", descripcion: "La mítica saga que narra la caída del Imperio Galáctico y los esfuerzos científicos de Hari Seldon para preservar el conocimiento humano mediante la psicohistoria.", imagen: "https://images-na.ssl-images-amazon.com/images/I/41M7d04UunL._SX324_BO1,204,203,200_QL40_FMwebp_.jpg" },
        { id: 6, titulo: "Rayuela", autor: "Julio Cortázar", precio: 21000, genero: "Novela", descripcion: "Una de las obras maestras de la literatura latinoamericana. Un contranovela que ofrece múltiples lecturas a través de las andanzas de Horacio Oliveira.", imagen: "https://images-na.ssl-images-amazon.com/images/I/51lU6v2X20L._SX326_BO1,204,203,200_QL40_FMwebp_.jpg" }
    ];

    // Buscamos el libro convirtiendo el ID de la URL a un tipo número idéntico al de la DB
    const libro = librosDB.find(l => l.id === Number(id));

    if (!libro) {
        return (
            <Container className="mt-5 text-center">
                <h3 className="text-dark fw-bold">Libro no encontrado</h3>
                <Link to="/" className="btn btn-primary mt-3 px-4 shadow-sm">
                    Volver al catálogo
                </Link>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <Link to="/" className="text-decoration-none text-secondary p-0 mb-4 d-inline-flex align-items-center gap-2 link-primary">
                <ArrowLeft /> Volver al catálogo
            </Link>
            
            <Row className="bg-light p-4 rounded shadow-sm g-4 border-0">
                <Col md={4} className="text-center">
                    <img 
                        src={libro.imagen} 
                        alt={libro.titulo} 
                        className="img-fluid rounded shadow-sm" 
                        style={{ maxHeight: '450px', objectFit: 'cover' }} 
                    />
                </Col>
                <Col md={8} className="d-flex flex-column justify-content-center">
                    <span className="badge bg-warning text-dark align-self-start mb-3 fs-6 px-3 py-2 rounded-pill">
                        {libro.genero}
                    </span>
                    <h1 className="fw-bold text-dark mb-1 display-5">{libro.titulo}</h1>
                    <h4 className="text-muted mb-4 fs-5">Por {libro.autor}</h4>
                    <p className="fs-5 text-secondary mb-4" style={{ lineHeight: '1.7' }}>
                        {libro.descripcion}
                    </p>
                    
                    <div className="d-flex align-items-center gap-4 mt-4">
                        <span className="fs-1 fw-bold text-primary">${libro.precio}</span>
                        <Button variant="primary" size="lg" className="d-flex align-items-center gap-2 px-4 py-2 shadow-sm">
                            <CartPlus className="fs-5" /> Agregar al Carrito
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default LibroDetalle;