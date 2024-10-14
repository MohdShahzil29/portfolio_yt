import React from "react";

const ProjectGrid = ({ projects }) => {
  return (
    // width: 86rem;
    // margin: auto;
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 w-[86rem] mx-auto">
      {projects.map((project, index) => (
        <div key={index} className="shadow-sm rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
