import React from "react";
import { Lightbulb } from "lucide-react";

const tips = [
  {
    title: "Cleanse Twice Daily",
    content: "Washing your face in the morning and at night keeps your pores clear and prevents breakouts.",
  },
  {
    title: "Hydration is Key",
    content: "Use a hydrating moisturizer to lock in moisture and keep your skin plump and glowing.",
  },
  {
    title: "Use Sunscreen Daily",
    content: "Even on cloudy days, UV rays can damage your skin. Apply SPF 30 or higher every morning.",
  },
];

const TipSkincare = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Skincare <span className="text-violet-400">Tips & Tricks</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-violet-500 hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-center mb-4">
                <Lightbulb className="text-violet-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{tip.title}</h3>
              <p className="text-gray-300 text-sm">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipSkincare;
