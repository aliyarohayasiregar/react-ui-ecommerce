import React, { useState } from 'react';
import OrderForm from '../components/OrderForm';

const Orders = () => {
  const [orders, setOrders] = useState([
    { 
      id: '1', 
      customerName: 'John Doe', 
      product: 'Laptop Gaming',
      quantity: 1,
      status: 'Selesai', 
      total: 'Rp 15.000.000',
      date: '2024-03-20'
    },
    // Tambahkan data pesanan lainnya di sini
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  const handleAddOrder = (newOrder) => {
    setOrders([
      ...orders,
      { ...newOrder, id: (orders.length + 1).toString(), date: new Date().toISOString().split('T')[0] }
    ]);
    setShowForm(false);
  };

  const handleEditOrder = (order) => {
    setOrders(orders.map(o => o.id === order.id ? order : o));
    setShowForm(false);
    setEditingOrder(null);
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pesanan ini?')) {
      setOrders(orders.filter(order => order.id !== orderId));
    }
  };

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'selesai': return 'bg-green-100 text-green-800';
      case 'proses': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Pesanan</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Tambah Pesanan
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pelanggan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Produk</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jumlah</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.customerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => {
                        setEditingOrder(order);
                        setShowForm(true);
                      }}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <OrderForm
          onSubmit={editingOrder ? handleEditOrder : handleAddOrder}
          initialData={editingOrder}
          onCancel={() => {
            setShowForm(false);
            setEditingOrder(null);
          }}
        />
      )}
    </div>
  );
};

export default Orders; 