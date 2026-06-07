import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BannerPromo from '../Banner';
import LibroCard from '../components/LibroCard';
import type { Libro } from '../types/libro';

function Home() {
    const catálogoLibros: Libro[] = [
        { id: 1, titulo: "Clean Code", autor: "Robert C. Martin", precio: 45000, genero: "Programación", imagen: "https://images-na.ssl-images-amazon.com/images/I/41xSh4314sL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" },
        { id: 2, titulo: "Dune", autor: "Frank Herbert", precio: 32000, genero: "Ciencia Ficción", imagen: "https://images-na.ssl-images-amazon.com/images/I/41U6v00mEBL._SX322_BO1,204,203,200_QL40_FMwebp_.jpg" },
        { id: 3, titulo: "El Psicoanalista", autor: "John Katzenbach", precio: 28500, genero: "Thriller", imagen: "https://images-na.ssl-images-amazon.com/images/I/51AEXq56SlL._SX331_BO1,204,203,200_QL40_FMwebp_.jpg" },
        { id: 4, titulo: "Eloquent JavaScript", autor: "Marijn Haverbeke", precio: 39000, genero: "Programación", imagen: "https://images-na.ssl-images-amazon.com/images/I/51I9gZ77VDL._SX381_BO1,204,203,200_QL40_FMwebp_.jpg" },
        { id: 5, titulo: "Fundación", autor: "Isaac Asimov", precio: 26000, genero: "Ciencia Ficción", imagen: "https://images-na.ssl-images-amazon.com/images/I/41M7d04UunL._SX324_BO1,204,203,200_QL40_FMwebp_.jpg" },
        { id: 6, titulo: "Rayuela", autor: "Julio Cortázar", precio: 21000, genero: "Novela", imagen: "https://images-na.ssl-images-amazon.com/images/I/51lU6v2X20L._SX326_BO1,204,203,200_QL40_FMwebp_.jpg" }
    ];

    return (
        <Container className="mt-4">
            <BannerPromo />
            <h2 className="my-4 text-dark fw-bold position-relative pb-2" style={{ borderBottom: '2px solid #ffc107', width: 'fit-content' }}>
                Nuestro Catálogo
            </h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {catálogoLibros.map((libro) => (
                    <Col key={libro.id}>
                        <LibroCard 
                            titulo={libro.titulo}
                            autor={libro.autor}
                            precio={libro.precio}
                            genero={libro.genero}
                            imagen={libro.imagen}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;