import React from 'react';

export default function PagosPage() {
  return (
    <div className="w-full max-w-7xl mx-auto pt-4 md:pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Finanzas y Pagos</h1>
        <p className="text-sm text-gray-500">Gestión de ingresos, Mercado Pago y comisiones.</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-medium text-gray-900">Módulo Financiero</p>
          <p className="text-sm">En desarrollo para la integración con Mercado Pago.</p>
        </div>
      </div>
    </div>
  );
}
