import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

const producers = [
  {
    id: 1,
    name: 'Finca Orgánica Luna Nueva',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800',
    description: 'Especialistas en vegetales orgánicos y hierbas aromáticas.',
    location: 'Valle Central',
    phone: '+506 2222-3333'
  },
  {
    id: 2,
    name: 'Granja Sostenible El Sol',
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800',
    description: 'Producción de frutas tropicales y miel orgánica.',
    location: 'Guanacaste',
    phone: '+506 2222-4444'
  },
  {
    id: 3,
    name: 'Cooperativa Verde Vida',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    description: 'Productos lácteos artesanales y huevos de pastoreo.',
    location: 'Cartago',
    phone: '+506 2222-5555'
  }
];

export default function Producers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-secondary mb-8">
        Nuestros Productores
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {producers.map((producer) => (
          <Link
            key={producer.id}
            to={`/producer/${producer.id}`}
            className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={producer.image}
                alt={producer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-secondary mb-2">{producer.name}</h2>
              <p className="text-text-light mb-4">{producer.description}</p>
              <div className="flex items-center text-text-light space-x-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-primary mr-1" />
                  <span>{producer.location}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-primary mr-1" />
                  <span>{producer.phone}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}