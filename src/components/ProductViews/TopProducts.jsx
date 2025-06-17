import React from "react";
import ProductList from "../Product/ProductList"; // adjust path
import { useState, useEffect } from "react";

const TopProduct = () => {
    const [product, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://dummyjson.com/products";
      try {
        const response = await fetch(url);
        const data = await response.json();

        const topRated = data.products.filter((p) => p.rating >= 3);
        setProducts(topRated);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Top Products
        </h2>
        <ProductList key={product.id} products={product} scrollable />
      </div>
    </section>
  );
};

export default TopProduct;
