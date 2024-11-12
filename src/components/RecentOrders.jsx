import React from 'react';

const RecentOrders = () => {
  const orders = [
    { id: '#1234', customer: 'John Doe', status: 'Selesai', total: 'Rp 500.000' },
    { id: '#1235', customer: 'Jane Smith', status: 'Proses', total: 'Rp 750.000' },
    { id: '#1236', customer: 'Bob Johnson', status: 'Menunggu', total: 'Rp 300.000' },
  ];

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'selesai': return 'status-selesai';
      case 'proses': return 'status-proses';
      default: return 'status-menunggu';
    }
  };

  return (
    <div className="orders-table">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Pesanan Terbaru</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Pelanggan</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders; 