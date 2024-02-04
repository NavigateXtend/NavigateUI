import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <div className="mb-8 mt-14 flex flex-col items-center justify-center px-4 text-center md:my-20 md:px-0">
                <h2 className="max-w-[600px] text-3xl font-semibold leading-[52px] md:text-4xl md:leading-[60px] ">
                    <span className="">
                        <span className="text-[#0095FF]">NavigateUI</span>
                    </span>{' '}
                    - Free Component Library for Tailwind-React Developers
                </h2>
                <p className="mt-4 max-w-[500px] text-base text-gray-600 md:text-lg">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
                <div className="mt-6 flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-x-4 md:space-y-0">
                    <Link href="/components/accordion" className="flex w-full  gap-2 rounded-md bg-[#0095FF] px-6 py-3 text-white transition duration-300 hover:bg-[#2c6e9c] md:w-auto">
                        See Components
                    </Link>
                    <Link href="/components/accordion" className="w-full rounded-md bg-gray-200 px-6 py-3  transition duration-300 hover:bg-gray-300 md:w-auto">
                        Documentation
                    </Link>
                </div>
                <div className="mt-8 flex flex-col justify-center space-y-4  md:mt-12 md:flex-row md:space-x-8 md:space-y-0">
                    <div className="card w-full bg-gray-100 px-14 py-10 md:w-auto">
                        <h3 className="text-xl font-semibold md:text-2xl ">80+ Components</h3>
                        <p className="text-sm text-gray-600 md:text-base">Explore a vast collection of ready-to-use components.</p>
                    </div>
                    <div className="card w-full bg-gray-100 px-14 py-10 md:w-auto">
                        <h3 className="text-xl font-semibold md:text-2xl ">11 Categories</h3>
                        <p className="text-sm text-gray-600 md:text-base">Organized components for seamless integration.</p>
                    </div>
                </div>
            </div>
            <div>
                {/* why us */}
                <div>
                    <div className="container mx-auto px-4 py-16">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold leading-[52px] md:text-4xl md:leading-[60px] ">
                                Why choose - <span className="text-[#0095FF]">NavigateUI</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-[600px] text-base text-gray-600 md:text-lg">
                                Discover the features that make NavigateUI the perfect choice for your Tailwind-React projects.
                            </p>
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
        </div>
    );
}
