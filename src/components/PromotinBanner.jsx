import React from 'react';
import { Sparkles, Star, ArrowRight } from 'lucide-react';

const PromotionBanner = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-violet-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-20 h-20 border border-violet-300 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-16 h-16 border border-violet-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-violet-600 rounded-full"></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-16 left-1/4 w-6 h-6 text-violet-400 animate-pulse" />
        <Sparkles className="absolute top-32 right-1/3 w-4 h-4 text-violet-300 animate-pulse delay-300" />
        <Sparkles className="absolute bottom-24 left-1/3 w-5 h-5 text-violet-500 animate-pulse delay-700" />
        <Star className="absolute top-24 right-1/4 w-4 h-4 text-violet-400 animate-pulse delay-500" />
        <Star className="absolute bottom-16 right-1/6 w-3 h-3 text-violet-300 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-violet-900/30 backdrop-blur-sm border border-violet-500/30 rounded-full px-4 py-2 text-sm font-medium text-violet-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Limited Time Offer
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Glow Up Your
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent">
                Beauty Routine
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
              Discover premium skincare and makeup products that enhance your natural beauty. 
              Transform your daily routine with our curated collection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25">
                Shop Now
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-violet-500 hover:bg-violet-500 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Explore Collection
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-400">50%</div>
                <div className="text-sm text-gray-400">Off Selected Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-400">100+</div>
                <div className="text-sm text-gray-400">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-400">24/7</div>
                <div className="text-sm text-gray-400">Beauty Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="relative">
              {/* Main Product Image Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-violet-900/20 to-violet-800/20 rounded-3xl border border-violet-500/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-violet-600 to-violet-700 rounded-full mx-auto flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-violet-300 font-medium">Premium Beauty Products</div>
                </div>
              </div>
              
              {/* Floating Product Cards */}
              <div className="absolute -top-6 -left-6 bg-violet-900/40 backdrop-blur-md border border-violet-500/30 rounded-2xl p-4 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg mb-2"></div>
                <div className="text-xs text-white font-medium">Skincare</div>
                <div className="text-violet-300 text-xs">$29.99</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-violet-900/40 backdrop-blur-md border border-violet-500/30 rounded-2xl p-4 transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-violet-700 rounded-lg mb-2"></div>
                <div className="text-xs text-white font-medium">Makeup</div>
                <div className="text-violet-300 text-xs">$39.99</div>
              </div>
              
              <div className="absolute top-16 -right-8 bg-violet-900/40 backdrop-blur-md border border-violet-500/30 rounded-2xl p-4 transform rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-500 rounded-lg mb-2"></div>
                <div className="text-xs text-white font-medium">Serum</div>
                <div className="text-violet-300 text-xs">$49.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-900/20 to-transparent"></div>
    </div>
  );
};

export default PromotionBanner;