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
      question: "Why should I choose Markle for software engineering, consulting, and outsourcing?",
      answer: (
        <div>
          We are a highly experienced and qualified team of professionals with a proven track record of delivering quality software solutions to clients. Here are a few reasons to choose us:
          <ul className="list-disc ml-5 mt-2">
            <li>65+ software developers</li>
            <li>Expertise in different technologies</li>
            <li>Strong reputation for quality work</li>
            <li>Experience working on complex projects for different industry verticals</li>
          </ul>
        </div>
      )
    },
    {
      question: "Can I test the services of Markle before committing to long-term engagement?",
      answer: (
        <div>
          You can test the services of Markle before committing to long-term engagement. We offer free trial to clients worldwide. This is to give our potential customers a risk-free way to try our software development services before committing to long-term engagement. We strongly believe in our products and services and want to allow everyone to experience firsthand the value we can bring.
          <p className="mt-2">
            Just fill out a form and connect with our team immediately. We hope you’ll take advantage of this and give us a chance to show you what we can do.
          </p>
        </div>
      )
    },
    {
      question: "How much does outsourcing software development to India cost?",
      answer: (
        <div>
          The cost of outsourcing software development depends on several factors such as the size and build of the application, the features & third-party integrations, APIs, animations, localizations, backend, cross-platform toolsets, platforms, etc.
          <p className="mt-2">
            If you share your basic idea, we can provide you with an ETA and estimated cost.
          </p>
        </div>
      )
    },
    {
      question: "I own a digital agency. Do you offer white-label software development services?",
      answer: (
        <div>
          Yes, we provide all types of white-label software development services, including business-to-business (B2B), business-to-customer (B2C), and software-as-a-service (SaaS). Get in touch with our experts to know more about white-label software services.
          <p className="mt-2">
            We believe in complete transparency and collaboration with our clients regarding white-label software development. We understand that every business has unique requirements and needs, and we work closely with our clients to ensure that we meet all their specific needs. We also offer 24/7 support and maintenance services to ensure that our client’s businesses always run smoothly.
          </p>
        </div>
      )
    },
    // ... other FAQs for about
  ];

  const pricingFaqs = [
    {
      question: "What is the pricing structure for your services?",
      answer: "Our pricing structure is flexible and based on the specific needs of your project.",
    },
    {
      question: "Are there any additional fees beyond the quoted price?",
      answer: "No, all fees are discussed upfront to ensure transparency and avoid any surprises.",
    },
    {
      question: "Do you offer discounts for long-term projects?",
      answer: "Yes, we offer discounts for long-term commitments. Please contact us for details.",
    },
    {
      question: "Can I customize the pricing plan to fit my budget?",
      answer: "Absolutely! We work with clients to create pricing options that fit their budgetary needs.",
    },
    {
      question: "Is there a deposit required to start a project?",
      answer: "Yes, a deposit is typically required to secure project resources and timeline commitments.",
    },
    {
      question: "Do you have any subscription or retainer options?",
      answer: "Yes, we offer retainer options for ongoing support and maintenance. Please inquire for more details.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, bank transfers, and other secure payment options.",
    },
];

const discussingFaqs = [
    {
      question: "What information should I prepare for our initial discussion?",
      answer: "Please provide a brief overview of your project goals and any relevant details.",
    },
    {
      question: "Can I see a portfolio of your previous projects?",
      answer: "Yes, we have a portfolio available to showcase our past work and success stories.",
    },
    {
      question: "How long does the initial consultation usually take?",
      answer: "The initial consultation typically lasts 30–60 minutes, depending on your project needs.",
    },
    {
      question: "Is there any cost for the initial consultation?",
      answer: "No, the initial consultation is free to help us understand your project requirements.",
    },
    {
      question: "What kind of questions should I prepare for the initial discussion?",
      answer: "Think about questions regarding timelines, budget, and any specific project requirements.",
    },
    {
      question: "Can we discuss potential challenges for my project?",
      answer: "Yes, we can identify possible challenges and strategize ways to address them.",
    },
    {
      question: "How do you handle confidential information in the initial discussion?",
      answer: "We respect client confidentiality and can sign an NDA if necessary to protect your ideas.",
    },
];

