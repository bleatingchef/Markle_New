import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(2);

  const testimonials = [
    {
      name: "Vipin",
      position: "Co Founder - Creative Hub",
      image: "/api/placeholder/400/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "hemann",
      position: "Co Founder - Creative Hub",
      image: "/api/placeholder/400/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "himanshu",
      position: "Co Founder - Creative Hub",
      image: "/api/placeholder/400/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "vicky",
      position: "Co Founder - Creative Hub",
      image: "/api/placeholder/400/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "durgesh",
      position: "Co Founder - Creative Hub",
      image: "/api/placeholder/400/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "rohit",
      position: "Co Founder - Creative Hub",
      image: "/api/placeholder/400/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    // Add more testimonials here...
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      {/* <div className="text-left mb-4">
        <h2 className="text-purple-900 text-lg font-semibold">Application Monitoring</h2>
        <h3 className="text-purple-700 text-md">Build Tools</h3>
      </div> */}
      
      <div className="relative max-w-6xl mx-auto h-[600px]">
        <h1 className='text-center text-6xl text-purple-950'>Our Testimonials</h1>
        <p className='text-center text-2xl mt-5 mb-10 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,.</p>
        <div className="flex items-center justify-center h-full">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index = (currentTestimonial + offset + testimonials.length) % testimonials.length;
            const testimonial = testimonials[index];
            return (
              <div
                key={index}
                className={`absolute transition-all duration-300 ${
                  offset === 0
                    ? 'z-30 scale-100 opacity-100'
                    : Math.abs(offset) === 1
                    ? 'z-20 scale-95 opacity-20'
                    : 'z-10 scale-90 opacity-10'
                }`}
                style={{
                  transform: `translateX(${offset * 40}%) scale(${
                    1 - Math.abs(offset) * 0.05
                  })`,
                }}
              >
                <div className="bg-purple-950 rounded-3xl p-6 w-[360px] h-[600px] shadow-lg ">
                  <div className="bg-blue-700 rounded-2xl w-full h-48 mb-4 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white text-2xl font-semibold text-center mb-1">
                    "{testimonial.name}"
                  </h3>
                  <p className="text-purple-300 text-sm text-center mb-4">
                    ({testimonial.position})
                  </p>
                  <p className="text-white text-sm text-center">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-40"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-16 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-40"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* <div className="text-center mt-8">
        <h2 className="text-purple-900 text-3xl font-bold">Innovating with you</h2>
        <p className="text-purple-700 text-lg">Innovating with you to deliver exceptional efficiency.</p>
      </div> */}
    </div>
  );
};

export default Testimonials;




// import React from 'react';
// import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Vipin",
//       position: "Co Founder - Creative Hub",
//       image: "/api/placeholder/400/300",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//       name: "Hermann",
//       position: "Co Founder - Creative Hub",
//       image: "/api/placeholder/400/300",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//       name: "Himanshu",
//       position: "Co Founder - Creative Hub",
//       image: "/api/placeholder/400/300",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//       name: "Vicky",
//       position: "Co Founder - Creative Hub",
//       image: "/api/placeholder/400/300",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//       name: "Durgesh",
//       position: "Co Founder - Creative Hub",
//       image: "/api/placeholder/400/300",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//       name: "Rohit",
//       position: "Co Founder - Creative Hub",
//       image: "/api/placeholder/400/300",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-16 bg-white">
//       <h1 className='text-center text-6xl text-purple-950 mb-4'>Our Testimonials</h1>
//       <p className='text-center text-2xl mb-10 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
//       <div className='control-container'>
//         <CarouselComponent animationEffect="Custom" cssClass="parallax">
//           <CarouselItemsDirective>
//             {testimonials.map((testimonial, index) => (
//               <CarouselItemDirective key={index} template={`
//                 <figure class="img-container">
//                   <div class="bg-purple-950 rounded-3xl p-6 w-[360px] h-[600px] shadow-lg mx-auto">
//                     <div class="bg-blue-700 rounded-2xl w-full h-48 mb-4 overflow-hidden">
//                       <img src="${testimonial.image}" alt="${testimonial.name}" style="height:100%;width:100%;object-fit:cover;" />
//                     </div>
//                     <h3 class="text-white text-2xl font-semibold text-center mb-1">
//                       "${testimonial.name}"
//                     </h3>
//                     <p class="text-purple-300 text-sm text-center mb-4">
//                       (${testimonial.position})
//                     </p>
//                     <p class="text-white text-sm text-center">
//                       ${testimonial.text}
//                     </p>
//                   </div>
//                   <figcaption class="img-caption">${testimonial.name}</figcaption>
//                 </figure>
//               `} />
//             ))}
//           </CarouselItemsDirective>
//         </CarouselComponent>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;