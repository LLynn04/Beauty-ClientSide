import React from "react";
import { Star } from "lucide-react";
import Button from "../Button";

const ProductCard = ({ product }) => {
  const renderStars = () => {
    const stars = [];
    const rating = Math.round(product.rating || 0);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-violet-500 text-violet-500" : "text-gray-600"
          }`}
        />
      );
    }
    return stars;
  };

  const { id, brand, images, description, price } = product;

  return (
    <div
      key={id}
      className="bg-zinc-900 text-white rounded-2xl shadow-xl p-4 hover:shadow-violet-700/50 hover:scale-[1.03] transition-all duration-300 border border-zinc-800"
    >
      <div className="w-full h-52 bg-zinc-800 rounded-xl overflow-hidden mb-4 flex items-center justify-center relative">
        <img
          src={Array.isArray(images) ? images[0] : images}
          alt={brand}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-2 right-2 bg-violet-600 text-xs px-2 py-0.5 rounded-full font-medium shadow-md">
          ${price}
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white tracking-wide">{brand}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{description}</p>

        <div className="flex items-center space-x-1 mt-2">{renderStars()}</div>

        <div className="flex justify-between items-center mt-4">
          <Button variant="gradient" size="sm" className="bg-violet-700 hover:bg-violet-800">
            View
          </Button>
          <Button variant="primary" size="sm" className="text-black hover:bg-gray-100">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
