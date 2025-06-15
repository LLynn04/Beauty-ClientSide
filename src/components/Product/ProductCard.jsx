import React from "react";
import Button from "../Button"; // Adjust the path if needed

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900 text-white rounded-2xl shadow-lg p-4 transition-transform hover:scale-105 hover:shadow-violet-600/40">
      <div className="w-full h-52 bg-zinc-800 overflow-hidden mb-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-fill h-full"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
        <p className="text-violet-300 font-bold text-lg">${product.price}</p>

        <div className="flex justify-between items-center mt-4">
          <Button variant="gradient" size="sm">
            View
          </Button>
          <Button variant="primary" size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
