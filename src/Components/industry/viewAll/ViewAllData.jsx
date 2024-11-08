import React from 'react';
import manufacturing from "../../../assets/industryImages/viewallindustry/manufacturing.png";
import automotive from "../../../assets/industryImages/viewallindustry/automotive.png";
import education from "../../../assets/industryImages/viewallindustry/education.png";
import agritech from "../../../assets/industryImages/viewallindustry/agritech.png";
import mediaEntertainment from "../../../assets/industryImages/viewallindustry/mediaEntertainment.png";
import fintech from "../../../assets/industryImages/viewallindustry/fintech.png";
import travelHospitality from "../../../assets/industryImages/viewallindustry/travelHospitality.png";
import transportationLogistics from "../../../assets/industryImages/viewallindustry/transportationLogistics.png";
import retail from "../../../assets/industryImages/viewallindustry/retail.png";
import oilGas from "../../../assets/industryImages/viewallindustry/oilGas.png";
import healthcare from "../../../assets/industryImages/viewallindustry/healthcare.png";
import compliance from "../../../assets/industryImages/viewallindustry/compliance.png";
import banking from "../../../assets/industryImages/viewallindustry/banking.png";
import insurance from "../../../assets/industryImages/viewallindustry/insurance.png";
import ecommerce from "../../../assets/industryImages/viewallindustry/ecommerce.png";
import realEstate from "../../../assets/industryImages/viewallindustry/realEstate.png";
import astrologyHoroscope from "../../../assets/industryImages/viewallindustry/astrologyHoroscope.png";

const industriesData = [
  {
    id: 1,
    title: 'Manufacturing',
    description: 'Our manufacturing solutions integrate the latest technology to streamline production processes, optimize resources, and reduce costs. We provide automation, data analytics, and IoT-enabled solutions to help you meet industry standards and drive innovation.',
    imageUrl: manufacturing,
  },
  {
    id: 2,
    title: 'Automotive',
    description: 'We support the automotive industry with advanced technology solutions that enhance both manufacturing and mobility services. From autonomous driving systems to supply chain optimization, we deliver solutions that keep your business at the forefront of innovation.',
    imageUrl: automotive,
  },
  {
    id: 3,
    title: 'Education & E-learning',
    description: 'Our e-learning platforms leverage AI and interactive technologies to make learning accessible, engaging, and efficient. We support schools, universities, and corporate training programs with solutions that facilitate remote learning and improve educational outcomes.',
    imageUrl: education,
  },
  {
    id: 4,
    title: 'Agritech',
    description: 'In agritech, we empower farmers and agribusinesses with technology solutions that boost productivity, enhance resource management, and promote sustainability. Our tools include precision farming, crop monitoring, and supply chain tracking.',
    imageUrl: agritech,
  },
  {
    id: 5,
    title: 'Media & Entertainment',
    description: 'We create cutting-edge media and entertainment solutions, from content creation and distribution to audience analytics and engagement. Our technology enables seamless streaming, personalized experiences, and optimized workflows for media production companies.',
    imageUrl: mediaEntertainment,
  },
  {
    id: 6,
    title: 'Fintech',
    description: 'Our fintech solutions transform the financial services sector with secure and scalable platforms for payments, lending, digital banking, and blockchain. We help businesses modernize their financial services with a focus on security, compliance, and user experience.',
    imageUrl: fintech,
  },
  {
    id: 7,
    title: 'Travel & Hospitality',
    description: 'We elevate travel and hospitality experiences with our custom solutions for booking, customer service, and hospitality management. Our technology helps you create memorable experiences for travelers while optimizing backend operations and customer engagement.',
    imageUrl: travelHospitality,
  },
  {
    id: 8,
    title: 'Transportation & Logistics',
    description: 'Our logistics solutions streamline transportation management, fleet tracking, and supply chain coordination. We empower companies to enhance operational efficiency, reduce costs, and ensure timely delivery through advanced analytics and IoT integrations.',
    imageUrl: transportationLogistics,
  },
  {
    id: 9,
    title: 'Retail',
    description: 'Our retail technology solutions improve customer engagement and streamline inventory management. We help retailers enhance their online and in-store experiences with personalized recommendations, POS systems, and real-time inventory tracking.',
    imageUrl: retail,
  },
  {
    id: 10,
    title: 'Oil & Gas',
    description: 'In the oil and gas sector, we provide solutions for data management, predictive maintenance, and safety compliance. Our technology helps companies improve operational efficiency, enhance safety, and minimize environmental impact.',
    imageUrl: oilGas,
  },
  {
    id: 11,
    title: 'Healthcare',
    description: 'We develop healthcare solutions focused on patient management, diagnostics, and data security. Our technology supports telemedicine, electronic health records, and diagnostic tools to improve patient outcomes and streamline healthcare processes.',
    imageUrl: healthcare,
  },
  {
    id: 12,
    title: 'Compliance',
    description: 'Our compliance solutions ensure your business adheres to regulatory standards with automated reporting, risk assessment, and data management. We help you navigate complex regulatory environments with ease and accuracy.',
    imageUrl: compliance,
  },
  {
    id: 13,
    title: 'Banking',
    description: 'Our digital banking solutions modernize financial institutions with secure and innovative platforms for transactions, customer management, and fraud detection. We help banks improve customer satisfaction and streamline operations.',
    imageUrl: banking,
  },
  {
    id: 14,
    title: 'Insurance',
    description: 'Our insurance technology solutions support claims management, customer service, and data analytics. We help insurers optimize processes, enhance customer engagement, and leverage data for better decision-making.',
    imageUrl: insurance,
  },
  {
    id: 15,
    title: 'E-commerce',
    description: 'Our e-commerce solutions enhance online retail with intuitive interfaces, secure payment systems, and personalized product recommendations. We help businesses create seamless shopping experiences that drive customer satisfaction and loyalty.',
    imageUrl: ecommerce,
  },
  {
    id: 16,
    title: 'Real Estate',
    description: 'We enable real estate businesses with solutions for property management, virtual tours, and customer relationship management. Our technology helps streamline transactions, enhance property listings, and improve client interactions.',
    imageUrl: realEstate,
  },
  {
    id: 17,
    title: 'Astrology & Horoscope',
    description: 'Our astrology solutions offer personalized readings, horoscope predictions, and other astrological services for users. We provide a platform for astrologers to connect with clients and deliver tailored experiences.',
    imageUrl: astrologyHoroscope,
  },
];

const ViewAllData = () => {
  return (
    <div className="px-6 py-8">
      <h2 className="text-6xl text-center text-purple-950">Industries We Serve</h2>
      <p className="text-center text-xl text-gray-600 mt-6 mb-8 max-w-3xl mx-auto">
          Delivering value to multiple industries, we innovate industry-specific technologies to scale and optimize operations and bottom line.
      </p>

      {industriesData.map((industry, index) => (
        <div
          key={industry.id}
          className={`flex flex-col md:flex-row items-center rounded-lg p-4 my-6 max-w-6xl mx-auto ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="flex-shrink-0 md:w-1/2 w-full mb-4 md:mb-0 md:mr-6 md:ml-6">
            <img
              className="w-full h-auto"
              src={industry.imageUrl}
              alt={industry.title}
            />
          </div>
          <div className="text-center md:w-1/2 w-full">
            <h3 className="text-5xl font-semibold mb-6">{industry.title}</h3>
            <p className="text-gray-700 text-lg">{industry.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewAllData;
