import React from "react";
import {useState, useEffect} from 'react';
import ProductList from "../Product/ProductList"; // Adjust path if needed
import axios from "axios";
// import { useFetcher } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const url = "https://dummyjson.com/products";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios(url)
        setProducts(data.products)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[])

  const limitedProducts = products.slice(0, 8);

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          All <span className="text-violet-400">Products</span>
        </h2>
        <ProductList products={limitedProducts} scrollable={false} />
      </div>
    </section>
  );
};

export default AllProducts;
