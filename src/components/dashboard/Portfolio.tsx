import React from 'react';
import { PieChart, IndianRupee, TrendingUp } from 'lucide-react';

export function Portfolio() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Your Portfolio</h2>
        <button className="text-blue-600 text-sm font-medium">View All</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <IndianRupee className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Total Investment</p>
              <p className="text-xl font-bold">₹5,25,000</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Current Value</p>
              <p className="text-xl font-bold">₹6,12,500</p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <PieChart className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-sm text-gray-600">Total Returns</p>
              <p className="text-xl font-bold text-green-600">+16.67%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}