import React from 'react';

export default function ProductosPage() {
  return (
    <div className="w-full max-w-7xl mx-auto pt-4 md:pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Productos</h1>
        <p className="text-sm text-gray-500">Gestiona tu inventario y stock de barbería.</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <p className="font-medium text-gray-900">Inventario de Productos</p>
          <p className="text-sm">En desarrollo para la versión final.</p>
        </div>
      </div>
    </div>
  );
}
