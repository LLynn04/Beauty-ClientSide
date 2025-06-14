import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Premium Skincare Products",
      subtitle: "Radiant Skin Starts Here",
      description: "Discover our curated collection of premium skincare products for every skin type and concern.",
      buttonText: "Shop Now",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrOErjbcu51EHVla5cbcewreSBtnrkhOKaw&s",
      gradient: "from-violet-600 to-purple-800"
    },
    {
      id: 2,
      title: "Clinical-Grade Formulas",
      subtitle: "Science Meets Beauty",
      description: "Advanced skincare solutions with proven ingredients for visible results you can trust.",
      buttonText: "Browse Products",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIQWNGALMOwzp1L5QAXzU-k1M0REDE6Z8uw&s",
      gradient: "from-violet-500 to-indigo-700"
    },
    {
      id: 3,
      title: "Your Perfect Routine",
      subtitle: "Personalized Skincare",
      description: "Find the perfect skincare routine tailored to your unique skin needs and goals.",
      buttonText: "Find My Routine",
      image: "https://media.istockphoto.com/id/487770577/photo/makeup-set-on-table-front-view.jpg?s=612x612&w=0&k=20&c=IS_ZuHCF3N66jhDMwt2s7J_PGWABlpv2ISEAwpJ4JKU=",
      gradient: "from-purple-600 to-violet-800"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[500px] pb-[50px] overflow-hidden rounded-2xl bg-black">
          {/* Slides Container */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-80`} />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full px-8">
                <div className="text-center max-w-4xl mx-auto">
                  {/* Decorative Elements */}
                  <div className="flex justify-center mb-4">
                    <Sparkles className="text-violet-400 w-8 h-8 animate-pulse" />
                  </div>

                  {/* Subtitle */}
                  <p className="text-violet-300 text-sm sm:text-base md:text-lg font-medium mb-4 tracking-wider uppercase">
                    {slide.subtitle}
                  </p>

                  {/* Main Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/25">
                      {slide.buttonText}
                    </button>
                    <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-full transition-all duration-300">
                      View Catalog
                    </button>
                  </div>

                  {/* Rating/Reviews */}
                  <div className="flex justify-center items-center mt-6 space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-400 ml-2">4.9/5 from 2,500+ customers</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-violet-500 scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300 ease-linear"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>

          {/* Floating Stats */}
          <div className="absolute top-1/4 right-4 sm:right-8 z-20 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-1">2500+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
          </div>

          <div className="absolute bottom-1/4 left-4 sm:left-8 z-20 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-1">200+</div>
              <div className="text-gray-300 text-sm">Products</div>
            </div>
          </div>
    </section>
  );
};

export default Banner;