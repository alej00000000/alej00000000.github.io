import React from 'react';
import { Link } from 'react-router-dom'; // Para la navegación entre páginas
import { Leaf, UserCircle } from 'lucide-react'; // Iconos de la aplicación

// Componente principal de la barra de navegación
export default function Navbar() {
  return (
    // Contenedor principal de la navegación con fondo blanco y sombra suave
    <nav className="bg-white shadow-soft">
      {/* Contenedor con ancho máximo y padding horizontal */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Contenedor flex para distribuir elementos */}
        <div className="flex justify-between h-16">
          {/* Sección izquierda - Logo */}
          <div className="flex items-center">
            {/* Enlace del logo con icono y texto */}
            <Link to="/" className="flex items-center space-x-2">
              {/* Contenedor del icono con fondo primario y bordes redondeados */}
              <div className="bg-primary rounded-full p-2">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              {/* Texto del logo */}
              <span className="text-xl font-bold text-secondary">Riqueza Local</span>
            </Link>
          </div>

          {/* Sección derecha - Enlaces de navegación */}
          <div className="flex items-center space-x-8">
            {/* Enlace a la página de inicio */}
            <Link to="/" className="text-text-light hover:text-primary transition-colors">Inicio</Link>
            {/* Enlace a la página de productores */}
            <Link to="/producers" className="text-text-light hover:text-primary transition-colors">Productores</Link>
            {/* Enlace al login de administrador */}
            <Link to="/admin/login" className="flex items-center space-x-2 text-text-light hover:text-primary transition-colors">
              <UserCircle className="h-5 w-5" />
              <span>Admin</span>
            </Link>
            {/* Botón de contacto que abre el cliente de correo */}
            <a href="mailto:contact@riquezeloca.com" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}