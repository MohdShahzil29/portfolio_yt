import React from "react";

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  const categories = ["All", "UI/UX Design", "Branding Design", "Wordpress"];

  return (
    <div className="flex justify-center space-x-4 py-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 border-2 rounded-full ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "text-blue-500"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
