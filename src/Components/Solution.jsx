import React from 'react';

const Solution = () => {
  const solutions = [
    'Enterprise Applications', 'ERP', 'Financial Management', 'Supply Chain Management',
    'Asset Management', 'Fleet Management', 'HR Software', 'ELearning Software',
    'ECommerce', 'Mobile Apps', 'Content Management', 'Document Management',
    'CRM', 'Marketing & Advertising', 'Web Portals', 'Data Analytics'
  ];

  return (
    <div className="w-full mt-40 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-8 text-center">Innovation, Tailored for you</h1>
      <p className="text-center text-xl mb-8 text-gray-500">Innovating with future-proof software to enhance operational efficiency.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-4 sm:px-10">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-2 border-purple-950 rounded-full p-4 transition-colors hover:bg-purple-950 hover:text-white"
          >
            <span>{solution}</span>
            <span className="ml-4 text-white bg-purple-950 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solution;
