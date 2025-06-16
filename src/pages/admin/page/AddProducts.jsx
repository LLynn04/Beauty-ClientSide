import React, { useState } from "react";

const AddProducts = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Product Created:\nName: ${formData.name}`);
    setFormData({ name: "", description: "", price: "", category: "" });
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl border border-violet-800 p-10 text-white transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-violet-400 mb-6 text-center drop-shadow-sm tracking-wide">
          ✨ Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-semibold tracking-wide">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ex: Lip Gloss"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold tracking-wide">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Write product details..."
              className="w-full px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
            />
          </div>

          <div className="flex gap-6 flex-col sm:flex-row">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold tracking-wide">Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                step="0.01"
                placeholder="0.00"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-2 text-sm font-semibold tracking-wide">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Ex: Skin Care"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold tracking-wider transition-all duration-300 shadow-lg hover:shadow-violet-700/50"
          >
            + Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
