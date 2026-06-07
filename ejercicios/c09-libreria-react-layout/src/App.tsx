import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Catalogo from './pages/Catalogo';
import LibroDetalle from './pages/LibroDetalle';
import Contacto from './Contacto'; // Nuestra vista extra armada en el paso anterior

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* Las 3 rutas bien definidas */}
                    <Route path="/" element={<Catalogo />} />
                    <Route path="/libros/:id" element={<LibroDetalle />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;