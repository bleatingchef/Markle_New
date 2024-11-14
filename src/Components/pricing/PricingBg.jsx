import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import pricingbg from "../../assets/pricingImages/pricingbg.png";

const PricingBg = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div>
      <div className="pr-40 pl-40 pt-20 animate-slideInLeft1">
        <img src={pricingbg} alt="Frame 1" className="w-[100rem] max-w-full" />
      </div>
      
      <div className="pt-16 pb-10 text-center">
        <h2 className="text-5xl text-purple-950">Software Development Cost Calculators</h2>
        <p className="text-gray-600 mt-5 max-w-5xl text-xl mx-auto">Click on the card to reach the cost calculator for your required solution type (30+ options to choose from)</p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['Web, Mobile, Desktop, DWH', 'ERP, CRM, SCM, Accounting', 'BFSI, Healthcare, Retail', 'AI/ML, AR, Blockchain', 'SharePoint, ServiceNow, Dynamics 365'].map((item, index) => (
            <NavLink 
              to={`/${item.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`} 
              key={index}
              className="bg-purple-100 hover:bg-purple-200 text-black font-semibold text-lg py-3 px-5 rounded-lg shadow-md w-[200px] h-[160px] flex justify-center items-center text-center"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="pt-16 pb-10 text-center">
        <h2 className="text-5xl text-purple-950">Data Analytics Cost Calculators</h2>
        <p className="text-gray-600 mt-5 max-w-5xl text-xl mx-auto">In data analytics and AI, we help businesses organize even the most voluminous data at an optimal cost.</p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['Data management services', 'Data analytics & BI implementation', 'Big data consulting', 'Data science services', 'Data warehouse services', 'Data visualization services'].map((item, index) => (
            <NavLink 
              to={`/${item.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`} 
              key={index}
              className="bg-purple-100 hover:bg-purple-200 text-black font-semibold text-lg py-3 px-5 rounded-lg shadow-md w-[200px] h-[160px] flex justify-center items-center text-center"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="pt-16 pb-10 text-center">
        <h2 className="text-5xl text-purple-950">Managed IT Service Cost Calculators</h2>
        <p className="text-gray-600 mt-5 max-w-5xl text-xl mx-auto">We keep the costs transparent by fixing the prices and KPIs in an SLA.</p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['Software maintenance', 'IT Infrastructure Management', 'Help Desk Services', 'Cloud Migration'].map((item, index) => (
            <NavLink 
              to={`/${item.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`} 
              key={index}
              className="bg-purple-100 hover:bg-purple-200 text-black font-semibold text-lg py-3 px-5 rounded-lg shadow-md w-[200px] h-[160px] flex justify-center items-center text-center"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="pt-16 pb-10 text-center">
        <h2 className="text-5xl text-purple-950">QA and Cyber Security Cost Calculators</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['QA Consulting', 'Software Testing', 'Security Testing', 'Compliance Assessment', 'SIEM Implementation'].map((item, index) => (
            <NavLink 
              to={`/${item.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`} 
              key={index}
              className="bg-purple-100 hover:bg-purple-200 text-black font-semibold text-lg py-3 px-5 rounded-lg shadow-md w-[200px] h-[160px] flex justify-center items-center text-center"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="pt-16 pb-10 text-center">
        <h2 className="text-5xl text-purple-950">Other Cost Calculators</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['IT Consulting', 'Staff Augmentation'].map((item, index) => (
            <NavLink 
              to={`/${item.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')}`} 
              key={index}
              className="bg-purple-100 hover:bg-purple-200 text-black font-semibold text-lg py-3 px-5 rounded-lg shadow-md w-[200px] h-[160px] flex justify-center items-center text-center"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="pt-16 pb-10 text-center">
        <h2 className="text-5xl text-purple-950">Pricing Models We Rely On</h2>
        <p className="text-gray-600 mt-5 max-w-5xl text-xl mx-auto">
          We offer flexible pricing models tailored to the cooperation scope and the client's budget limitations. Explore our dedicated page to learn more.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="pt-16 pb-10 text-center">
        <h2 className="text-5xl text-purple-950">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4 max-w-6xl mx-auto">
          {[
            {
              question: "What factors influence the cost of software development?",
              answer: "The cost is influenced by factors such as project complexity, technology stack, and development timeframe."
            },
            {
              question: "How do you determine pricing for IT services?",
              answer: "Our IT services pricing depends on service scope, project duration, and client requirements. We offer flexible pricing models."
            },
            {
              question: "Are there additional costs for data analytics services?",
              answer: "Additional costs may apply for extra data processing, integration with third-party tools, or advanced analytics."
            },
            {
              question: "Do you offer support after project completion?",
              answer: "Yes, we offer maintenance and support packages to ensure continued functionality and performance of delivered solutions."
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className={`font-medium py-4 px-5 rounded-lg shadow-md cursor-pointer ${
                expanded === index ? 'bg-purple-950 text-white' : 'bg-purple-100 text-purple-900'
              }`}
            >
              <div className="flex justify-between items-center" onClick={() => toggleExpand(index)}>
                <span>{faq.question}</span>
                <span className="text-xl">{expanded === index ? '✕' : '+'}</span>
              </div>
              {expanded === index && (
                <div className="text-left mt-2">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingBg;
