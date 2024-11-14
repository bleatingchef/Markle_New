import React from 'react';
import becomeouragentbg from "../assets/becomeouragentbg.png";

const BecomeOurAgent = () => {
  return (
    <div>
      {/* Hero Image */}
      {/* <div className="mt-20">
        <img src={becomeouragentbg} alt="Hero Frame" className="w-full h-auto object-cover" />
      </div> */}

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row justify-center items-start my-10"> {/* Changed from items-center to items-start */}
        <div className="md:w-1/3 p-6">
          <h2 className="text-5xl bg-gradient-to-r from-indigo-950 to-indigo-950 bg-clip-text text-transparent font-bold mb-8">Markle Tech to support your every IT needs</h2>
          <p className="mb-8 text-lg text-slate-950">
            With 8+ years of expertise and 300+ professional developers, Markle Tech offers top-notch app/software 
            development and digital transformation services to enhance your business's productivity and security. 
            Let's collaborate and join 1000+ successful businesses with us.
          </p>
          <p className="mb-8 text-lg text-slate-950">
            📍 A-52, Som Bazar Chowk, 52, Som Bazar Rd, Chowk, Vikas Nagar, Uttam Nagar, East, New Delhi, Delhi 110059
          </p>
          <p className="mb-8 text-lg text-slate-950">📞 +91-798 233 2070</p>
          <p className="mb-2 text-lg text-slate-950">✉️ info@markletech.com</p>
        </div>

        <div className="md:w-1/3 p-8 bg-white rounded-xl shadow-gray-500 shadow-xl mt-5 mb-16"> {/* Adjusted shadow classes */}
          <form className="space-y-6 m-5">
            <div>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
                placeholder="Name"
              />
            </div>
            <div>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
                placeholder="Email*"
              />
            </div>
            <div>
              <input 
                type="tel" 
                id="phone" 
                className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
                placeholder="Phone Number*"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  id="remark" 
                  className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
                  placeholder="Enter Remark*"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  id="country" 
                  className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
                  placeholder="Select Country*"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  id="product" 
                  className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
                  placeholder="Select Product*"
                />
              </div>
              <div>
                <input 
                  type="number" 
                  id="employees" 
                  className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
                  placeholder="No. of Employee*"
                />
              </div>
            </div>
            <div>
              <textarea 
                id="message" 
                className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
                placeholder="Your message..."
                rows="4"
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full p-3 bg-gradient-to-r from-purple-950 to-blue-950 text-white rounded-3xl hover:bg-purple-600 transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BecomeOurAgent;
