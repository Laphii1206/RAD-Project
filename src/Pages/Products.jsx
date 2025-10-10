import React from 'react'
import cabbageImg from '../assets/cabbage.jpg'
import { products } from '../data/products';


function Products() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-center text-3xl font-bold mb-8 mt-20">Our Products</h2>

      <div className="grid  gap-y-10 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a
            key={product.id}
            href={product.href}
            className="group w-full max-w-[225px] rounded-lg border-2 border-white overflow-hidden hover:border-gray-300 transition-colors p-0"
          >
            <div className="w-full h-[160px] text-white overflow-hidden text-center">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="block w-full h-full object-cover"
              />
            </div>

            <div className="px-3 py-2">
              <h3 className="text-center text-white text-sm">{product.name}</h3>
              <p className="text-center text-white text-lg font-medium">{product.size}g - {product.price}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Products
