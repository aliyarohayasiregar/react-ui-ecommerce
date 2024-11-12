import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = ({ onClose }) => {
  const menuItems = [
    { title: 'Dashboard', icon: '📊', path: '/' },
    { title: 'Produk', icon: '📦', path: '/products' },
    { title: 'Pesanan', icon: '🛍️', path: '/orders' },
    { title: 'Pelanggan', icon: '👥', path: '/customers' },
    { title: 'Laporan', icon: '📈', path: '/reports' },
    { title: 'Pengaturan', icon: '⚙️', path: '/settings' },
  ];

  return (
    <div className="w-64 h-full bg-gradient-to-b from-blue-800 to-blue-600 text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-blue-700">
        <div className="text-xl font-bold">E-Commerce Admin</div>
        <button 
          onClick={onClose}
          className="lg:hidden p-2 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={() => onClose()} // Tutup sidebar di mobile setelah klik
            className={({ isActive }) => `
              flex items-center space-x-3 px-4 py-3 mx-2 rounded-lg
              transition-colors duration-200
              ${isActive 
                ? 'bg-blue-700 text-white' 
                : 'text-blue-100 hover:bg-blue-700 hover:text-white'}
            `}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-blue-700">
        <div className="flex items-center space-x-3 px-4 py-2 rounded-lg">
          <span className="text-sm text-blue-100">v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar; 