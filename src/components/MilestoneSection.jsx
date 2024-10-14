import React from 'react';
import ArrowButton from './ArrowButton';
import MilestoneCard from './MilestoneCard';

const milestones = [
  { number: '8300+', label: 'Handcrafted Projects', description: 'Figma ipsum component variant main layer.' },
  { number: '100%', label: 'Success Rate', description: 'Figma ipsum component variant main layer.' },
  { number: '3.5K', label: 'Happy Clients', description: 'Figma ipsum component variant main layer.' },
  { number: '240+', label: 'Projects Completed', description: 'Figma ipsum component variant main layer.' }
];

const MilestoneSection = () => {
  const handlePrevClick = () => {
    // Logic for handling left arrow click
    console.log('Previous');
  };

  const handleNextClick = () => {
    // Logic for handling right arrow click
    console.log('Next');
  };

  return (
    <section className="bg-blue-500 text-white py-12 relative mt-9">
      {/* Container */}
      <div className="container mx-auto text-center">
        <h2 className="text-lg uppercase mb-4">Our Milestones</h2>
        <h3 className="text-3xl font-bold mb-8">
          What sets our studio apart for your projects?
        </h3>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {milestones.map((milestone, index) => (
            <MilestoneCard
              key={index}
              number={milestone.number}
              label={milestone.label}
              description={milestone.description}
            />
          ))}
        </div>

        {/* Arrow Buttons positioned in the top-right corner */}
        {/* <div className="absolute top-4 right-4 flex gap-4">
          <ArrowButton direction="left" onClick={handlePrevClick} />
          <ArrowButton direction="right" onClick={handleNextClick} />
        </div> */}
      </div>
    </section>
  );
};

export default MilestoneSection;
