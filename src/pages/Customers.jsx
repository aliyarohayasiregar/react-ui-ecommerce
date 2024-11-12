import React, { useState } from 'react';
import CustomerForm from '../components/CustomerForm';

const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '08123456789',
      address: 'Jl. Contoh No. 123',
      status: 'Aktif',
      totalOrders: 5
    },
    // Tambahkan pelanggan lainnya di sini
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const handleAddCustomer = (newCustomer) => {
    setCustomers([
      ...customers,
      { ...newCustomer, id: (customers.length + 1).toString(), totalOrders: 0 }
    ]);
    setShowForm(false);
  };

  const handleEditCustomer = (customer) => {
    setCustomers(customers.map(c => c.id === customer.id ? customer : c));
    setShowForm(false);
    setEditingCustomer(null);
  };

  const handleDeleteCustomer = (customerId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pelanggan ini?')) {
      setCustomers(customers.filter(customer => customer.id !== customerId));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Pelanggan</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Tambah Pelanggan
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Telepon</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Pesanan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">#{customer.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      customer.status === 'Aktif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.totalOrders}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => {
                        setEditingCustomer(customer);
                        setShowForm(true);
                      }}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCustomer(customer.id)}
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
        <CustomerForm
          onSubmit={editingCustomer ? handleEditCustomer : handleAddCustomer}
          initialData={editingCustomer}
          onCancel={() => {
            setShowForm(false);
            setEditingCustomer(null);
          }}
        />
      )}
    </div>
  );
};

export default Customers; 