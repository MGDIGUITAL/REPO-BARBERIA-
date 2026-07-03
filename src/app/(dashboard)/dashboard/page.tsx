import React from 'react';

export default function DashboardIndex() {
  return (
    <div className="w-full max-w-7xl mx-auto pt-4 md:pt-6">
      
      {/* MOBILE GREETING (Visible only on mobile) */}
      <div className="md:hidden mb-6">
        <h1 className="text-2xl font-medium text-gray-800 mb-1">Buenos días, <span className="font-bold text-[#FF5A2B]">Carlos</span></h1>
        <p className="text-sm text-gray-500">Aquí tienes el resumen de tu negocio hoy.</p>
      </div>

      {/* KPI CARDS (Horizontal Scroll on Mobile, Grid on Desktop) */}
      <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-6 mb-8 pb-4 md:pb-0 snap-x hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        
        {/* Card 1: Reservas (Orange) */}
        <div className="min-w-[160px] md:min-w-0 snap-center bg-gradient-to-br from-[#FF6B3E] to-[#FF4512] rounded-2xl p-4 md:p-6 text-white shadow-lg shadow-[#FF5A2B]/20 relative overflow-hidden shrink-0">
          <svg className="absolute right-[-10px] bottom-[-20px] opacity-20 w-32 h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <div className="flex justify-between items-start mb-4">
            <span className="font-medium text-white/90">Reservas de hoy</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
          </div>
          <div className="text-5xl font-bold mb-4 relative z-10">18</div>
          <div className="text-sm font-medium flex items-center gap-1 text-white/90">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
            12% vs ayer
          </div>
        </div>

        {/* Card 2: Ingresos */}
        <div className="min-w-[160px] md:min-w-0 snap-center bg-white rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm flex flex-col justify-between shrink-0">
          <div className="flex justify-between items-start mb-4">
            <span className="font-medium text-gray-800">Ingresos del día</span>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-4">$4,850.00</div>
          <div className="text-sm font-medium flex items-center gap-1 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
            15% <span className="text-gray-400 font-normal ml-1">vs ayer</span>
          </div>
        </div>

        {/* Card 3: Clientes Nuevos */}
        <div className="min-w-[160px] md:min-w-0 snap-center bg-white rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm flex flex-col justify-between shrink-0">
          <div className="flex justify-between items-start mb-4">
            <span className="font-medium text-gray-800">Clientes nuevos</span>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-4">7</div>
          <div className="text-sm font-medium flex items-center gap-1 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
            16% <span className="text-gray-400 font-normal ml-1">vs ayer</span>
          </div>
        </div>

        {/* Card 4: Ticket Promedio */}
        <div className="min-w-[160px] md:min-w-0 snap-center bg-white rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm flex flex-col justify-between shrink-0">
          <div className="flex justify-between items-start mb-4">
            <span className="font-medium text-gray-800">Ticket promedio</span>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-4">$269.44</div>
          <div className="text-sm font-medium flex items-center gap-1 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
            8% <span className="text-gray-400 font-normal ml-1">vs ayer</span>
          </div>
        </div>

      </div>

      {/* MID ROW: Ingresos Chart + Agenda de Hoy */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Chart Area */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Ingresos</h2>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-gray-900">$4,850.00</span>
                <span className="text-sm font-medium flex items-center gap-1 text-green-500 bg-green-50 px-2 py-1 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
                  15% vs ayer
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 text-sm text-gray-500">
                 <div className="w-2 h-2 rounded-full bg-[#FF5A2B]"></div>
                 Ingresos
               </div>
               <button className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-50">
                 Hoy
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
               </button>
            </div>
          </div>
          <div className="flex-1 flex items-end justify-between px-2 pt-10 border-b border-gray-100 pb-2 relative h-64">
            {/* Y Axis Mock */}
            <div className="absolute left-0 bottom-2 top-10 flex flex-col justify-between text-xs text-gray-400 font-medium">
              <span>$1.2k</span>
              <span>$900</span>
              <span>$600</span>
              <span>$300</span>
              <span>$0</span>
            </div>
            {/* Chart Bars Mock (Placing them visually) */}
            <div className="w-full h-full flex items-end justify-between pl-10 pr-4">
              {[40, 60, 65, 50, 70, 60, 90, 100, 110, 80, 50].map((height, i) => (
                <div key={i} className="w-5 bg-[#FF5A2B] rounded-t-sm" style={{ height: `${height}%` }}></div>
              ))}
            </div>
          </div>
          {/* X Axis Mock */}
          <div className="flex justify-between pl-12 pr-4 pt-3 text-xs text-gray-400 font-medium">
            <span>08:00</span>
            <span>10:00</span>
            <span>12:00</span>
            <span>14:00</span>
            <span>16:00</span>
            <span>18:00</span>
            <span>20:00</span>
          </div>
        </div>

        {/* Agenda de hoy list */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Agenda de hoy</h2>
            <button className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">Ver agenda</button>
          </div>
          
          <div className="flex flex-col gap-5 flex-1 overflow-y-auto">
            {/* Item 1 */}
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-800 w-10">09:00</span>
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden"><div className="w-full h-full bg-[#111827]"></div></div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Juan Pérez</p>
                  <p className="text-xs text-gray-500">Corte clásico</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-semibold text-green-700 bg-green-50 rounded-md flex items-center gap-1 border border-green-100">
                  Completada <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <button className="text-gray-400 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg></button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-800 w-10">10:30</span>
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden"><div className="w-full h-full bg-[#111827]"></div></div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Luis Hernández</p>
                  <p className="text-xs text-gray-500">Degradado + Barba</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-md flex items-center gap-1 border border-blue-100">
                  En progreso <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <button className="text-gray-400 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg></button>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-800 w-10">12:00</span>
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden"><div className="w-full h-full bg-[#111827]"></div></div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Miguel Torres</p>
                  <p className="text-xs text-gray-500">Corte + Barba + Ceja</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-semibold text-orange-600 bg-orange-50 rounded-md flex items-center gap-1 border border-orange-100">
                  Pendiente <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </span>
                <button className="text-gray-400 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg></button>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-800 w-10">13:30</span>
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden"><div className="w-full h-full bg-[#111827]"></div></div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Andrés López</p>
                  <p className="text-xs text-gray-500">Corte clásico</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-semibold text-orange-600 bg-orange-50 rounded-md flex items-center gap-1 border border-orange-100">
                  Pendiente <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </span>
                <button className="text-gray-400 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
