import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook, History, Building2, Briefcase, Users } from 'lucide-react';
import PurchaseModal from '../components/PurchaseModal';

const producersData = {
  1: {
    name: 'Finca Orgánica Luna Nueva',
    legalRep: 'María González',
    mission: 'Producir alimentos orgánicos de la más alta calidad, respetando la tierra y sus ciclos naturales.',
    vision: 'Ser líderes en la producción orgánica sostenible, inspirando a otros a adoptar prácticas agrícolas responsables.',
    schedule: 'Lunes a Sábado: 7:00 AM - 4:00 PM',
    location: 'Valle Central, Costa Rica',
    type: 'Agricultura Orgánica',
    organization: 'Cooperativa',
    products: [
      {
        name: 'Vegetales Orgánicos',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800'
      },
      {
        name: 'Hierbas Aromáticas',
        image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&q=80&w=800'
      },
      {
        name: 'Frutas Tropicales',
        image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=800'
      }
    ],
    phone: '+506 2222-3333',
    social: {
      instagram: '@fincalunanueva',
      facebook: '/fincalunanueva'
    },
    history: 'Fundada en 2010, Finca Orgánica Luna Nueva comenzó como un pequeño proyecto familiar con la visión de producir alimentos saludables y sostenibles. A lo largo de los años, hemos crecido manteniendo nuestro compromiso con la agricultura orgánica y las prácticas regenerativas.',
    mainImage: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800'
  },
  2: {
    name: 'Granja Sostenible El Sol',
    legalRep: 'Carlos Ramírez',
    mission: 'Ofrecer productos orgánicos de calidad superior mientras preservamos nuestro entorno natural.',
    vision: 'Convertir la agricultura sostenible en el estándar de producción en nuestra región.',
    schedule: 'Lunes a Viernes: 6:00 AM - 5:00 PM',
    location: 'Guanacaste, Costa Rica',
    type: 'Agricultura Sostenible',
    organization: 'Empresa Familiar',
    products: [
      {
        name: 'Miel Orgánica',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800'
      },
      {
        name: 'Frutas Tropicales',
        image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=800'
      }
    ],
    phone: '+506 2222-4444',
    social: {
      instagram: '@granjasol',
      facebook: '/granjaelsol'
    },
    history: 'Granja El Sol nació en 2015 con la misión de demostrar que la agricultura sostenible puede ser tanto productiva como rentable. Comenzamos con la producción de miel y gradualmente expandimos a frutas tropicales.',
    mainImage: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800'
  },
  3: {
    name: 'Cooperativa Verde Vida',
    legalRep: 'Ana Jiménez',
    mission: 'Producir alimentos saludables mientras creamos oportunidades para nuestra comunidad.',
    vision: 'Ser un modelo de cooperativismo agrícola sostenible en Costa Rica.',
    schedule: 'Lunes a Sábado: 8:00 AM - 3:00 PM',
    location: 'Cartago, Costa Rica',
    type: 'Agricultura Mixta',
    organization: 'Cooperativa',
    products: [
      {
        name: 'Lácteos Artesanales',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800'
      },
      {
        name: 'Huevos de Pastoreo',
        image: 'https://images.unsplash.com/photo-1569288052389-dac9b0ac9efd?auto=format&fit=crop&q=80&w=800'
      }
    ],
    phone: '+506 2222-5555',
    social: {
      instagram: '@verdevida',
      facebook: '/coopverdevida'
    },
    history: 'Cooperativa Verde Vida se formó en 2018 cuando un grupo de pequeños productores decidió unirse para fortalecer su presencia en el mercado. Hoy somos un ejemplo de trabajo colaborativo.',
    mainImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'
  }
};

export default function ProducerDetail() {
  const { id } = useParams();
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  
  const producer = producersData[Number(id)];

  if (!producer) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-secondary">Productor no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="bg-accent min-h-screen pb-16">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={producer.mainImage}
          alt={producer.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">{producer.name}</h1>
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {producer.location}
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                {producer.phone}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Misión</h3>
                  <p className="text-text-light">{producer.mission}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Visión</h3>
                  <p className="text-text-light">{producer.vision}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-semibold text-secondary mb-4 flex items-center">
                  <History className="h-5 w-5 mr-2 text-primary" />
                  Reseña Histórica
                </h3>
                <p className="text-text-light">{producer.history}</p>
              </div>
            </div>

            {/* Products Section */}
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">Nuestros Productos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {producer.products.map((product, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-soft">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-secondary">{product.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <button
                onClick={() => setIsPurchaseModalOpen(true)}
                className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors mb-6"
              >
                Comprar Productos
              </button>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-secondary mb-2 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Horario
                  </h3>
                  <p className="text-text-light">{producer.schedule}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-secondary mb-2 flex items-center">
                    <Building2 className="h-5 w-5 mr-2 text-primary" />
                    Información
                  </h3>
                  <div className="space-y-2 text-text-light">
                    <p>Representante: {producer.legalRep}</p>
                    <p>Tipo: {producer.type}</p>
                    <p>Organización: {producer.organization}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-secondary mb-2">Redes Sociales</h3>
                  <div className="flex space-x-4">
                    <a
                      href={`https://instagram.com${producer.social.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href={`https://facebook.com${producer.social.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        producer={producer}
      />
    </div>
  );
}