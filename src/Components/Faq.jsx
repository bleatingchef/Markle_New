import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
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
    {
      question: "Do you work with startups and clients on a budget?",
      answer: (
        <div>
          Yes, we work with startups. Since our establishment, we have worked with thousands of startups across the globe and become the proud partner in their success journey. We have built hundreds of Minimum Viable Products (MVPs) and scaled several startups to new heights. 
          <p className="mt-2">
            Let us know your budget, and our experts will be happy to help you.
          </p>
        </div>
      )
    },
    {
      question: "Is outsourcing software development risky? How do you ensure IP (Intellectual Property) and data protection?",
      answer: (
        <div>
          Software product development outsourcing is not risky at all if you outsource your project to a reputed company. Markle ensures IP (Intellectual Property) & data protection in the following ways:
          <ul className="list-disc ml-5 mt-2">
            <li>We sign a Non-Disclosure Agreement (NDA)</li>
            <li>We meet special industry regulations such as GDPR, HIPAA, etc.</li>
            <li>We follow secure coding and data protection practices</li>
            <li>We establish firewalls, encryption, and VPN services to prevent online security breaches</li>
            <li>All our employees are strictly verified before recruitment</li>
          </ul>
        </div>
      )
    },
    {
      question: "I want to outsource software development. What engagement options do you offer?",
      answer: (
        <div>
          At Markle, we offer a variety of engagement models to suit your specific project requirements. 
          <ul className="list-disc ml-5 mt-2">
            <li><strong>Dedicated Team:</strong> A dedicated team model comprises a PM, SW Engineer, QA Engineer, and other roles defined for each specific project.</li>
            <li><strong>Staff Augmentation:</strong> We provide extra talent to boost your specific projects. This extended team works as a part of your local team, attending your daily meetings and reporting directly to your manager.</li>
            <li><strong>Offshore Development Center:</strong> We also provide a dedicated software development office with all required infrastructure and employees in India. Our ODC model helps you save budget and speed up development, recruiting, and optimizing accounting and HR.</li>
          </ul>
        </div>
      )
    },
    {
      question: "How does the software development outsourcing process work?",
      answer: (
        <div>
          Software development outsourcing works differently, depending on the project requirements and the company’s needs. But the process typically looks something like this:
          <ul className="list-disc ml-5 mt-2">
            <li>The company defines the project scope and objectives and finds a trustworthy provider.</li>
            <li>The provider creates a team of qualified professionals working on the project.</li>
            <li>The team works closely with the client to ensure all deliverables meet or exceed expectations.</li>
            <li>Upon completion, the client gives final approval and pays for the work completed.</li>
          </ul>
          <p className="mt-2">
            Each software development outsourcing project is unique, so this process will vary somewhat from case to case.
          </p>
        </div>
      )
    },
    {
      question: "What are the advantages of outsourcing software development to India over Latin America, the Philippines or Eastern Europe?",
      answer: (
        <div>
          Many reasons make India an ideal destination for software outsourcing services. Here are a few reasons that give a competitive edge to India over Latin America, the Philippines, or Eastern Europe:
          <ul className="list-disc ml-5 mt-2">
            <li>Outsourcing software development projects to India is always more cost-effective.</li>
            <li>You get a large pool of English-speaking skilled workforce in India, which might be a challenge in Eastern Europe and the Philippines.</li>
            <li>Indian companies provide state-of-the-art infrastructural and technological support to the clients outsourcing to them.</li>
            <li>IT companies in India keep themselves abreast with the latest technological advancements.</li>
          </ul>
        </div>
      )
    },
    {
      question: "What are the industries that Markle mainly works with?",
      answer: (
        <div>
          Markle mainly works with the e-Commerce, real estate, ed-tech, Fin-Tech, food & beverages, hospitality, and recreation industries. However, we don’t limit ourselves to these sectors alone. 
          <p className="mt-2">
            Being a reputable product engineering firm, if we think we can add value to your project, then we’ll work with you regardless of what industry your business is in. Our portfolio should give you a good idea of the types of industries we’ve worked with before.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 mt-20">
      <h2 className="text-5xl text-purple-950 text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-2xl mb-8 text-gray-500">
        Here’s a list of FAQs that will help you to know more about MarkleTech.
      </p>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className={`p-4 flex justify-between h-20 items-center rounded-t-lg cursor-pointer ${
              activeIndex === index ? 'bg-purple-950 text-white' : 'bg-purple-200'
            }`}
            onClick={() => toggleFaq(index)}
          >
            <h3 className={`font-medium ${activeIndex === index ? 'text-white' : 'text-purple-950'}`}>
              {faq.question}
            </h3>
            <button
              className={`text-xl font-bold ${activeIndex === index ? 'text-white' : 'text-purple-600'}`}
            >
              {activeIndex === index ? '✕' : '+'}
            </button>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-purple-950 text-white rounded-b-lg">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
