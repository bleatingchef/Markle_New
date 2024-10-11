import React, { useState } from 'react';
import aboutfaqbg from "../assets/aboutfaqbg.png";

const AboutFaqs = () => {
  const [openIndex, setOpenIndex] = useState({
    about: null,
    pricing: null,
    discussing: null,
    starting: null,
    delivery: null,
    quality: null,
    intellectual: null,
  });

  const aboutFaqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?",
      answer: "This is the answer to the first question. It provides more detailed information about the topic.",
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?",
        answer: "This is the answer to the first question. It provides more detailed information about the topic.",
      },
      {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?",
        answer: "This is the answer to the first question. It provides more detailed information about the topic.",
      },
      {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?",
        answer: "This is the answer to the first question. It provides more detailed information about the topic.",
      },
    // ... other FAQs for about
  ];

  const pricingFaqs = [
    {
      question: "What is the pricing structure for your services?",
      answer: "Our pricing structure is flexible and based on the specific needs of your project.",
    },
    {
        question: "What is the pricing structure for your services?",
        answer: "Our pricing structure is flexible and based on the specific needs of your project.",
      },
      {
        question: "What is the pricing structure for your services?",
        answer: "Our pricing structure is flexible and based on the specific needs of your project.",
      },
      {
        question: "What is the pricing structure for your services?",
        answer: "Our pricing structure is flexible and based on the specific needs of your project.",
      },
    // ... other FAQs for pricing
  ];

  const discussingFaqs = [
    {
      question: "What information should I prepare for our initial discussion?",
      answer: "Please provide a brief overview of your project goals and any relevant details.",
    },
    {
        question: "What information should I prepare for our initial discussion?",
        answer: "Please provide a brief overview of your project goals and any relevant details.",
      },
      {
        question: "What information should I prepare for our initial discussion?",
        answer: "Please provide a brief overview of your project goals and any relevant details.",
      },
      {
        question: "What information should I prepare for our initial discussion?",
        answer: "Please provide a brief overview of your project goals and any relevant details.",
      },
    // ... other FAQs for discussing
  ];

  const startingFaqs = [
    {
      question: "What are the first steps to start a project with you?",
      answer: "The first step is to schedule an initial consultation to discuss your needs.",
    },
    {
        question: "What are the first steps to start a project with you?",
        answer: "The first step is to schedule an initial consultation to discuss your needs.",
      },
      {
        question: "What are the first steps to start a project with you?",
        answer: "The first step is to schedule an initial consultation to discuss your needs.",
      },
      {
        question: "What are the first steps to start a project with you?",
        answer: "The first step is to schedule an initial consultation to discuss your needs.",
      },
    // ... other FAQs for starting
  ];

  const deliveryFaqs = [
    {
      question: "What methods do you use for service delivery?",
      answer: "We use various project management tools to ensure timely delivery.",
    },
    {
        question: "What methods do you use for service delivery?",
        answer: "We use various project management tools to ensure timely delivery.",
      },
      {
        question: "What methods do you use for service delivery?",
        answer: "We use various project management tools to ensure timely delivery.",
      },
      {
        question: "What methods do you use for service delivery?",
        answer: "We use various project management tools to ensure timely delivery.",
      },
    // ... other FAQs for delivery
  ];

  const qualityFaqs = [
    {
      question: "How do you ensure high service quality?",
      answer: "We conduct regular reviews and implement feedback to improve our services.",
    },
    {
        question: "How do you ensure high service quality?",
        answer: "We conduct regular reviews and implement feedback to improve our services.",
      },
      {
        question: "How do you ensure high service quality?",
        answer: "We conduct regular reviews and implement feedback to improve our services.",
      },
      {
        question: "How do you ensure high service quality?",
        answer: "We conduct regular reviews and implement feedback to improve our services.",
      },
    // ... other FAQs for quality
  ];

  const intellectualFaqs = [
    {
      question: "How do you handle intellectual property rights?",
      answer: "We ensure all intellectual property rights are respected and legally documented.",
    },
    {
        question: "How do you handle intellectual property rights?",
        answer: "We ensure all intellectual property rights are respected and legally documented.",
      },
      {
        question: "How do you handle intellectual property rights?",
        answer: "We ensure all intellectual property rights are respected and legally documented.",
      },
      {
        question: "How do you handle intellectual property rights?",
        answer: "We ensure all intellectual property rights are respected and legally documented.",
      }, 
    // ... other FAQs for intellectual
  ];

  const toggleFAQ = (index, type) => {
    setOpenIndex((prev) => ({
      ...prev,
      [type]: prev[type] === index ? null : index,
    }));
  };


    const [formVisible, setFormVisible] = useState(false); // To toggle form visibility
    const [formData, setFormData] = useState({
      name: '',
      question: '',
      email: '',
      phone: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    // Function to validate form inputs
    const validateForm = () => {
      const errors = {};
      if (!formData.name) errors.name = "Name is required";
      if (!formData.question) errors.question = "Question is required";
      if (!formData.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email is invalid";
      }
      if (!formData.phone) {
        errors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        errors.phone = "Phone number must be 10 digits";
      }
      return errors;
    };
  
    // Handle input changes for each form field
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validateForm();
      if (Object.keys(errors).length === 0) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormVisible(false);
          setFormData({ name: '', question: '', email: '', phone: '' }); // Reset form
        }, 3000);
      } else {
        setFormErrors(errors);
      }
    };

  return (
    <>
      <div className='flex items-center justify-center my-20'>
        <img src={aboutfaqbg} alt="About FAQs Background" className='max-w-full h-auto' style={{ maxWidth: "1500px" }} />
      </div>
      <div className='px-10'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-16 mt-36 ml-[275px] '>
          About Markle
        </h1>
        <div className='w-full max-w-7xl space-y-4 mx-auto'>
          {aboutFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-colors duration-300 ${openIndex.about === index ? 'bg-purple-950 text-white' : 'bg-purple-200 text-purple-950'}`}
              onClick={() => toggleFAQ(index, "about")}
            >
              <div className='flex justify-between items-center'>
                <p className='text-lg font-semibold'>{faq.question}</p>
                <button 
                  className='text-2xl focus:outline-none bg-purple-950 text-white w-12 h-12 rounded-full' 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent parent div from triggering onClick
                    toggleFAQ(index, "about"); // Open or close the FAQ
                  }}
                >
                  {openIndex.about === index ? 'x' : '+'}
                </button>
              </div>
              {openIndex.about === index && (
                <p className='mt-2 text-white'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <h1 className='text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-16 mt-36 ml-[275px]'>
          Pricing
        </h1>
        <div className='w-full max-w-7xl space-y-4 mx-auto'>
          {pricingFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-colors duration-300 ${openIndex.pricing === index ? 'bg-purple-950 text-white' : 'bg-purple-200 text-purple-950'}`}
              onClick={() => toggleFAQ(index, "pricing")}
            >
              <div className='flex justify-between items-center'>
                <p className='text-lg font-semibold'>{faq.question}</p>
                <button 
                  className='text-2xl focus:outline-none bg-purple-950 text-white w-12 h-12 rounded-full' 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleFAQ(index, "pricing"); // Open or close the FAQ
                  }}
                >
                  {openIndex.pricing === index ? 'x' : '+'}
                </button>
              </div>
              {openIndex.pricing === index && (
                <p className='mt-2 text-white'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <h1 className='text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-16 mt-36 ml-[275px]'>
          Discussing a Potential Project
        </h1>
        <div className='w-full max-w-7xl space-y-4 mx-auto'>
          {discussingFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-colors duration-300 ${openIndex.discussing === index ? 'bg-purple-950 text-white' : 'bg-purple-200 text-purple-950'}`}
              onClick={() => toggleFAQ(index, "discussing")}
            >
              <div className='flex justify-between items-center'>
                <p className='text-lg font-semibold'>{faq.question}</p>
                <button 
                  className='text-2xl focus:outline-none bg-purple-950 text-white w-12 h-12 rounded-full' 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleFAQ(index, "discussing"); // Open or close the FAQ
                  }}
                >
                  {openIndex.discussing === index ? 'x' : '+'}
                </button>
              </div>
              {openIndex.discussing === index && (
                <p className='mt-2 text-white'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <h1 className='text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-16 mt-36 ml-[275px]'>
          Starting a Project
        </h1>
        <div className='w-full max-w-7xl space-y-4 mx-auto'>
          {startingFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-colors duration-300 ${openIndex.starting === index ? 'bg-purple-950 text-white' : 'bg-purple-200 text-purple-950'}`}
              onClick={() => toggleFAQ(index, "starting")}
            >
              <div className='flex justify-between items-center'>
                <p className='text-lg font-semibold'>{faq.question}</p>
                <button 
                  className='text-2xl focus:outline-none bg-purple-950 text-white w-12 h-12 rounded-full' 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleFAQ(index, "starting"); // Open or close the FAQ
                  }}
                >
                  {openIndex.starting === index ? 'x' : '+'}
                </button>
              </div>
              {openIndex.starting === index && (
                <p className='mt-2 text-white'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <h1 className='text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-16 mt-36 ml-[275px]'>
          Service Delivery
        </h1>
        <div className='w-full max-w-7xl space-y-4 mx-auto'>
          {deliveryFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-colors duration-300 ${openIndex.delivery === index ? 'bg-purple-950 text-white' : 'bg-purple-200 text-purple-950'}`}
              onClick={() => toggleFAQ(index, "delivery")}
            >
              <div className='flex justify-between items-center'>
                <p className='text-lg font-semibold'>{faq.question}</p>
                <button 
                  className='text-2xl focus:outline-none bg-purple-950 text-white w-12 h-12 rounded-full' 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleFAQ(index, "delivery"); // Open or close the FAQ
                  }}
                >
                  {openIndex.delivery === index ? 'x' : '+'}
                </button>
              </div>
              {openIndex.delivery === index && (
                <p className='mt-2 text-white'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <h1 className='text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-16 mt-36 ml-[275px]'>
          Service Quality
        </h1>
        <div className='w-full max-w-7xl space-y-4 mx-auto'>
          {qualityFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-colors duration-300 ${openIndex.quality === index ? 'bg-purple-950 text-white' : 'bg-purple-200 text-purple-950'}`}
              onClick={() => toggleFAQ(index, "quality")}
            >
              <div className='flex justify-between items-center'>
                <p className='text-lg font-semibold'>{faq.question}</p>
                <button 
                  className='text-2xl focus:outline-none bg-purple-950 text-white w-12 h-12 rounded-full' 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleFAQ(index, "quality"); // Open or close the FAQ
                  }}
                >
                  {openIndex.quality === index ? 'x' : '+'}
                </button>
              </div>
              {openIndex.quality === index && (
                <p className='mt-2 text-white'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <h1 className='text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-16 mt-36 ml-[275px]'>
          Intellectual Property and Security
        </h1>
        <div className='w-full max-w-7xl space-y-4 mx-auto mb-20'>
          {intellectualFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-colors duration-300 ${openIndex.intellectual === index ? 'bg-purple-950 text-white' : 'bg-purple-200 text-purple-950'}`}
              onClick={() => toggleFAQ(index, "intellectual")}
            >
              <div className='flex justify-between items-center'>
                <p className='text-lg font-semibold'>{faq.question}</p>
                <button 
                  className='text-2xl focus:outline-none bg-purple-950 text-white w-12 h-12 rounded-full' 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleFAQ(index, "intellectual"); // Open or close the FAQ
                  }}
                >
                  {openIndex.intellectual === index ? 'x' : '+'}
                </button>
              </div>
              {openIndex.intellectual === index && (
                <p className='mt-2 text-white'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
       {/* FAQ Section */}
       <div className="bg-purple-950 text-white py-8 px-10 rounded-lg flex justify-between items-center max-w-6xl h-60 mx-auto mb-20">
        <div>
          <h2 className="text-4xl mb-8 leading-[3rem] max-w-3xl">Have A Question To Our Team Or Need Assistance With Your Project?</h2>
          <p className='text-xl'>Our Team Is Ready To Provide Client References, Estimate Your Project, Or Answer Any Questions Related To Your IT Initiative.</p>
        </div>
        <button
          className="bg-white text-purple-950 font-semibold px-8 py-4 w-[250px] rounded-full shadow-lg focus:outline-none"
          onClick={() => setFormVisible(!formVisible)}
        >
          Ask Your Question
        </button>
      </div>

      {/* Form Section */}
      {formVisible && (
        <div className="bg-purple-200 text-purple-950 p-8 rounded-lg shadow-md max-w-lg mx-auto mt-8">
          {submitted ? (
            <div className="text-center text-lg font-semibold">Thank you for submitting!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-purple-400 rounded"
                />
                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="question">Question</label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-purple-400 rounded"
                />
                {formErrors.question && <p className="text-red-500 text-sm">{formErrors.question}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-purple-400 rounded"
                />
                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-purple-400 rounded"
                />
                {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
              </div>
              <button
                type="submit"
                className="bg-purple-950 text-white px-6 py-2 rounded-full shadow-lg"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      )}

      {/* Existing FAQ Section */}
      {/* Add your other FAQ components below */}
    </>
  );
};

export default AboutFaqs;



