import React, { useState } from 'react';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('sales');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });

  // Data dummy untuk laporan
  const salesData = [
    { date: '2024-03-20', revenue: 15000000, orders: 25, items: 45 },
    { date: '2024-03-19', revenue: 12500000, orders: 20, items: 38 },
    { date: '2024-03-18', revenue: 18000000, orders: 30, items: 52 },
  ];

  const topProducts = [
    { name: 'Laptop Gaming', sold: 50, revenue: 75000000 },
    { name: 'Smartphone', sold: 45, revenue: 45000000 },
    { name: 'Headphone', sold: 100, revenue: 20000000 },
  ];

  const customerStats = [
    { type: 'Baru', count: 25, percentage: 20 },
    { type: 'Returning', count: 75, percentage: 60 },
    { type: 'Inactive', count: 25, percentage: 20 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Laporan</h1>
        <div className="flex space-x-4">
          <select
            value={selectedReport}
            onChange={(e) => setSelectedReport(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="sales">Penjualan</option>
            <option value="products">Produk</option>
            <option value="customers">Pelanggan</option>
          </select>
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            className="px-4 py-2 border rounded-lg"
          />
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            className="px-4 py-2 border rounded-lg"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Export PDF
          </button>
        </div>
      </div>

      {/* Laporan Penjualan */}
      {selectedReport === 'sales' && (
        <div className="space-y-6">
          {/* Ringkasan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Total Pendapatan</h3>
              <p className="text-2xl font-bold mt-2">Rp 45.500.000</p>
              <p className="text-green-500 text-sm mt-2">+12.5% dari periode sebelumnya</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Total Pesanan</h3>
              <p className="text-2xl font-bold mt-2">75</p>
              <p className="text-green-500 text-sm mt-2">+8.2% dari periode sebelumnya</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">Rata-rata Pesanan</h3>
              <p className="text-2xl font-bold mt-2">Rp 606.666</p>
              <p className="text-green-500 text-sm mt-2">+4.3% dari periode sebelumnya</p>
            </div>
          </div>

          {/* Tabel Detail Penjualan */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Detail Penjualan Harian</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pendapatan</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pesanan</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item Terjual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {salesData.map((day, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">{day.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">Rp {day.revenue.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{day.orders}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{day.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Laporan Produk */}
      {selectedReport === 'products' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Produk Terlaris</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Produk</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Terjual</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pendapatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topProducts.map((product, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.sold}</td>
                    <td className="px-6 py-4 whitespace-nowrap">Rp {product.revenue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Laporan Pelanggan */}
      {selectedReport === 'customers' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Statistik Pelanggan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {customerStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-gray-500">{stat.type}</div>
                  <div className="text-2xl font-bold mt-2">{stat.count}</div>
                  <div className="text-sm text-gray-500">{stat.percentage}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports; 