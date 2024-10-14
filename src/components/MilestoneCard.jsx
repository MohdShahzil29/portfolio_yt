import React from 'react';

const MilestoneCard = ({ number, label, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-4xl font-bold text-gray-900 mb-2">{number}</h3>
      <p className="text-lg font-semibold text-gray-700">{label}</p>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default MilestoneCard;
