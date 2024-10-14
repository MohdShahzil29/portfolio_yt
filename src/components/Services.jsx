import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { MdOutlineStorefront } from 'react-icons/md';
import { GiClick } from 'react-icons/gi';
import ServiceCard from './ServiceCard'; // Import reusable card

const services = [
  {
    icon: <FaPencilAlt size={40} />,
    title: "Website / App Design UX / UI Design",
    description: "Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design.",
    link: "#",
    bgColor: "bg-blue-500",
    textColor: "text-white",
    linkColor: "text-white"
  },
  {
    icon: <GiClick size={40} />,
    title: "Strategic Marketing and Creative Content",
    description: "Elevating Brands and Engagement through Strategic Marketing and Creative Content.",
    link: "#",
    bgColor: "bg-white",
    textColor: "text-black",
    linkColor: "text-blue-500"
  },
  {
    icon: <MdOutlineStorefront size={40} />,
    title: "Multivendor eCommerce Website Solutions",
    description: "Unlocking the World of Multivendor eCommerce Websites.",
    link: "#",
    bgColor: "bg-white",
    textColor: "text-black",
    linkColor: "text-blue-500"
  }
];

const Services = () => {
  return (
    <div className="flex justify-center mx-auto w-[75rem] items-center p-6 ">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
            bgColor={service.bgColor}
            textColor={service.textColor}
            linkColor={service.linkColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
