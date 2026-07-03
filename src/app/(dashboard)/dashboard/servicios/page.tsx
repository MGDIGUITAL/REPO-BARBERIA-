import React from 'react';

export default function ServiciosPage() {
  return (
    <div className="w-full max-w-7xl mx-auto pt-4 md:pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Servicios y Productos</h1>
        <p className="text-sm text-gray-500">Administra los servicios que ofreces y tu inventario.</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
          <p className="font-medium text-gray-900">Catálogo Administrativo</p>
          <p className="text-sm">En desarrollo para la versión final.</p>
        </div>
      </div>
    </div>
  );
}
