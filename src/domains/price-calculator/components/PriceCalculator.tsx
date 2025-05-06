import React, { useState } from 'react';
import { prices } from '../models/prices';

interface PriceCalculatorProps {
  onAddToCart: (procedure: string, cashPrice: number, monthlyPrice: number) => void;
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({ onAddToCart }) => {
  const [selectedType, setSelectedType] = useState<'RESIDENCIAL' | 'COMERCIAL'>('RESIDENCIAL');

  const handleTypeChange = (newType: 'RESIDENCIAL' | 'COMERCIAL') => {
    setSelectedType(newType);
  };

  return (
    <div className="flex flex-col h-full">  
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            selectedType === 'RESIDENCIAL' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTypeChange('RESIDENCIAL')}
        >
          RESIDENCIAL
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedType === 'COMERCIAL' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTypeChange('COMERCIAL')}
        >
          COMERCIAL
        </button>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {prices[selectedType].map((item) => (
          <div
            key={item.name}
            onClick={() => onAddToCart(item.name, item.cashPrice, item.monthlyPrice)}
            className="cursor-pointer border p-3 rounded hover:bg-blue-50 transition"
          >
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">
              ${item.cashPrice.toLocaleString()} total / ${item.monthlyPrice.toLocaleString()} x10 meses
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCalculator;
