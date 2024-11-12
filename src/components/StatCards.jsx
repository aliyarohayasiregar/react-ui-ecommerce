import React from 'react';

const StatCards = () => {
  const stats = [
    { title: 'Total Pendapatan', value: 'Rp 15.000.000', icon: '💰', trend: '+12.5%' },
    { title: 'Pesanan Baru', value: '25', icon: '📦', trend: '+5.0%' },
    { title: 'Pelanggan Baru', value: '12', icon: '👥', trend: '+2.5%' },
    { title: 'Produk Terjual', value: '150', icon: '🛍️', trend: '+8.0%' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card p-4 lg:p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm lg:text-base text-gray-600">{stat.title}</p>
              <p className="text-xl lg:text-2xl font-bold mt-1 lg:mt-2">{stat.value}</p>
              <p className="text-sm text-green-500 mt-1 lg:mt-2">{stat.trend}</p>
            </div>
            <span className="text-2xl lg:text-3xl">{stat.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards; 