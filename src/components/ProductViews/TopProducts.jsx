import React from "react";
import ProductList from "../Product/ProductList"; // adjust path

const TopProduct = () => {
  const topProducts = [
    {
      name: "Vitamin C Serum",
      description: "Brightens and evens skin tone.",
      price: 25.99,
      image: "https://skinorea.com/cdn/shop/files/Goodal-Green-Tangerine-Vita-C-Dark-Spot-Serum-40ml_1.jpg?v=1702659445",
    },
    {
      name: "Aloe Vera Gel",
      description: "Soothes and hydrates sensitive skin.",
      price: 14.99,
      image: "https://smytten-image.gumlet.io/discover_product/1617178472_DRIV0060AB1.jpg",
    },
    {
      name: "Hydrating Toner",
      description: "Balances pH and refreshes your skin.",
      price: 18.5,
      image: "https://discoverpilgrim.com/cdn/shop/files/First-image_1080x1080_2ca11b4f-9007-48ad-9ea6-10a352c8d9b5.jpg?v=1701864743&width=1080",
    },
    {
      name: "Night Repair Cream",
      description: "Deep hydration while you sleep.",
      price: 30.0,
      image: "https://beauty-garden.hr/cdn/shop/files/139.png?v=1740748050&width=1500",
    },
    {
      name: "Night Repair Cream",
      description: "Deep hydration while you sleep.",
      price: 30.0,
      image: "https://i.ebayimg.com/images/g/PtIAAOSwYApnQRd~/s-l400.jpg",
    },
    {
      name: "Night Repair Cream",
      description: "Deep hydration while you sleep.",
      price: 30.0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatd84nvPgnWHmaVUkU2VTv8g1zsuMPaKAVg&s",
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
           Top Products
        </h2>
        <ProductList products={topProducts} />
      </div>
    </section>
  );
};

export default TopProduct;
