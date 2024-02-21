import React from 'react';
import Image from 'next/image';

const ComponentsCategory = () => {
    const arr = [1, 2, 4, 3435, 5, 45, 45, 45, 3545, 34];
    const Data = [
        {
            name: 'Accordin',
            Image: 'https://i.ibb.co/Jy2zGXB/Screenshot-1501-removebg-preview.png'
        },

        {
            name: 'Avatar',
            Image: 'https://i.ibb.co/d081N9w/Screenshot-1503-removebg-preview.png'
        },
        {
            name: 'Carousel',
            Image: 'https://i.ibb.co/RTy7nKF/Screenshot-1504-removebg-preview.png'
        },
        {
            name: 'Card',
            Image: 'https://i.ibb.co/Gdv28B7/Screenshot-1505-removebg-preview.png'
        },
        {
            name: 'Form',
            Image: 'https://i.ibb.co/Pmbj9Nm/Screenshot-1506-removebg-preview.png'
        },
        {
            name: 'Footer',
            Image: 'https://i.ibb.co/2MjvQhY/Screenshot-1507-removebg-preview.png'
        },
        {
            name: 'Hero',
            Image: 'https://i.ibb.co/tm0g3Ms/Screenshot-1508.png'
        },
        {
            name: 'Modal',
            Image: 'https://i.ibb.co/VqKH9V5/Screenshot-1511.png'
        }
    ];

    return (
        <div className="flex flex-col justify-center px-4 pb-8 pt-14 text-center text-white md:px-8 md:py-20">
            <h1 className="xsm:text-xl text-lg font-semibold sm:text-2xl md:text-3xl">
                {' '}
                Explore <span className="text-[#0095FF]">NavigateUI</span> Components
            </h1>
            <p className="xsm:text-[12px]  mx-auto mt-4  max-w-[600px] text-[10px]  font-medium text-gray-400 sm:text-sm md:text-base">
                Explore the wide range of <span className="text-[#0095FF]"> tailwind css</span> ui component. This components can make your project totally{' '}
                <span className="text-[#0095FF]">awesome</span> .
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-16 md:mt-24 lg:grid-cols-2 xl:grid-cols-4">
                {Data.map((item) => (
                    <div key={item} className="flex cursor-pointer max-w-[400px] mx-auto flex-col rounded-md p-2 transition-all duration-200 hover:scale-110 hover:bg-gray-800">
                        <div className="mx-auto flex h-[230px] w-full items-center rounded-md bg-gray-900 p-5 py-5 shadow-md ">
                            <Image src={item.Image} alt="navigateui logo" width={300} height={45} className="mx-auto max-h-[200px] w-fit" />
                        </div>
                        <div className="px-3">
                            <h2 className="mt-3 text-start text-lg  text-white">{item.name}</h2>
                            <p className="text-start text-[15px] text-gray-400">Explore a wide range of unique {item.name.toLowerCase()} from our website</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComponentsCategory;
