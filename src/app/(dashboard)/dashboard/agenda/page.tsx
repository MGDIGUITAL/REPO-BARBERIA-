import React from 'react';

export default function AgendaPage() {
  return (
    <div className="w-full max-w-7xl mx-auto pt-4 md:pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Agenda y reservas</h1>
        <p className="text-sm text-gray-500">Gestiona tus citas, bloqueos y disponibilidad.</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="font-medium text-gray-900">Módulo de Agenda</p>
          <p className="text-sm">En desarrollo para la versión final.</p>
        </div>
      </div>
    </div>
  );
}
