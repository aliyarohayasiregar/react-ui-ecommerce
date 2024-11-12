import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    profile: {
      name: 'Aliya Rohaya Siregar',
      email: 'admin@example.com',
      phone: '081234567890',
      role: 'Administrator'
    },
    appearance: {
      theme: 'light',
      sidebarColor: 'blue',
      fontSize: 'medium'
    },
    notifications: {
      emailNotifications: true,
      orderNotifications: true,
      stockAlerts: true,
      newsletterUpdates: false
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: '30'
    }
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Implementasi update profile
    alert('Profil berhasil diperbarui');
  };

  const handleAppearanceUpdate = (e) => {
    e.preventDefault();
    // Implementasi update appearance
    alert('Tampilan berhasil diperbarui');
  };

  const handleNotificationUpdate = (key) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: !settings.notifications[key]
      }
    });
  };

  const handleSecurityUpdate = (e) => {
    e.preventDefault();
    // Implementasi update security
    alert('Pengaturan keamanan berhasil diperbarui');
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Pengaturan</h1>

      {/* Profil */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Profil</h2>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama</label>
            <input
              type="text"
              value={settings.profile.name}
              onChange={(e) => setSettings({
                ...settings,
                profile: { ...settings.profile, name: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={settings.profile.email}
              onChange={(e) => setSettings({
                ...settings,
                profile: { ...settings.profile, email: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Telepon</label>
            <input
              type="tel"
              value={settings.profile.phone}
              onChange={(e) => setSettings({
                ...settings,
                profile: { ...settings.profile, phone: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Simpan Profil
          </button>
        </form>
      </div>

      {/* Tampilan */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Tampilan</h2>
        <form onSubmit={handleAppearanceUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tema</label>
            <select
              value={settings.appearance.theme}
              onChange={(e) => setSettings({
                ...settings,
                appearance: { ...settings.appearance, theme: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            >
              <option value="light">Terang</option>
              <option value="dark">Gelap</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Warna Sidebar</label>
            <select
              value={settings.appearance.sidebarColor}
              onChange={(e) => setSettings({
                ...settings,
                appearance: { ...settings.appearance, sidebarColor: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            >
              <option value="blue">Biru</option>
              <option value="green">Hijau</option>
              <option value="purple">Ungu</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ukuran Font</label>
            <select
              value={settings.appearance.fontSize}
              onChange={(e) => setSettings({
                ...settings,
                appearance: { ...settings.appearance, fontSize: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            >
              <option value="small">Kecil</option>
              <option value="medium">Sedang</option>
              <option value="large">Besar</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Simpan Tampilan
          </button>
        </form>
      </div>

      {/* Notifikasi */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Notifikasi</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Notifikasi Email</h3>
              <p className="text-sm text-gray-500">Terima notifikasi melalui email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.emailNotifications}
                onChange={() => handleNotificationUpdate('emailNotifications')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Notifikasi Pesanan</h3>
              <p className="text-sm text-gray-500">Terima notifikasi untuk pesanan baru</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.orderNotifications}
                onChange={() => handleNotificationUpdate('orderNotifications')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Peringatan Stok</h3>
              <p className="text-sm text-gray-500">Terima peringatan ketika stok menipis</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.stockAlerts}
                onChange={() => handleNotificationUpdate('stockAlerts')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Keamanan */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Keamanan</h2>
        <form onSubmit={handleSecurityUpdate} className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Autentikasi Dua Faktor</h3>
              <p className="text-sm text-gray-500">Tingkatkan keamanan akun Anda</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.security.twoFactorAuth}
                onChange={(e) => setSettings({
                  ...settings,
                  security: { ...settings.security, twoFactorAuth: e.target.checked }
                })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Timeout Sesi (menit)</label>
            <select
              value={settings.security.sessionTimeout}
              onChange={(e) => setSettings({
                ...settings,
                security: { ...settings.security, sessionTimeout: e.target.value }
              })}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            >
              <option value="15">15 menit</option>
              <option value="30">30 menit</option>
              <option value="60">1 jam</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Simpan Pengaturan Keamanan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings; 