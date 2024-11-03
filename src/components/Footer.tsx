import { Leaf } from 'lucide-react';

// Componente Footer que renderiza el pie de página de la aplicación
export default function Footer() {
  return (
    // Contenedor principal del footer con fondo secundario y texto blanco
    <footer className="bg-secondary text-white">
      {/* Contenedor con ancho máximo y padding */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid de 3 columnas en dispositivos medianos, 1 columna en móviles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          {/* Primera columna - Logo y descripción */}
          <div className="flex flex-col items-center text-center">
            {/* Contenedor del logo */}
            <div className="flex flex-col items-center text-center">
              {/* Círculo con ícono de hoja */}
              <div className="bg-primary rounded-full p-2">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              {/* Nombre de la empresa */}
              <span className="text-xl font-bold">Riqueza Loca</span>
            </div>
            {/* Descripción de la empresa */}
            <p className="mt-4 text-gray-300">
              Conectando productores locales con consumidores conscientes para un futuro sostenible.
            </p>
          </div>
          
          {/* Segunda columna - Información de contacto */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: mmendez@itescam.edu.mx</li>
              <li>Teléfono: +222 222</li>
              <li>Ciudad de Mexico, Mexico</li>
            </ul>
          </div>
          
          {/* Tercera columna - Enlaces de navegación rápida */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {/* Enlaces con efecto hover */}
              <li><a href="/" className="text-gray-300 hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="/producers" className="text-gray-300 hover:text-primary transition-colors">Productores</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-primary transition-colors">Sobre Nosotros</a></li>
            </ul>
          </div>
        </div>
        
        {/* Sección de derechos de autor */}
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          {/* Año dinámico con JavaScript */}
          <p>&copy; {new Date().getFullYear()} Riqueza Local. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}