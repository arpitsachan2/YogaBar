// components/ShopCategory.jsx
import React from 'react';

const categories = [
  { name: 'Men', img: '/images/men.jpg' },
  { name: 'Women', img: '/images/women.jpg' },
  { name: 'Kids', img: '/images/kids.jpg' },
  { name: 'Accessories', img: '/images/accessories.jpg' },
];

const ShopCategory = () => {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#E33675]">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-[30vw] md:h-[15vw] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl md:text-2xl font-semibold">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
