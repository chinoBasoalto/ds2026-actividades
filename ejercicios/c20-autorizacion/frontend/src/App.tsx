import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';
import { SinPermiso } from './pages/SinPermiso';
import { AltaLibro } from './components/AltaLibro';
import { Catalogo } from './pages/Catalogo';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div style={{ padding: '0 20px' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/libros" replace />} />
            <Route path="/libros" element={<Catalogo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sin-permiso" element={<SinPermiso />} />

            {/* Ruta restringida únicamente a rol ADMIN */}
            <Route element={<PrivateRoute rolRequerido="ADMIN" />}>
              <Route path="/libros/nuevo" element={<AltaLibro onLibroCreado={() => {}} />} />
            </Route>

            <Route path="*" element={<Navigate to="/libros" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;