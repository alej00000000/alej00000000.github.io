import { ArrowRight, Leaf, Users, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundCarousel from '../components/BackgroundCarousel';

export default function Home() {
  const features = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: 'Productos Orgánicos',
      description: 'Alimentos frescos y saludables cultivados de manera sostenible.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Productores Locales',
      description: 'Apoyo directo a agricultores y productores de nuestra comunidad.'
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: 'Compra Directa',
      description: 'Conectamos consumidores directamente con los productores.'
    }
  ];

  return (
    <div className="leaf-pattern">
      {/* Hero Section */}
      <section className="relative h-screen">
        <BackgroundCarousel />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Riqueza Loca
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Conectando productores locales con consumidores conscientes
            </p>
            <Link
              to="/producers"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
            >
              Ver Productores
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-primary rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">{feature.title}</h3>
                <p className="text-text-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Producer Showcase */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-secondary">
            Nuestros Productores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800"
                alt="Productor 1"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl">Finca Orgánica Luna Nueva</h3>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800"
                alt="Productor 2"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl">Granja Sostenible El Sol</h3>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
                alt="Productor 3"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl">Cooperativa Verde Vida</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}