const startingFaqs = [
    {
      question: "What are the first steps to start a project with you?",
      answer: "The first step is to schedule an initial consultation to discuss your needs.",
    },
    {
      question: "How soon can we start after the initial discussion?",
      answer: "We can start within a week of finalizing the project scope and agreement terms.",
    },
    {
      question: "Do you require a contract to begin work?",
      answer: "Yes, we require a signed agreement to ensure both parties are aligned on expectations.",
    },
    {
      question: "Can you assist with initial project planning?",
      answer: "Absolutely! We provide guidance on project planning and key milestones from the start.",
    },
    {
      question: "How do you determine project timelines?",
      answer: "We create timelines based on project scope, complexity, and our prior experience with similar projects.",
    },
    {
      question: "What information will I need to provide to get started?",
      answer: "We’ll need details on project objectives, your target audience, and any existing content or resources.",
    },
    {
      question: "What is the typical timeframe for getting a project off the ground?",
      answer: "Most projects begin within 1–2 weeks after the initial consultation and contract signing.",
    },
];

const deliveryFaqs = [
    {
      question: "What methods do you use for service delivery?",
      answer: "We use various project management tools to ensure timely delivery.",
    },
    {
      question: "Can I track the progress of my project?",
      answer: "Yes, we provide regular updates and use tools that allow you to monitor progress.",
    },
    {
      question: "What if I need changes after delivery?",
      answer: "We offer a revision period post-delivery to accommodate any adjustments you may need.",
    },
    {
      question: "Do you provide training for delivered services or products?",
      answer: "Yes, training is available as part of our post-delivery support package.",
    },
    {
      question: "How will I receive the final deliverables?",
      answer: "Deliverables are typically provided digitally, through secure file-sharing platforms or direct transfer.",
    },
    {
      question: "What communication channels do you use during delivery?",
      answer: "We communicate via email, project management tools, and scheduled meetings to ensure you’re informed.",
    },
    {
      question: "Do you offer post-delivery support?",
      answer: "Yes, we provide ongoing support for a defined period to ensure everything runs smoothly.",
    },
];

const qualityFaqs = [
    {
      question: "How do you ensure high service quality?",
      answer: "We conduct regular reviews and implement feedback to improve our services.",
    },
    {
      question: "Do you have a quality assurance process?",
      answer: "Yes, we follow a rigorous QA process, including testing and client feedback at each stage.",
    },
    {
      question: "Can I provide feedback during the project?",
      answer: "Absolutely. We encourage ongoing feedback to ensure the final product meets your expectations.",
    },
    {
      question: "What happens if I'm not satisfied with the quality of work?",
      answer: "We strive for excellence and will make necessary adjustments to ensure client satisfaction.",
    },
    {
      question: "How do you handle bugs or issues that arise after delivery?",
      answer: "We offer a warranty period post-delivery to address any issues or bugs that may appear.",
    },
    {
      question: "Do you conduct user testing before final delivery?",
      answer: "Yes, user testing is part of our QA process to ensure a high-quality user experience.",
    },
    {
      question: "Can I expect regular quality updates and improvements?",
      answer: "For long-term projects, we provide regular quality reviews and updates as part of our service.",
    },
];

const intellectualFaqs = [
    {
      question: "How do you handle intellectual property rights?",
      answer: "We ensure all intellectual property rights are respected and legally documented.",
    },
    {
      question: "Will I own the final product?",
      answer: "Yes, all ownership rights are transferred to you upon project completion and payment.",
    },
    {
      question: "Do you sign non-disclosure agreements (NDAs)?",
      answer: "Yes, we are open to signing NDAs to ensure confidentiality of your project information.",
    },
    {
      question: "How do you protect my proprietary information?",
      answer: "We take privacy seriously, using secure systems and procedures to protect your data.",
    },
    {
      question: "Will any part of the project be used in your portfolio?",
      answer: "Only with your permission. We respect client privacy and only showcase approved work.",
    },
    {
      question: "How are intellectual property disputes handled?",
      answer: "We resolve disputes through open communication and adhere to all legal agreements in place.",
    },
    {
      question: "Can I retain rights to any proprietary tools developed during the project?",
      answer: "Yes, we discuss all ownership rights upfront, including proprietary tools or software developed.",
    },
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



