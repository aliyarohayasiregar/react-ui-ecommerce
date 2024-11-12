import React, { useState } from 'react';

const OrderForm = ({ onSubmit, initialData, onCancel }) => {
  const [formData, setFormData] = useState(initialData || {
    customerName: '',
    product: '',
    quantity: '',
    total: '',
    status: 'Menunggu'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? 'Edit Pesanan' : 'Tambah Pesanan'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Pelanggan</label>
              <input
                type="text"
                value={formData.customerName}
                onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Produk</label>
              <input
                type="text"
                value={formData.product}
                onChange={(e) => setFormData({...formData, product: e.target.value})}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Jumlah</label>
              <input
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Total</label>
              <input
                type="text"
                value={formData.total}
                onChange={(e) => setFormData({...formData, total: e.target.value})}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              >
                <option value="Menunggu">Menunggu</option>
                <option value="Proses">Proses</option>
                <option value="Selesai">Selesai</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm; 