import React from "react";
import ProductList from "../Product/ProductList"; // adjust path
import { useState, useEffect } from "react";
import axios from "axios";

const TopProduct = () => {
  const [product, setProducts] = useState([]);
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios(url)
        const topRated = data.products
        .filter((p) => p.rating >= 3)
        .map((item) => ({
          ...item,
          name:item.brand || item.fregrance || item.title || "unnamed" ,
        }))
        setProducts(topRated)
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
