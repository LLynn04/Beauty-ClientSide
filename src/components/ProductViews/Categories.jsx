import React from "react";
import { Sparkles, Droplets, Flower2, Palette, Heart } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Skincare",
      icon: Droplets,
      gradient: "from-violet-500 to-purple-600",
      iconColor: "text-violet-300",
      image: "https://nectarlife.com/cdn/shop/files/Elite_Pink_World_Group_Shot_1080x1080_5a968571-7450-41ef-81b5-52b26501809d.jpg?v=1717450401",
    },
    {
      id: 2,
      name: "Shampoo & Haircare",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-600",
      iconColor: "text-purple-300",
      image: "https://www.beautygarage.com/cdn/shop/files/Scalp-Sense-Hydra-Sothe-for-Dry-Scalp-combo-pack-of-4.jpg?v=1742465398&width=1000",
    },
    {
      id: 3,
      name: "Fragrance",
      icon: Flower2,
      gradient: "from-pink-500 to-rose-600",
      iconColor: "text-pink-300",
      image: "https://cloudfront-eu-central-1.images.arcpublishing.com/williamreed/XX3RTRBCJ5OXDJ44LBD4VZP344.jpg",
    },
    {
      id: 4,
      name: "Makeup",
      icon: Palette,
      gradient: "from-rose-500 to-red-600",
      iconColor: "text-rose-300",
      image: "https://www.beautycoursesonline.com.au/wp-content/uploads/2024/12/shutterstock_2198190745-1.jpg",
    },
    {
      id: 5,
      name: "All Product",
      icon: Heart,
      gradient: "from-emerald-500 to-teal-600",
      iconColor: "text-emerald-300",
      image: "https://cdn.thewirecutter.com/wp-content/media/2024/12/ROUNDUP-KOREAN-SKINCARE-2048px-9732-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    },
  ];

  return (
    <section className="w-full bg-black py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Shop by Category</h2>
        <p className="text-gray-400 text-base">
          Discover our premium beauty collection
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 px-4 md:px-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-violet-600/40 transition-all duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-30 group-hover:opacity-60 transition-all`}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-40 p-4 text-white rounded-2xl space-y-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/50">
                  <Icon
                    size={26}
                    className={`${category.iconColor} group-hover:text-white transition-all duration-300`}
                  />
                </div>
                <h3 className="text-sm font-bold group-hover:text-violet-200 transition-all">
                  {category.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
