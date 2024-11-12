import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Laptop Gaming',
      category: 'Elektronik',
      price: 15000000,
      stock: 10,
      description: 'Laptop gaming dengan performa tinggi',
      image: 'https://via.placeholder.com/300' // Contoh gambar default
    },
    // Tambahkan produk lainnya di sini
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = (newProduct) => {
    setProducts([
      ...products,
      { ...newProduct, id: (products.length + 1).toString() }
    ]);
    setShowForm(false);
  };

  const handleEditProduct = (product) => {
    setProducts(products.map(p => p.id === product.id ? product : p));
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      setProducts(products.filter(product => product.id !== productId));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Produk</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Tambah Produk
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Image Container */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={product.image || 'https://via.placeholder.com/300'}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {product.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold">Rp {product.price.toLocaleString()}</span>
                <span className="text-gray-500">Stok: {product.stock}</span>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setEditingProduct(product);
                    setShowForm(true);
                  }}
                  className="text-blue-600 hover:text-blue-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <ProductForm
          onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
          initialData={editingProduct}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default Products; 