import React from 'react'
import crmImg from "../../../assets/industryImages/crmbg.png"

const CrmBg = () => {
    const whoWeServe = [
        'Banks', 'Insurance Companies', 'Lending Companies', 'Payment Service Providers',
        'Investment Companies', 'Fintech Startups', 'DeFi Companies', 'Financial Software Product Companies'
    ];

    const financialServices = [
        'Underwriting Automation Systems', 'Insurance Claims Processing systems', 'Policy Administration Systems', 'Actuarial Software',
        'Loan Management Software', 'Mortgage Automation Systems', 'Loan Origination Systems', 'Insurance Software',
        'Payment Solutions', 'Financial Management', 'Wealth Management', 'Investment Management',
        'Risk Management', 'Regulatory Compliance', 'Credit Risk Management', 'Fraud Detection'
    ];

    const customerFacingApps = [
        'Mobile Banking Apps', 'Insurance Apps', 'Lending Apps', 'Buy-Now-Pay-Later Apps','Mobile Banking Apps', 'Insurance Apps', 'Lending Apps', 'Buy-Now-Pay-Later Apps'
    ];

    const generalBusinessSoftware = [
        'CRM', 'Accounting Software', 'Document Management', 'Human Resource Management', 'Human Resource Management'
    ];

    return (
        <div className="flex flex-col items-center">
            <div className="pr-40 pl-40 pt-20 animate-slideInLeft1">
                <img src={crmImg} alt="Frame 1" className="w-[100rem] max-w-full" />
            </div>
            <div className="w-full mt-40 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-purple-950 mb-8 text-center">Who We Serve</h1>
                <p className="text-center max-w-5xl mx-auto text-xl mb-8 text-gray-500">Innovating with future-proof software to enhance operational efficiency. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 px-4 sm:px-10 mx-auto max-w-7xl">
                    {whoWeServe.map((item, index) => (
                        <div key={index} className="flex items-center justify-between border-2 border-purple-950 rounded-full p-4 transition-colors hover:bg-purple-950 hover:text-white">
                            <span>{item}</span>
                            <span className="ml-4 text-white bg-purple-950 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <h2 className="text-4xl md:text-5xl mb-8 text-purple-950 text-center">Financial Services and Solutions We Specialize In</h2>
                    <p className="text-center max-w-5xl mx-auto text-xl mb-8 text-gray-500">Innovating with future-proof software to enhance operational efficiency. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 sm:px-10 mx-auto max-w-7xl">
                        {financialServices.map((service, index) => (
                            <div key={index} className="flex items-center justify-between border-2 border-purple-950 rounded-full p-4 transition-colors hover:bg-purple-950 hover:text-white">
                                <span>{service}</span>
                                <span className="ml-4 text-white bg-purple-950 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-4xl md:text-5xl mb-8 text-purple-950 text-center">Customer-Facing Apps</h2>
                    <p className="text-center max-w-5xl mx-auto text-xl mb-8 text-gray-500">Innovating with future-proof software to enhance operational efficiency. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 sm:px-10 mx-auto max-w-7xl">
                        {customerFacingApps.map((app, index) => (
                            <div key={index} className="flex items-center justify-between border-2 border-purple-950 rounded-full p-4 transition-colors hover:bg-purple-950 hover:text-white">
                                <span>{app}</span>
                                <span className="ml-4 text-white bg-purple-950 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 mb-20">
                    <h2 className="text-4xl md:text-5xl mb-8 text-purple-950 text-center">Software For General Business Administration</h2>
                    <p className="text-center max-w-5xl mx-auto text-xl mb-8 text-gray-500">Innovating with future-proof software to enhance operational efficiency. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 sm:px-10 mx-auto max-w-7xl">
                        {generalBusinessSoftware.map((software, index) => (
                            <div key={index} className="flex items-center justify-between border-2 border-purple-950 rounded-full p-4 transition-colors hover:bg-purple-950 hover:text-white">
                                <span>{software}</span>
                                <span className="ml-4 text-white bg-purple-950 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrmBg