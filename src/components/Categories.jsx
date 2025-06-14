import React, { useState } from "react";
import { Sparkles, Droplets, Flower2, Palette, Heart, Plus } from "lucide-react";

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Skincare",
      icon: Droplets,
      gradient: "from-violet-500 to-purple-600",
      iconColor: "text-violet-400",
    },
    {
      id: 2,
      name: "Haircare",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-600",
      iconColor: "text-purple-400",
    },
    {
      id: 3,
      name: "Fragrance",
      icon: Flower2,
      gradient: "from-pink-500 to-rose-600",
      iconColor: "text-pink-400",
    },
    {
      id: 4,
      name: "Makeup",
      icon: Palette,
      gradient: "from-rose-500 to-red-600",
      iconColor: "text-rose-400", 
    },
    {
      id: 5,
      name: "Wellness",
      icon: Heart,
      gradient: "from-emerald-500 to-teal-600",
      iconColor: "text-emerald-400",
    },
    {
      id: 6,
      name: "All Products",
      icon: Plus,
      gradient: "from-gray-600 to-gray-700",
      iconColor: "text-gray-400",
    }
  ];

  return (
    <section className="w-full pb-[50px] py-12 bg-black">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Shop by Category
        </h2>
        <p className="text-gray-400 text-base">
          Discover our premium beauty collection
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              className="group relative cursor-pointer transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Icon Circle */}
              <div className="flex flex-col items-center space-y-3">
                <div 
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${category.gradient} p-0.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/25`}
                >
                  <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                    <IconComponent 
                      size={24} 
                      className={`${category.iconColor} transition-all duration-300 group-hover:text-white group-hover:scale-110`} 
                    />
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`} />
                </div>

                {/* Category Name */}
                <div className="text-center">
                  <h3 className="text-white text-sm md:text-base font-semibold group-hover:text-violet-300 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Categories;