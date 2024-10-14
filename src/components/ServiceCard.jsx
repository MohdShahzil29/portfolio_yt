import React from 'react';

const ServiceCard = ({ icon, title, description, link, bgColor, textColor, linkColor }) => {
  return (
    <div className={`${bgColor} ${textColor} p-6 rounded-lg shadow-md`}>
      <div className="mb-4">
        {icon}
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <a
        href={link}
        className={`${linkColor} underline flex items-center gap-2`}
        aria-label={`Learn more about ${title}`}
      >
        Learn more <span>&#x27A4;</span>
      </a>
    </div>
  );
};

export default ServiceCard;
