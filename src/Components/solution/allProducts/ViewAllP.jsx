import React, { useState } from 'react';
import viewproductbg from "../../../assets/solutionimages/viewproductbg.png";
import mockup1 from "../../../assets/solutionimages/mockup1.png";
import mockup2 from "../../../assets/solutionimages/mockup2.png";
import mockup3 from "../../../assets/solutionimages/mockup3.png";
import htmlIcon from "../../../assets/solutionimages/icons/html_icon.png"; // Replace with actual paths to icons
import phpIcon from "../../../assets/solutionimages/icons/php_icon.png";
import jsIcon from "../../../assets/solutionimages/icons/js_icon.png";

// const ProjectCard = ({ title, description, image, technologies, isOdd }) => (
//   <div className={`flex ${isOdd ? 'flex-row-reverse' : 'flex-row'} items-center mb-10`}>
//     <div className="w-1/2 p-6">
//       <h2 className="text-xl font-bold">{title}</h2>
//       <p className="text-gray-700 mt-2">{description}</p>
//       <h3 className="mt-4 font-semibold">Challenges Accomplished</h3>
//       <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
//       <h3 className="mt-4 font-semibold">Technology</h3>
//       <div className="flex items-center mt-2 space-x-4">
//         {technologies.map((tech, index) => (
//           <img key={index} src={tech.icon} alt={tech.name} className="h-10 w-10" />
//         ))}
//       </div>
//     </div>
//     <div className="w-1/2">
//       <img src={image} alt="Project Mockup" className="w-full" />
//     </div>
//   </div>
// );

const ProjectCard = ({ title, description, image, technologies, isOdd }) => (
  <div className={`flex ${isOdd ? 'flex-row-reverse' : 'flex-row'} items-center mb-6`}> {/* Change mb-10 to mb-6 */}
    <div className="w-1/2 p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <h3 className="mt-4 font-semibold">Challenges Accomplished</h3>
      <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      <h3 className="mt-4 font-semibold">Technology</h3>
      <div className="flex items-center mt-2 space-x-4">
        {technologies.map((tech, index) => (
          <img key={index} src={tech.icon} alt={tech.name} className="h-10 w-10" />
        ))}
      </div>
    </div>
    <div className="w-1/2">
      <img src={image} alt="Project Mockup" className="w-full" />
    </div>
  </div>
);

const ViewAllP = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  // Array with 15 unique project titles, descriptions, and technologies
  const projects = [
    { title: 'Project 1', description: 'Description for project 1', image: mockup1, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 2', description: 'Description for project 2', image: mockup2, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 3', description: 'Description for project 3', image: mockup3, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 4', description: 'Description for project 4', image: mockup2, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 5', description: 'Description for project 5', image: mockup3, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 6', description: 'Description for project 6', image: mockup2, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 7', description: 'Description for project 7', image: mockup3, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 8', description: 'Description for project 8', image: mockup2, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 9', description: 'Description for project 9', image: mockup3, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 10', description: 'Description for project 10', image: mockup2, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 11', description: 'Description for project 11', image: mockup3, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 12', description: 'Description for project 12', image: mockup2, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 13', description: 'Description for project 13', image: mockup3, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 14', description: 'Description for project 14', image: mockup2, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
    { title: 'Project 15', description: 'Description for project 15', image: mockup3, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }] },
  ];

  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <div className="pt-20 px-20 animate-slideInLeft1">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-purple-700">Our Portfolio</h1>
        <p className="text-gray-600 mt-4">Delivering value to multiple industries, we innovate industry-specific technologies to scale and optimize operations and bottom line.</p>
      </div>
      <div className="pr-40 pl-40 pt-20">
        <img src={viewproductbg} alt="Background" className="w-[100rem] max-w-full" />
      </div>
      <div className="mt-8">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            isOdd={index % 2 === 1}
          />
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="text-center mt-8">
          <button 
            onClick={showMoreProjects} 
            className="bg-purple-700 text-white font-bold py-2 px-4 rounded hover:bg-purple-800"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewAllP;
