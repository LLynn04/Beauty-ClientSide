import React from "react";
import ProductCard from "./ProductCard"; // Adjust the path if needed

const ProductList = ({ products, scrollable = true }) => {
  if (scrollable) {
    return (
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-6 p-10 px-8 pb-4 min-w-full">
          {products.map((product, idx) => (
            <div key={idx} className="flex-shrink-0 w-72">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Grid layout (non-scrollable)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10">
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
