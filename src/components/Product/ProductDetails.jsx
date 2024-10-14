import React, { useState } from "react";
import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import ProjectGrid from "./ProjectGrid";

// Images
import box from "../../assets/box.png";
import box1 from "../../assets/box (1).png";
import box2 from "../../assets/box (2).png";
import box3 from "../../assets/box (3).png";
import box4 from "../../assets/box (4).png";
import box5 from "../../assets/box (5).png";

const projectsData = [
  {
    title: "Virtual Reality Headset",
    description: "Experience a new dimension of reality",
    image: box,
    category: "UI/UX Design",
  },
  {
    title: "Snack Delivery App",
    description: "Get your snacks delivered at your doorstep",
    image: box1,
    category: "Branding Design",
  },
  {
    title: "Travel Booking Website",
    description: "Welcome to the world of extraordinary travel",
    image: box2,
    category: "UI/UX Design",
  },
  {
    title: "iPhone 14 Pro Mockup",
    description: "Mockups for the latest iPhone 14 Pro",
    image: box3,
    category: "Branding Design",
  },
  {
    title: "Collaborative Time Tracking App",
    description: "A time tracking app for remote teams",
    image: box4,
    category: "UI/UX Design",
  },
  {
    title: "Mockup Scene Generator",
    description: "150+ scenes to boost your presentations",
    image: box5,
    category: "Wordpress",
  },
];

const ProductDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div>
      <Header />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
};

export default ProductDetails;
