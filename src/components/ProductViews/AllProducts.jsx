import React from "react";
import ProductList from "../Product/ProductList"; // Adjust path if needed

const AllProducts = () => {
  const allProducts = [
    {
      name: "Vitamin C Serum",
      description: "Brightens and evens skin tone with powerful antioxidants.",
      price: 25.99,
      image: "https://skinorea.com/cdn/shop/files/Goodal-Green-Tangerine-Vita-C-Dark-Spot-Serum-40ml_1.jpg?v=1702659445",
    },
    {
      name: "Aloe Vera Gel",
      description: "Soothes and hydrates sensitive skin naturally.",
      price: 14.99,
      image: "https://smytten-image.gumlet.io/discover_product/1617178472_DRIV0060AB1.jpg",
    },
    {
      name: "Hydrating Toner",
      description: "Balances pH and refreshes your skin daily.",
      price: 18.5,
      image: "https://discoverpilgrim.com/cdn/shop/files/First-image_1080x1080_2ca11b4f-9007-48ad-9ea6-10a352c8d9b5.jpg?v=1701864743&width=1080",
    },
    {
      name: "Night Repair Cream",
      description: "Deep hydration and repair while you sleep.",
      price: 30.0,
      image: "https://beauty-garden.hr/cdn/shop/files/139.png?v=1740748050&width=1500",
    },
    {
      name: "Retinol Serum",
      description: "Anti-aging formula for smoother skin.",
      price: 35.0,
      image: "https://i.ebayimg.com/images/g/PtIAAOSwYApnQRd~/s-l400.jpg",
    },
    {
      name: "Face Cleanser",
      description: "Gentle daily cleanser for all skin types.",
      price: 22.0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatd84nvPgnWHmaVUkU2VTv8g1zsuMPaKAVg&s",
    },
    {
      name: "Moisturizing Cream",
      description: "24-hour hydration for dry skin.",
      price: 28.5,
      image: "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw3dbe1533/images/beauty/03-SKINCARE/2023/Skincare-map/CaptureTotale_S123_Duo_Serum_Creme_1850x2000.jpg",
    },
    {
      name: "Eye Cream",
      description: "Reduces dark circles and puffiness.",
      price: 32.0,
      image: "https://stonhartbeauty.com/cdn/shop/products/Vital-C-Hydrating-Facial-Cleanser_394x_b19dfe6a-ef1e-4560-95db-f399adbe08ed_1600x.jpg?v=1647276726",
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          All <span className="text-violet-400">Products</span>
        </h2>
        <ProductList products={allProducts} scrollable={false} />
      </div>
    </section>
  );
};

export default AllProducts;
