import React, { useState } from "react";
import ArrowButton from "./ArrowButton"; // Assuming ArrowButton is in the same folder

// Import images from your assets folder
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

// Data for testimonials
const testimonials = [
  {
    name: "Savannah Nguyen",
    position: "President of Sales",
    image: image1,
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas.",
  },
  {
    name: "Jenny Wilson",
    position: "Medical Assistant",
    image: image2,
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Tortor odio purus morbi amet.",
  },
  {
    name: "Esther Howard",
    position: "Nursing Assistant",
    image: image3,
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Purus commodo id id ut ultricies aliquam.",
  },
  {
    name: "Cameron Williamson",
    position: "Marketing Coordinator",
    image: image4,
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Eu velit tellus pellentesque tincidunt arcu.",
  },
];

// TestimonialCard component
const TestimonialCard = ({ testimonial, isHighlighted }) => (
  <div
    className={`flex flex-col items-center p-6 rounded-lg shadow-lg ${
      isHighlighted ? "bg-blue-500 text-white" : "bg-white text-gray-900"
    }`}
  >
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-20 h-20 rounded-full mb-4"
    />
    <div className="flex space-x-1 mb-2">
      {Array(testimonial.rating)
        .fill()
        .map((_, index) => (
          <span key={index} className="text-yellow-500">
            ⭐
          </span>
        ))}
    </div>
    <p className="text-center text-sm mb-4">{testimonial.feedback}</p>
    <h4 className="font-bold">{testimonial.name}</h4>
    <p className="text-sm">{testimonial.position}</p>
  </div>
);

// TestimonialSection component
const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-center">
      {/* <h2 className="text-center text-3xl font-semibold mb-6">The Trust From Clients</h2> */}
      <p className="text-blue-600 mt-3">Testimonials</p>
      <h1 className="text-4xl font-bold mt-3">The Trust From Clients</h1>
      <div className="flex justify-center items-center space-x-4 mt-10">
        {/* Left Arrow Button */}
        <ArrowButton direction="left" onClick={prevSlide} />

        {/* Testimonial Cards */}
        <div className="grid grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isHighlighted={index === currentIndex}
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <ArrowButton direction="right" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default TestimonialSection;
