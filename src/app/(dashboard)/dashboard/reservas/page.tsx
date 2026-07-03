import React from 'react';

export default function ReservasPage() {
  return (
    <div className="w-full max-w-7xl mx-auto pt-4 md:pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Reservas</h1>
        <p className="text-sm text-gray-500">Historial completo de reservas y comprobantes.</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <p className="font-medium text-gray-900">Historial de Reservas</p>
          <p className="text-sm">En desarrollo para la versión final.</p>
        </div>
      </div>
    </div>
  );
}
