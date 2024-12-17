import React from 'react';
import { Item } from '../types';
import { Tag } from 'lucide-react';

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <span className="flex items-center gap-1">
            <Tag size={16} className="text-gray-500" />
            <span className={`font-medium ${item.price === 'Free' ? 'text-green-600' : 'text-gray-900'}`}>
              {item.price === 'Free' ? 'Free' : `$${item.price}`}
            </span>
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Condition: {item.condition}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
}