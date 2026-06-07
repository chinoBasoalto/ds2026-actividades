import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="d-flex flex-column min-vh-100 bg-white">
            {/* 1. Menú superior */}
            <Header />
            
            {/* 2. Contenido dinámico de las páginas */}
            <main className="flex-grow-1 pb-5">
                {children}
            </main>
            
            {/* 3. Pie de página */}
            <Footer />
        </div>
    );
}

export default Layout;