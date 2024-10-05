import React, { useState, useEffect } from 'react';
import logoblack from "../assets/logoblack.png";

// Countdown function
const calculateTimeLeft = () => {
    const launchDate = new Date('2024-12-31T00:00:00'); // Set your launch date here
    const now = new Date();
    const difference = launchDate - now;

    let timeLeft = {};
    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    }
    return timeLeft;
};

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
            <img src={logoblack} alt="Logo" className="mb-8 w-72 md:w-96" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">We’re Building Something Awesome!</h1>
            <div className="mb-6 text-xl md:text-2xl font-semibold text-gray-600">
                <span>{timeLeft.days} Days </span>
                <span>{timeLeft.hours} Hours </span>
                <span>{timeLeft.minutes} Minutes </span>
                <span>{timeLeft.seconds} Seconds </span>
            </div>
            <form className="mb-4 flex flex-col md:flex-row">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    className="border rounded p-2 text-gray-700 focus:outline-none focus:border-blue-500 mb-2 md:mb-0 md:mr-2"
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-300"
                >
                    Subscribe
                </button>
            </form>
            <div className="flex flex-wrap justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">Facebook</a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">Twitter</a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">Instagram</a>
            </div>
        </div>
    );
};

export default Countdown;
