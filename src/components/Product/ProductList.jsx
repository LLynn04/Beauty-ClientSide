import React from "react";
import ProductCard from "./ProductCard"; // Adjust the path if needed

const ProductList = ({ products }) => {
  return (
    <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex gap-6 px-8 pb-4 min-w-full">
        {products.map((product, idx) => (
          <div key={idx} className="flex-shrink-0 w-72">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;