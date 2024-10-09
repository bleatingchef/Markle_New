import React, { useState, useEffect } from 'react';
// import achievement from '../assets/achievement.png';
import person1 from '../assets/testimonials/p1.png';
import person2 from '../assets/testimonials/p2.png';
import person3 from '../assets/testimonials/p3.png';
import person4 from '../assets/testimonials/p4.png';
import person5 from '../assets/testimonials/p5.png';

const Achievements = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "The team at Markle Tech and Media delivered outstanding results. Their strategic approach, technical expertise & attention to every detail sets them apart.",
      author: "Millon Zahino",
      position: "Behavioral Science",
      avatar: person1,
      rating: 5
    },
    {
      id: 2,
      text: "Innovation, Tailored for you Innovating with future proof software to enhance operational efficiency.",
      author: "Sarah Chen",
      position: "Tech Lead",
      avatar: person2,
      rating: 5
    },
    {
      id: 3,
      text: "The attention to detail and customer service is unmatched. Highly recommend their services to anyone looking for excellence.",
      author: "James Wilson",
      position: "Project Manager",
      avatar: person3,
      rating: 5
    }
  ];

  // Automatically move to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className='container mx-auto px-4 md:py-16 py-10 flex flex-col items-center'>
      {/* <h1 className="text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-8 text-center">
        Stories of Satisfaction
      </h1> */}
      {/* <p className="text-center text-xl mb-8 text-gray-500">
        The team at Markle Tech and Media delivered outstanding results. Their strategic approach, technical expertise & attention to every detail sets them apart.
      </p> */}
      
      {/* <div className="flex justify-center w-full max-w-7xl mb-20">
        <img 
          src={achievement} 
          alt="Our Achievements" 
          className='w-full h-auto object-contain'
        />
      </div> */}

      {/* New Testimonials Section */}
      <div className="w-full max-w-7xl bg-purple-950 rounded-3xl p-8 flex flex-col lg:flex-row relative">
        {/* Left Side - Floating Avatars (hidden on small screens) */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] mb-8 lg:mb-0 hidden lg:block">
          <div className="absolute top-12 left-12">
            <img src={person1} alt="" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-yellow-400"/>
          </div>
          <div className="absolute top-32 left-32">
            <img src={person2} alt="" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-yellow-400"/>
          </div>
          <div className="absolute bottom-20 left-20">
            <img src={person3} alt="" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-purple-400"/>
          </div>
          <div className="absolute right-24 top-16">
            <img src={person4} alt="" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-blue-300"/>
          </div>
          <div className="absolute right-12 bottom-32">
            <img src={person5} alt="" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-yellow-400"/>
          </div>
        </div>

        {/* Right Side - Testimonial Carousel */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6 md:p-8 relative">
          {/* Rating Stars */}
          <div className="flex mb-4">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
              <svg key={index} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-lg md:text-xl italic mb-8">"{testimonials[currentTestimonial].text}"</p>

          {/* Author Info */}
          <div className="flex items-center">
            <img 
              src={testimonials[currentTestimonial].avatar} 
              alt={testimonials[currentTestimonial].author}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-semibold">{testimonials[currentTestimonial].author}</h4>
              <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
            </div>
          </div>

          {/* Hide Navigation Buttons */}
          {/* Navigation buttons are removed */}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
