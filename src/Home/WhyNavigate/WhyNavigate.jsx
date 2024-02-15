import React from 'react';

const WhyNavigate = ({isOpen}) => {
    return (
        <div>
<div className={`${isOpen ? 'opacity-30 duration-300' : 'opacity-100 duration-300'}`}>
    <div className="container mx-auto py-16 px-4">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold leading-[52px] md:leading-[60px] ">
               Why choose - <span className="text-[#0095FF]">NavigateUI</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-[600px] mx-auto">
                Discover the features that make NavigateUI the perfect choice for your Tailwind-React projects.
            </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 bg-white shadow-md rounded-md">
                <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                <p className="text-gray-600">
                    NavigateUI components are designed to look great on various screen sizes, ensuring a seamless user experience across devices.
                </p>
            </div>
            <div className="card p-6 bg-white shadow-md rounded-md">
                <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                <p className="text-gray-600">
                    Integrate NavigateUI effortlessly into your Tailwind-React projects. Our documentation provides clear instructions for a quick setup.
                </p>
            </div>
            <div className="card p-6 bg-white shadow-md rounded-md">
                <h3 className="text-xl font-semibold mb-2">Customizable Styles</h3>
                <p className="text-gray-600">
                    Tailor the appearance of components to match your project's design. Easily modify styles using Tailwind CSS classes.
                </p>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default WhyNavigate;