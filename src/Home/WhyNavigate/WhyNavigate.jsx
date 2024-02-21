import React from 'react';

const WhyNavigate = ({ isOpen }) => {
    return (
        <div>
            <div className={`${isOpen ? 'opacity-30 duration-300' : 'opacity-100 duration-300'}`}>
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold leading-[52px] md:text-4xl md:leading-[60px] ">
                            Why choose - <span className="text-[#0095FF]">NavigateUI</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-[600px] text-base text-gray-600 md:text-lg">Discover the features that make NavigateUI the perfect choice for your Tailwind-React projects.</p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card rounded-md bg-white p-6 shadow-md">
                            <h3 className="mb-2 text-xl font-semibold">Responsive Design</h3>
                            <p className="text-gray-600">NavigateUI components are designed to look great on various screen sizes, ensuring a seamless user experience across devices.</p>
                        </div>
                        <div className="card rounded-md bg-white p-6 shadow-md">
                            <h3 className="mb-2 text-xl font-semibold">Easy Integration</h3>
                            <p className="text-gray-600">Integrate NavigateUI effortlessly into your Tailwind-React projects. Our documentation provides clear instructions for a quick setup.</p>
                        </div>
                        <div className="card rounded-md bg-white p-6 shadow-md">
                            <h3 className="mb-2 text-xl font-semibold">Customizable Styles</h3>
                            <p className="text-gray-600">Tailor the appearance of components to match your project&apos;s design. Easily modify styles using Tailwind CSS classes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyNavigate;
