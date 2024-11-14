import React, { useState } from 'react';
import viewproductbg from "../../../assets/solutionimages/viewproductbg.png";
import mockup1 from "../../../assets/solutionimages/mockup1-min.png";
import mockup2 from "../../../assets/solutionimages/mockup2-min.png";
import mockup3 from "../../../assets/solutionimages/mockup3-min.png";
import mockup4 from "../../../assets/solutionimages/mockup4-min.png";
import mockup5 from "../../../assets/solutionimages/mockup5-min.png";
import mockup6 from "../../../assets/solutionimages/mockup6-min.png";
import mockup7 from "../../../assets/solutionimages/mockup7-min.png";
import mockup8 from "../../../assets/solutionimages/mockup8-min.png";
import mockup9 from "../../../assets/solutionimages/mockup9-min.png";
import mockup10 from "../../../assets/solutionimages/mockup10-min.png";
import mockup11 from "../../../assets/solutionimages/mockup11-min.png";
import mockup12 from "../../../assets/solutionimages/mockup12-min.png";
import htmlIcon from "../../../assets/solutionimages/icons/html.png"; // Replace with actual paths to icons
import phpIcon from "../../../assets/solutionimages/icons/php.png";
import jsIcon from "../../../assets/solutionimages/icons/js.png";
import reactIcon from "../../../assets/solutionimages/icons/react.png";

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
  <div className={`flex ${isOdd ? 'flex-row-reverse' : 'flex-row'} items-center mb-`}> {/* Change mb-10 to mb-6 */}
    <div className="w-1/2 p-6">
      <h2 className="text-5xl">{title}</h2>
      <p className="text-gray-700 text-lg mt-2">{description}</p>
      <h3 className="mt-4 text-3xl">Challenges Accomplished</h3>
      <p className="text-gray-700 text-lg max-w-xl mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
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

  const projects = [
    { title: 'Banquet', description: 'A Banquet Hall At Your Service.', image: mockup1, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
    { title: 'Legweniorn', description: 'Legal Platform for a Legal firm.', image: mockup2, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
    { title: 'Radient Glow', description: 'A Place for all Beauty Product.', image: mockup3, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
    { title: 'Medical', description: 'A Healthcare Platform.', image: mockup4, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
    { title: 'OG Leather', description: 'A place for all Leather needs.', image: mockup5, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
    { title: 'Global Care', description: 'A NGO web Platform.', image: mockup6, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
    { title: 'Fitlife', description: 'A platform for gym and fitness.', image: mockup7, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
    { title: 'Rahul Store', description: 'A online grocery store.', image: mockup8, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
    { title: 'Cycle Wala', description: 'A online platform for Bicycles.', image: mockup9, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
    { title: 'Professional CA', description: 'A website for Charted Accountants (CA).', image: mockup10, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
    { title: 'E-Commerece', description: 'E-commerece platform.', image: mockup11, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
    { title: 'Fliods', description: 'A Food ordering platform.', image: mockup12, technologies: [{ name: 'HTML5', icon: htmlIcon }, { name: 'PHP', icon: phpIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'React', icon: reactIcon }] },
  ];

  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <div className="pt-20 px-20 ">
       <div className="pr-40 pl-40 pb-10 animate-slideInLeft1">
        <img src={viewproductbg} alt="Background" className="w-[100rem] mb-10 max-w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-5xl text-purple-950">Our Portfolio</h1>
        <p className="text-gray-600 text-xl text-center max-w-5xl mx-auto mt-4">Delivering value to multiple industries, we innovate industry-specific technologies to scale and optimize operations and bottom line.</p>
      </div>
     
      <div className=" mb-20 space-y-20 mt-20">
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
        <div className="text-center mb-5 ">
          <button 
            onClick={showMoreProjects} 
            className="bg-purple-950 text-white py-2 px-4 rounded hover:bg-purple-800"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewAllP;
