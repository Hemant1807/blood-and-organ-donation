import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { city: 'Mumbai', donations: 400 },
  { city: 'Delhi', donations: 300 },
  { city: 'Bangalore', donations: 500 },
  { city: 'Chennai', donations: 200 },
  { city: 'Hyderabad', donations: 350 },
];

const Graphs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-red-600">Blood Donations by City 📊</h1>
      <ResponsiveContainer width="90%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="donations" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graphs;
