import React from 'react';
import clientbg from "../assets/clientbg.png";
import person from "../assets/testimonials/p2.png"

const reviewData = [
  {
    id: 1,
    text: "As an industrial, securing capacity and optimizing budget are key. In that perspective, you are looking for a transport partner committed on a long-term vision",
    author: "Millon Zahino",
    role: "Behavioral Science"
  },
  {
    id: 2,
    text: "As an industrial, securing capacity and optimizing budget are key. In that perspective, you are looking for a transport partner committed on a long-term vision",
    author: "Millon Zahino",
    role: "Behavioral Science"
  },
  {
    id: 3,
    text: "As an industrial, securing capacity and optimizing budget are key. In that perspective, you are looking for a transport partner committed on a long-term vision",
    author: "Millon Zahino",
    role: "Behavioral Science"
  },
  {
    id: 4,
    text: "As an industrial, securing capacity and optimizing budget are key. In that perspective, you are looking for a transport partner committed on a long-term vision",
    author: "Millon Zahino",
    role: "Behavioral Science"
  },
  // Add more review data as needed
];

const ReviewCard = ({ text, author, role }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-2 border-purple-950 relative max-w-lg mx-auto md:mx-0">
    {/* Star rating badge */}
    <div className="absolute -top-4 left-4 bg-purple-950 text-yellow-500 px-3 py-1 rounded-full text-xs">
      ★★★★★
    </div>

    {/* Quotation mark */}
    <div className="text-7xl font-bold text-black absolute top-4 right-4">“</div>

    {/* Review text */}
    <p className="text-base mt-8 mb-4 text-gray-800">{text}</p>

    {/* Author info */}
    <div className="flex items-center">
      {/* Circular avatar with initial */}
      <div className="w-12 h-12 rounded-full border border-gray-300 overflow-hidden mr-3 flex items-center justify-center text-white font-bold">
        <img
          src={person} // Replace with actual avatar if available
          alt={author}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Author name and role */}
      <div>
        <p className="font-semibold text-sm text-gray-900">{author}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const ClientReview = () => {
  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      {/* Background image */}
      <img
        src={clientbg}
        alt="Client background"
        className="mb-20 w-full h-auto"
        style={{ maxWidth: "1100px", maxHeight: "120px" }}
      />

      {/* Review cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviewData.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
