import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ArrowButton = ({ direction, onClick }) => {
  const isLeft = direction === 'left';
  return (
    <button
      onClick={onClick}
      className=" bg-gray-100 mt-4 p-3 rounded-full text-blue-500  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label={isLeft ? 'Previous' : 'Next'}
    >
      {isLeft ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
};

export default ArrowButton;
