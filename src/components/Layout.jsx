import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Hamburger Menu untuk Mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Overlay untuk mobile ketika sidebar terbuka */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          sidebarOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar dengan responsive state */}
      <div
        className={`fixed inset-y-0 left-0 transform lg:transform-none lg:opacity-100 lg:relative lg:flex
          ${sidebarOpen ? 'translate-x-0 opacity-100 z-40' : '-translate-x-full opacity-0 lg:opacity-100'}
          transition duration-200 ease-in-out`}
      >
        <SideBar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content dengan padding yang menyesuaikan */}
      <main className="flex-1 w-full lg:-ml-8">
        <div className="min-h-screen px-8 py-8 lg:px-16 pt-20 lg:pt-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;