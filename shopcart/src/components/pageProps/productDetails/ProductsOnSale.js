import React, { useState } from 'react';
import { FaTh, FaBars } from 'react-icons/fa';
import { SplOfferData } from "../../../constants";

const ProductsOnSale = () => {
  const [view, setView] = useState('grid'); // Default view is grid

  const handleGridView = () => {
    setView('grid');
  };

  const handleListView = () => {
    setView('list');
  };

  return (
    <div>
      {/* Toggle buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <button 
          onClick={handleGridView} 
          style={{ background: view === 'grid' ? '#333' : '#fff', color: view === 'grid' ? '#fff' : '#333', border: '1px solid #ccc', marginRight: '10px' }}>
          <FaTh size={24} />
        </button>
        <button 
          onClick={handleListView} 
          style={{ background: view === 'list' ? '#333' : '#fff', color: view === 'list' ? '#fff' : '#333', border: '1px solid #ccc' }}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Products section */}
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Products on sale
      </h3>

      {/* Render content based on selected view */}
      <div className={view === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex flex-col gap-2'}>
        {SplOfferData.map((item) => (
          <div
            key={item._id}
            className={view === 'grid' ? 'border p-4' : 'flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2'}
          >
            <div>
              <img className="w-24" src={item.img} alt={item.img} />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{item.productName}</p>
              <p className="text-sm font-semibold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
