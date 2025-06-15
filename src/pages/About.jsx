// AboutUs.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-violet-900 to-black py-10 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="md:w-1/2 space-y-">
            <h1 className="text-4xl md:text-6xl font-extrabold text-violet-400 leading-tight">
              About <span className="text-white">Our Brand</span>
            </h1>
            <p className="text-lg text-gray-300">
              Clean. Confident. Skin-first. We’re here to revolutionize skincare
              with nature and science.
            </p>
            <a
              href="/products"
              className="inline-block mt-4 bg-violet-600 hover:bg-violet-500 transition px-6 py-3 rounded-full font-semibold text-white shadow-lg"
            >
              Shop Now
            </a>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2024-06/240610-beauty-awards-2024-skincare-winners-vl-social-91be20.jpg"
              alt="Skincare model"
              className="rounded-2xl shadow-2xl object-cover w-full h-[300px] md:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c4f6ba1e2ccd1ee6075495d/18d24d31-eb8f-43f4-a81e-a29c1168ce99/common-skincare-ingredients.jpg?format=1000w"
            alt="Ingredients"
            className="rounded-xl shadow-lg object-cover w-full h-[400px]"
          />
          <div>
            <h2 className="text-3xl font-bold text-violet-400 mb-4">
              Our Story
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our journey began with frustration—products that didn't work and
              ingredients we couldn’t trust. So we created our own formulas,
              rooted in nature, perfected by science, and made for real people
              with real skin.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Points */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-black via-violet-950 to-black">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "100% Vegan",
                icon: "🌿",
              },
              {
                title: "Cruelty-Free",
                icon: "🐰",
              },
              {
                title: "Science-Backed",
                icon: "🔬",
              },
              {
                title: "No Harsh Chemicals",
                icon: "🚫🧪",
              },
              {
                title: "Sustainable Packaging",
                icon: "📦♻️",
              },
              {
                title: "Made for All Skin Types",
                icon: "💧",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-40 border border-violet-800 rounded-xl p-6 shadow-md hover:scale-105 transition"
              >
                <div className="text-4xl mb-2">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-100">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16 bg-black">
        <h2 className="text-3xl font-bold text-violet-400">
          Join the Glow Revolution
        </h2>
        <p className="text-gray-400 mt-2 mb-6">
          Discover skincare that actually works. For all genders. All tones. All
          skin.
        </p>
        <a
          href="/products"
          className="inline-block bg-violet-600 hover:bg-violet-500 transition px-6 py-3 rounded-full font-medium text-white shadow-lg"
        >
          Explore Our Collection
        </a>
      </section>
      {/* Testimonials */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-violet-400 mb-4">
          What Our Users Say
        </h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-violet-500 pl-4 italic">
            "SBeauty made it so easy to find the right products for my skin. I
            love the personalized recommendations!"
            <br />
            <span className="text-violet-300 font-semibold">– Emily R.</span>
          </blockquote>
          <blockquote className="border-l-4 border-violet-500 pl-4 italic">
            "Booking appointments is a breeze, and the tutorials are super
            helpful!"
            <br />
            <span className="text-violet-300 font-semibold">– Alex T.</span>
          </blockquote>
        </div>
      </section>

      {/* Contact Us */}
      <section>
        <h2 className="text-2xl font-semibold text-violet-400 mb-4">
          Contact Us
        </h2>
        <p>
          Have questions or feedback? Reach out to us at{" "}
          <a
            href="mailto:support@sbeauty.com"
            className="text-violet-300 underline"
          >
            support@sbeauty.com
          </a>
          . We’d love to hear from you!
        </p>
      </section>
    </div>
  );
};

export default About;
