import type { ReactNode } from 'react';
import HeaderLibreria from './HeaderLibreria';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="bg-white min-vh-100 pb-5">
            {/* El menú superior fijo para todo el sitio */}
            <HeaderLibreria />
            
            {/* Acá se va a renderizar la pantalla en la que estemos parados */}
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;