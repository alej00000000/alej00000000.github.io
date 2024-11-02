import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-soft">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary rounded-full p-2">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-secondary">Riqueza Loca</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-text-light hover:text-primary transition-colors">Inicio</Link>
            <Link to="/producers" className="text-text-light hover:text-primary transition-colors">Productores</Link>
            <Link to="/admin/login" className="flex items-center space-x-2 text-text-light hover:text-primary transition-colors">
              <UserCircle className="h-5 w-5" />
              <span>Admin</span>
            </Link>
            <a href="mailto:contact@riquezeloca.com" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}