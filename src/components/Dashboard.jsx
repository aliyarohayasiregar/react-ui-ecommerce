import React from 'react';
import StatCards from './StatCards';
import RecentOrders from './RecentOrders';
import SalesChart from './SalesChart';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <StatCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <SalesChart />
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard; 