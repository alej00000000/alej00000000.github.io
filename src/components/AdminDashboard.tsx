import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Producer {
  id: number;
  name: string;
  image: string;
  description: string;
  location: string;
}

export default function AdminDashboard() {
  const [producers, setProducers] = useState<Producer[]>([
    {
      id: 1,
      name: 'Finca Orgánica Luna Nueva',
      image: 'https://images.unsplash.com/photo-1595855759920-86582396756a',
      description: 'Especialistas en vegetales orgánicos y hierbas aromáticas.',
      location: 'Valle Central',
    },
    // Add more initial producers here
  ]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  const handleDelete = (id: number) => {
    if (window.confirm('¿Está seguro de eliminar este productor?')) {
      setProducers(producers.filter(producer => producer.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-green-800">Panel Administrativo</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/admin/producer/new')}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Nuevo Productor
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Productor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ubicación
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {producers.map((producer) => (
              <tr key={producer.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={producer.image}
                        alt={producer.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {producer.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{producer.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => navigate(`/admin/producer/edit/${producer.id}`)}
                    className="text-green-600 hover:text-green-900 mr-4"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(producer.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}